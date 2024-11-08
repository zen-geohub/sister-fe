import {
  submissionSchema,
  SubmissionSchema,
} from "@/components/submission/submissionSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { Form } from "@/components/ui/form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeftIcon, Cross1Icon, PlusIcon, ReloadIcon } from "@radix-ui/react-icons";
import SubmissionMap from "@/components/submission/SubmissionMap";
import { MapMouseEvent, useMap } from "react-map-gl/maplibre";
import ApplicantData from "@/components/submission/FormData/ApplicantData";
import EnvironmentQuality from "@/components/submission/FormData/EnvironmentQuality";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Link } from "react-router-dom";
import Security from "@/components/submission/FormData/Security";
import Traffic from "@/components/submission/FormData/Traffic";
import NeighborhoodConvenience from "@/components/submission/FormData/NeighborhoodConvenience";
import LandEconomicValue from "@/components/submission/FormData/LandEconomicValue";

const Submission = () => {
  const { mapSubmission } = useMap();
  const [toggleAdd, setToggleAdd] = useState<boolean>(false);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [submitMessage, setSubmitMessage] = useState<string>("");
  const form = useForm<SubmissionSchema>({
    resolver: zodResolver(submissionSchema),
    defaultValues: {
      Nama: "",
      Golongan: "",
      Kecamatan: "",
      Kelurahan: "",
      "Koordinat Lintang": 0,
      "Koordinat Bujur": 0,

      environmentQuality: [
        {
          statement:
            "Kualitas lingkungan saat ini dari segi keindahan (misalnya aspek estetika lingkungan dan keberadaan jalur hijau/taman) lebih baik daripada sekian waktu sebelumnya (misalnya 5 tahun yang lalu)",
          scale: 0,
          additionalInfo: "",
        },
        {
          statement:
            "Kualitas lingkungan saat ini dari segi kelengkapan amenitas/fasilitas (misalnya adanya ruang terbuka, street furniture, jalur pejalan kaki yang nyaman) lebih baik daripada sekian waktu sebelumnya  (misalnya 5 tahun yang lalu)",
          scale: 0,
          additionalInfo: "",
        },
        {
          statement:
            "Kualitas lingkungan saat ini dari segi pengelolaan limbah (misalnya pengelolaan limbah padat/sampah dan limbah cair) lebih baik daripada sekian waktu sebellumnya (misalnya 5 tahun yang lalu)",
          scale: 0,
          additionalInfo: "",
        },
        {
          statement:
            "Kualitas lingkungan saat ini dari segi kenyamanan (misalnya perasaan betah tinggal di lokasi karena kondisinya menyenangkan) lebih baik daripada sekian waktu sebelumnya (misalnya 5 tahun yang lalu)",
          scale: 0,
          additionalInfo: "",
        },
      ],
      security: [
        {
          statement:
            "Keamanan lingkungan saat ini dari segi minimnya kriminalitas (misalnya peristiwa yang terjadi semakin sedikit) lebih baik daripada sekian waktu sebelumnya (misalnya 5 tahun yang lalu)",
          scale: 0,
          additionalInfo: "",
        },
        {
          statement:
            "Keamanan lingkungan saat ini dari segi kenyamanan di kawasan sekitar rumah (misalnya tidak takut keluar rumah) lebih baik daripada sekian waktu sebelumnya (misalnya 5 tahun yang lalu)",
          scale: 0,
          additionalInfo: "",
        },
        {
          statement:
            "Keamanan lingkungan saat ini dari segi keinginan untuk tetap tinggal (misalnya tidak ingin pindah dari lokasi karena tidak merasa 'terancam' atau takut) lebih baik daripada sekian waktu sebelumnya (misalnya 5 tahun yang lalu)",
          scale: 0,
          additionalInfo: "",
        },
        {
          statement:
            "Keamanan lingkungan saat ini dari segi keinginan untuk mengembangkan bisnis/investasi (misalnya ingin menjalankan bisnis di kawasan tersebut) lebih baik daripada sekian waktu sebelumnya (misalnya 5 tahun yang lalu)",
          scale: 0,
          additionalInfo: "",
        },
      ],
      traffic: [
        {
          statement:
            "Kondisi lalu lintas saat ini dari segi kelancaran (misalnya tidak macet) lebih baik daripada sekian waktu sebelumnya (misalnya 5 tahun yang lalu)",
          scale: 0,
          additionalInfo: "",
        },
        {
          statement:
            "Kondisi lalu lintas saat ini dari segi keramaian (misalnya jumlah dan percampuran moda/alat transportasi) lebih baik daripada sekian waktu sebelumnya (misalnya 5 tahun yang lalu)",
          scale: 0,
          additionalInfo: "",
        },
        {
          statement:
            "Kondisi lalu lintas saat ini dari segi keselamatan (misalnya tidak ada kecelakaan) lebih baik daripada sekian waktu sebelumnya (misalnya 5 tahun yang lalu)",
          scale: 0,
          additionalInfo: "",
        },
        {
          statement:
            "Kondisi lalu lintas saat ini dari segi ketersediaan transportasi publik (misalnya dilalui jalur moda transportasi umum dan tersedia halte) lebih baik daripada sekian waktu sebelumnya (misalnya 5 tahun yang lalu)",
          scale: 0,
          additionalInfo: "",
        },
      ],
      neighborhoodConvenience: [
        {
          statement:
            "Kenyamanan lingkungan saat ini dari segi penghawaan (misalnya kenyamanan thermal atau temperatur/suhu) lebih baik daripada sekian waktu sebelumnya (misalnya 5 tahun yang lalu)",
          scale: 0,
          additionalInfo: "",
        },
        {
          statement:
            "Kenyamanan lingkungan saat ini dari segi visual (misalnya tidak ada polusi visual seperti baliho, banner, dsb.) lebih baik daripada sekian waktu sebelumnya (misalnya 5 tahun yang lalu)",
          scale: 0,
          additionalInfo: "",
        },
        {
          statement:
            "Kenyamanan lingkungan saat ini dari segi pencahayaan (misalnya tidak silau) lebih baik daripada sekian waktu sebelumnya (misalnya 5 tahun yang lalu)",
          scale: 0,
          additionalInfo: "",
        },
        {
          statement:
            "Kenyamanan lingkungan saat ini dari segi kebersihan udara (misalnya adanya asap kendaraan bermotor dan debu) lebih baik daripada sekian waktu sebelumnya (misalnya 5 tahun yang lalu)",
          scale: 0,
          additionalInfo: "",
        },
      ],
      landEconomicValue: [
        {
          statement:
            "Terdapat adanya indikasi kenaikan nilai ekonomi lahan di tempat anda tinggal daripada sekian waktu sebelumnya (misalnya dalam waktu 5 tahun terakhir); Contoh: ada tetangga yang menjual tanah dengan harga yang lebih mahal dari sebelumnya).",
          scale: 0,
          additionalInfo: "",
        },
        {
          statement:
            "Memiliki orientasi yang berkaitan dengan investasi, karena melihat nilai ekonomi lahan yang semakin tinggi daripada sekian waktu sebelumnya (misal dalam waktu 5 tahun terakhir), memutuskan/berencana untuk menjual asetnya dan pindah ke lokasi lain",
          scale: 0,
          additionalInfo: "",
        },
        {
          statement:
            "Memiliki orientasi yang berkaitan dengan investasi, karena melihat nilai ekonomi lahan yang semakin tinggi, memutuskan/berencana untuk membuka usaha sendiri di lokasi yang sama.",
          scale: 0,
          additionalInfo: "",
        },
      ],
    },
  });

  const { handleSubmit, setValue } = form;

  const onSubmit = handleSubmit((value) => {
    console.log(value);
    (async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND}/form`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            identity: {
              name: value.Nama,
              group: value.Golongan,
              district: value.Kecamatan,
              village: value.Kelurahan,
              latitude: value["Koordinat Lintang"],
              longitude: value["Koordinat Bujur"],
              dateSubmitted: new Date(),
            },
            environmentQuality: value.environmentQuality,
            security: value.security,
            traffic: value.traffic,
            neighborhoodConvenience: value.neighborhoodConvenience,
            landEconomicValue: value.landEconomicValue,
          }),
        });

        if (!response.ok) {
          throw new Error(`Pengiriman gagal! Status: ${response.status}`);
        }

        const data = await response.json();
        if (data.message) {
          setSubmitMessage(data.message);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  });

  useEffect(() => {
    function onClick(e: MapMouseEvent) {
      console.log(e);

      setValue("Koordinat Lintang", e.lngLat.lat);
      setValue("Koordinat Bujur", e.lngLat.lng);

      fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${e.lngLat.lat}&lon=${e.lngLat.lng}&format=jsonv2`
      )
        .then((response) => response.json())
        .then((data) => {
          setValue("Kecamatan", data.address.municipality);
          setValue("Kelurahan", data.address.village);
        });
    }

    if (toggleAdd) {
      mapSubmission?.on("click", onClick);
      if (mapSubmission) {
        mapSubmission.getCanvas().style.cursor = "pointer";
      }
    } else {
      mapSubmission?.off("click", onClick);
      if (mapSubmission) {
        mapSubmission.getCanvas().style.cursor = "";
      }
    }

    return () => {
      mapSubmission?.off("click", onClick);
    };
  }, [toggleAdd, mapSubmission]);

  return (
    <Form {...form}>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <div className="w-dvw h-dvh bg-background flex flex-col lg:flex-row p-2 gap-2 overflow-hidden font-poppins">
          <main className="relative w-full lg:w-1/2 min-h-[60dvh] lg:min-h-full ">
            <Link to="/">
              <Button
                variant="link"
                className="absolute text-secondary-foreground text-xs lg:no-underline underline"
              >
                <ChevronLeftIcon /> Kembali
              </Button>
            </Link>
            <form onSubmit={onSubmit}>
              <Card className="max-h-dvh">
                <CardHeader className="p-2">
                  <CardTitle className="text-center text-lg lg:text-xl font-bold ">
                    Formulir
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[calc(100dvh-45dvh)] lg:h-[calc(100dvh-16dvh)] lg:px-4">
                    <ApplicantData />
                    <br />
                    <EnvironmentQuality />
                    <br />
                    <Security />
                    <br />
                    <Traffic />
                    <br />
                    <NeighborhoodConvenience />
                    <br />
                    <LandEconomicValue />
                    <div className="w-full flex justify-end">
                      <DialogTrigger
                        className="mt-2 mr-2 bg-primary p-2 rounded-md flex justify-center items-center lg:text-base text-sm text-primary-foreground font-semibold"
                        type="submit"
                      >
                        {isDialogOpen ? <ReloadIcon className="animate-spin"/> : <p>Kirimkan</p>}
                      </DialogTrigger>
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </form>
          </main>
          <section className="w-full lg:w-1/2 flex-1 lg:h-full relative">
            <SubmissionMap />
            <Button
              className={cn(
                toggleAdd
                  ? "bg-destructive hover:bg-destructive hover:opacity-90 text-white"
                  : "bg-primary",
                " transition-colors absolute top-2 left-2 z-10"
              )}
              size="icon"
              onClick={() => {
                setToggleAdd(!toggleAdd);
              }}
            >
              {toggleAdd ? <Cross1Icon /> : <PlusIcon />}
            </Button>
          </section>
        </div>
        <DialogContent onInteractOutside={(e) => e.preventDefault()}>
          <DialogTitle>Status</DialogTitle>
          <div className="flex justify-center items-center text-xl">
            {submitMessage === "Data berhasil dikirim!" ? <p>Terima kasih telah mengisi survei!</p> : <p>Pengisian survei gagal!</p>}
          </div>
          <DialogFooter className="flex justify-center">
            {submitMessage !== "Data berhasil diterima!" ? (
              <DialogClose>
                <Button asChild>Kembali ke formulir</Button>
              </DialogClose>
            ) : (
              <Link to="/">
                <Button
                  variant="secondary"
                >
                  Kembali ke beranda
                </Button>
              </Link>
            )}
          </DialogFooter>
        </DialogContent>
        {/* <FormDialog formValue={formValue} image={image || ""} /> */}
      </Dialog>
    </Form>
  );
};

export default Submission;
