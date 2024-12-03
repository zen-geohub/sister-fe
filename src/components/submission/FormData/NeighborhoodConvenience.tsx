import ScaleForm from "@/components/ui/ScaleForm";
import { useFormContext } from "react-hook-form";
import { FormField, FormItem, FormControl } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

const NeighborhoodConvenience = () => {
  const { control } = useFormContext();

  return (
    <>
      <p className="font-semibold text-sm lg:text-base mb-2">
        E. <u>Kenyamanan Lingkungan</u>
      </p>

      <div className="pl-4 pr-1 gap-2 flex flex-col">
        <p className="text-justify text-xs lg:text-base">
          Kenyamanan lingkungan saat ini dari <strong>segi penghawaan</strong>{" "}
          (misalnya kenyamanan thermal atau temperatur/suhu){" "}
          <strong>lebih baik</strong> daripada sekian waktu sebelumnya (misalnya
          5 tahun yang lalu).
        </p>
        <ScaleForm formField={`neighborhoodConvenience[0].scale`} />
        <FormField
          control={control}
          name={`neighborhoodConvenience[0].additionalInfo`}
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
          Kenyamanan lingkungan saat ini dari <strong>segi visual</strong>{" "}
          (misalnya tidak ada polusi visual seperti baliho, banner, dsb.){" "}
          <strong>lebih baik</strong> daripada sekian waktu sebelumnya (misalnya
          5 tahun yang lalu).
        </p>
        <ScaleForm formField={`neighborhoodConvenience[1].scale`} />
        <FormField
          control={control}
          name={`neighborhoodConvenience[1].additionalInfo`}
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
          Kenyamanan lingkungan saat ini dari <strong>segi pencahayaan</strong>{" "}
          (misalnya tidak silau) <strong>lebih baik</strong> daripada sekian
          waktu sebelumnya (misalnya 5 tahun yang lalu).
        </p>
        <ScaleForm formField={`neighborhoodConvenience[2].scale`} />
        <FormField
          control={control}
          name={`neighborhoodConvenience[2].additionalInfo`}
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
          Kenyamanan lingkungan saat ini dari <strong>segi kebersihan udara</strong> (misalnya
          adanya asap kendaraan bermotor dan debu) <strong>lebih baik</strong> daripada sekian
          waktu sebelumnya (misalnya 5 tahun yang lalu).
        </p>
        <ScaleForm formField={`neighborhoodConvenience[3].scale`} />
        <FormField
          control={control}
          name={`neighborhoodConvenience[3].additionalInfo`}
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

export default NeighborhoodConvenience;
