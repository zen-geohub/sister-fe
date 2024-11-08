import ScaleForm from "@/components/ui/ScaleForm";
import { useFormContext } from "react-hook-form";
import { FormField, FormItem, FormControl } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

const Traffic = () => {
  const { control } = useFormContext();

  return (
    <>
      <p className="font-semibold text-sm lg:text-base mb-2">
        D. <u>Lalu Lintas</u>
      </p>

      <div className="pl-4 pr-1 gap-2 flex flex-col">
        <p className="text-justify text-xs lg:text-base">
          Kondisi lalu lintas saat ini dari <strong>segi kelancaran</strong>{" "}
          (misalnya tidak macet) <strong>lebih baik</strong> daripada sekian
          waktu sebelumnya (misalnya 5 tahun yang lalu).
        </p>
        <ScaleForm formField={`traffic[0].scale`} />
        <FormField
          control={control}
          name={`traffic[0].additionalInfo`}
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
          Kondisi lalu lintas saat ini dari <strong>segi keramaian</strong>{" "}
          (misalnya jumlah dan percampuran moda/alat transportasi){" "}
          <strong>lebih baik</strong> daripada sekian waktu sebelumnya (misalnya
          5 tahun yang lalu).
        </p>
        <ScaleForm formField={`traffic[1].scale`} />
        <FormField
          control={control}
          name={`traffic[1].additionalInfo`}
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
          Kondisi lalu lintas saat ini dari <strong>segi keselamatan</strong>{" "}
          (misalnya tidak ada kecelakaan) <strong>lebih baik</strong> daripada
          sekian waktu sebelumnya (misalnya 5 tahun yang lalu).
        </p>
        <ScaleForm formField={`traffic[2].scale`} />
        <FormField
          control={control}
          name={`traffic[2].additionalInfo`}
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
          Kondisi lalu lintas saat ini dari{" "}
          <strong>segi ketersediaan transportasi publik</strong> (misalnya
          dilalui jalur moda transportasi umum dan tersedia halte){" "}
          <strong>lebih baik</strong> daripada sekian waktu sebelumnya (misalnya
          5 tahun yang lalu).
        </p>
        <ScaleForm formField={`traffic[3].scale`} />
        <FormField
          control={control}
          name={`traffic[3].additionalInfo`}
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

export default Traffic;
