import ScaleForm from "@/components/ui/ScaleForm";
import { useFormContext } from "react-hook-form";
import { FormField, FormItem, FormControl } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

const LandEconomicValue = () => {
  const { control } = useFormContext();

  return (
    <>
      <p className="font-semibold text-sm lg:text-base mb-2">
        F. <u>Nilai Ekonomi Lahan</u>
      </p>

      <div className="pl-4 pr-1 gap-2 flex flex-col">
        <p className="text-justify text-xs lg:text-base">
          Terdapat <strong>adanya indikasi kenaikan nilai ekonomi lahan</strong>{" "}
          di tempat anda tinggal daripada sekian waktu sebelumnya (misalnya
          dalam waktu 5 tahun terakhir); Contoh: ada tetangga yang menjual tanah
          dengan harga yang lebih mahal dari sebelumnya.
        </p>
        <ScaleForm formField={`landEconomicValue[0].scale`} />
        <FormField
          control={control}
          name={`landEconomicValue[0].additionalInfo`}
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
          Memiliki orientasi yang berkaitan dengan investasi, karena melihat
          nilai ekonomi lahan yang semakin tinggi daripada sekian waktu
          sebelumnya (misal dalam waktu 5 tahun terakhir),{" "}
          <strong>
            memutuskan/berencana untuk menjual asetnya dan pindah ke lokasi lain
          </strong>
          .
        </p>
        <ScaleForm formField={`landEconomicValue[1].scale`} />
        <FormField
          control={control}
          name={`landEconomicValue[1].additionalInfo`}
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
          Memiliki orientasi yang berkaitan dengan investasi, karena melihat
          nilai ekonomi lahan yang semakin tinggi,{" "}
          <strong>
            memutuskan/berencana untuk membuka usaha sendiri di lokasi yang sama
          </strong>
          .
        </p>
        <ScaleForm formField={`landEconomicValue[2].scale`} />
        <FormField
          control={control}
          name={`landEconomicValue[2].additionalInfo`}
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

export default LandEconomicValue;
