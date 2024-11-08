import ScaleForm from "@/components/ui/ScaleForm";
import { useFormContext } from "react-hook-form";
import { FormField, FormItem, FormControl } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

const EnvironmentQuality = () => {
  const { control } = useFormContext();

  return (
    <>
      <p className="font-semibold text-sm lg:text-base mb-2">
        B. <u>Kualitas Lingkungan</u>
      </p>

      <div className="pl-4 pr-1 gap-2 flex flex-col">
        <p className="text-justify text-xs lg:text-base">
          Kualitas lingkungan saat ini dari <strong>segi keindahan</strong>{" "}
          (misalnya aspek estetika lingkungan dan keberadaan jalur hijau/taman){" "}
          <strong>lebih baik </strong>
          daripada sekian waktu sebelumnya (misalnya 5 tahun yang lalu).
        </p>
        <ScaleForm formField={`environmentQuality[0].scale`} />
        <FormField
          control={control}
          name={`environmentQuality[0].additionalInfo`}
          render={({ field }) => {
            return (
              <FormItem>
                <FormControl>
                  <Textarea placeholder="Keterangan tambahan" className="mb-3" {...field} />
                </FormControl>
              </FormItem>
            );
          }}
        />

        <p className="text-justify text-xs lg:text-base">
          Kualitas lingkungan saat ini dari{" "}
          <strong>segi kelengkapan amenitas/fasilitas</strong>{" "}
          (misalnya adanya ruang terbuka, <em>street furniture</em>, jalur
          pejalan kaki yang nyaman) <strong>lebih baik</strong> daripada sekian
          waktu sebelumnya (misalnya 5 tahun yang lalu).
        </p>
        <ScaleForm formField={`environmentQuality[1].scale`} />
        <FormField
          control={control}
          name={`environmentQuality[1].additionalInfo`}
          render={({ field }) => {
            return (
              <FormItem>
                <FormControl>
                  <Textarea placeholder="Keterangan tambahan" className="mb-3" {...field} />
                </FormControl>
              </FormItem>
            );
          }}
        />

        <p className="text-justify text-xs lg:text-base">
          Kualitas lingkungan saat ini dari{" "}
          <strong>segi pengelolaan limbah</strong> (misalnya pengelolaan limbah
          padat/sampah dan limbah cair) <strong>lebih baik</strong> daripada
          sekian waktu sebellumnya (misalnya 5 tahun yang lalu).
        </p>
        <ScaleForm formField={`environmentQuality[2].scale`} />
        <FormField
          control={control}
          name={`environmentQuality[2].additionalInfo`}
          render={({ field }) => {
            return (
              <FormItem>
                <FormControl>
                  <Textarea placeholder="Keterangan tambahan" className="mb-3" {...field} />
                </FormControl>
              </FormItem>
            );
          }}
        />

        <p className="text-justify text-xs lg:text-base">
          Kualitas lingkungan saat ini dari <strong>segi kenyamanan</strong>{" "}
          (misalnya perasaan betah tinggal di lokasi karena kondisinya
          menyenangkan) <strong>lebih baik</strong> daripada sekian waktu
          sebelumnya (misalnya 5 tahun yang lalu).
        </p>
        <ScaleForm formField={`environmentQuality[3].scale`} />
        <FormField
          control={control}
          name={`environmentQuality[3].additionalInfo`}
          render={({ field }) => {
            return (
              <FormItem>
                <FormControl>
                  <Textarea placeholder="Keterangan tambahan" className="mb-3" {...field} />
                </FormControl>
              </FormItem>
            );
          }}
        />
      </div>

      {/* {getValues("environmentalQuality").map((item: {statement: string, scale: number, additionalInfo: string}, index: number) => (
        <div key={index}>
          <p className="text-justify text-xs">{item.statement}</p>
          <ScaleForm formField={`environmentalQuality.${index}.scale`} />
          <FormField
            control={control}
            name={`environmentalQuality.${index}.additionalInfo`}
            render={({ field }) => {
              return (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder="Keterangan tambahan"
                      className="text-xs"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              );
            }}
          />
        </div>
      ))} */}
    </>
  );
};

export default EnvironmentQuality;
