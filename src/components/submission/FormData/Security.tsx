import ScaleForm from "@/components/ui/ScaleForm";
import { useFormContext } from "react-hook-form";
import { FormField, FormItem, FormControl } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

const Security = () => {
  const { control } = useFormContext();

  return (
    <>
      <p className="font-semibold text-sm lg:text-base mb-2">
        C. <u>Keamanan/Kriminalitas</u>
      </p>

      <div className="pl-4 pr-1 gap-2 flex flex-col">
        <p className="text-justify text-xs lg:text-base">
          Keamanan lingkungan saat ini dari{" "}
          <strong>segi minimnya kriminalitas</strong> (misalnya peristiwa yang
          terjadi semakin sedikit) <strong>lebih baik</strong> daripada sekian
          waktu sebelumnya (misalnya 5 tahun yang lalu).
        </p>
        <ScaleForm formField={`security[0].scale`} />
        <FormField
          control={control}
          name={`security[0].additionalInfo`}
          render={({ field }) => {
            return (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Keterangan tambahan"
                    className="mb-3"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            );
          }}
        />

        <p className="text-justify text-xs lg:text-base">
          Keamanan lingkungan saat ini dari{" "}
          <strong>segi kenyamanan di kawasan sekitar rumah</strong> (misalnya
          tidak takut keluar rumah) <strong>lebih baik</strong> daripada sekian
          waktu sebelumnya (misalnya 5 tahun yang lalu).
        </p>
        <ScaleForm formField={`security[1].scale`} />
        <FormField
          control={control}
          name={`security[1].additionalInfo`}
          render={({ field }) => {
            return (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Keterangan tambahan"
                    className="mb-3"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            );
          }}
        />

        <p className="text-justify text-xs lg:text-base">
          Keamanan lingkungan saat ini dari{" "}
          <strong>segi keinginan untuk tetap tinggal</strong>
          (misalnya tidak ingin pindah dari lokasi karena tidak merasa
          'terancam' atau takut) <strong>lebih baik</strong> daripada sekian
          waktu sebelumnya (misalnya 5 tahun yang lalu).
        </p>
        <ScaleForm formField={`security[2].scale`} />
        <FormField
          control={control}
          name={`security[2].additionalInfo`}
          render={({ field }) => {
            return (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Keterangan tambahan"
                    className="mb-3"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            );
          }}
        />

        <p className="text-justify text-xs lg:text-base">
          Keamanan lingkungan saat ini dari{" "}
          <strong>segi keinginan untuk mengembangkan bisnis/investasi</strong>{" "}
          (misalnya ingin menjalankan bisnis di kawasan tersebut){" "}
          <strong>lebih baik</strong> daripada sekian waktu sebelumnya (misalnya
          5 tahun yang lalu).
        </p>
        <ScaleForm formField={`security[3].scale`} />
        <FormField
          control={control}
          name={`security[3].additionalInfo`}
          render={({ field }) => {
            return (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Keterangan tambahan"
                    className="mb-3"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            );
          }}
        />
      </div>
    </>
  );
};

export default Security;
