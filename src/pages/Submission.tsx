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
import { Cross1Icon, PlusIcon } from "@radix-ui/react-icons";
import SubmissionMap from "@/components/submission/SubmissionMap";
import { MapMouseEvent, useMap } from "react-map-gl/maplibre";
import ApplicantData from "@/components/submission/FormData/ApplicantData";
import EnvironmentQuality from "@/components/submission/FormData/EnvironmentQuality";

const Submission = () => {
  const { mapSubmission } = useMap();
  const [toggleAdd, setToggleAdd] = useState<boolean>(false);
  // const [formValue, setFormValue] = useState<object>({});
  const form = useForm<SubmissionSchema>({
    resolver: zodResolver(submissionSchema),
    defaultValues: {
      Nama: "",
      Golongan: "",
      Kecamatan: "",
      Kelurahan: "",
      "Koordinat Lintang": 0,
      "Koordinat Bujur": 0,

      "Pernyataan 11": 0,
      "Pernyataan 12": 0,
      "Pernyataan 13": 0,

      "Pernyataan 21": 0,
      "Pernyataan 22": 0,
      "Pernyataan 23": 0,

      "Pernyataan 31": 0,
      "Pernyataan 32": 0,
      "Pernyataan 33": 0,

      "Pernyataan 41": 0,
      "Pernyataan 42": 0,
      "Pernyataan 43": 0,
    },
  });

  const { handleSubmit, setValue } = form;

  const onSubmit = handleSubmit((value) => {
    // setFormValue(value);
    console.log(value)
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
          setValue("Kecamatan", data.address.municipality)
          setValue("Kelurahan", data.address.village)
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
      {/* <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}> */}
      <div className="w-dvw h-dvh bg-background flex flex-col lg:flex-row p-2 gap-2 overflow-hidden font-poppins">
        <main className="relative w-full lg:w-1/2 h-fit lg:h-full ">
          {/* <Link to="/">
              <Button
                variant="link"
                className="absolute text-secondary-foreground text-xs lg:no-underline underline"
              >
                <ChevronLeftIcon /> Kembali
              </Button>
            </Link> */}
          <form onSubmit={onSubmit}>
            <Card className="max-h-dvh">
              <CardHeader>
                <CardTitle className="text-center text-lg lg:text-xl font-bold">
                  Formulir
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[calc(100dvh-400px)] lg:h-[calc(100dvh-118px)]">
                  <ApplicantData />
                  <br />
                  <EnvironmentQuality label="Kualitas Lingkungan"/>
                  <br />
                  <EnvironmentQuality label="Keamanan/Kriminalitas"/>
                  <br />
                  <EnvironmentQuality label="Lalulintas"/>
                  <br />
                  <EnvironmentQuality label="Kenyamanan Lingkungan"/>
                  {/* <div className="w-full flex justify-end">
                      <DialogTrigger
                        className="mt-2 mr-2 bg-primary p-2 rounded-md flex justify-center items-center lg:text-base text-sm text-primary-foreground font-semibold"
                        type="submit"
                      >
                        Ajukan
                      </DialogTrigger>
                    </div> */}
                </ScrollArea>
              </CardContent>
            </Card>
          </form>
        </main>
        <section className="w-full lg:w-1/2 h-80 lg:h-full relative">
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
      {/* <FormDialog formValue={formValue} image={image || ""} /> */}
      {/* </Dialog> */}
    </Form>
  );
};

export default Submission;
