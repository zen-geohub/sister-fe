import ScaleForm from "@/components/ui/ScaleForm";




const EnvironmentQuality = ({label}: {label: string}) => {
  return (
    <>
      <p className="font-semibold text-sm lg:text-base mb-2">
        B. <u>{label}</u>
      </p>

      <div className="ml-4 mr-[1px] flex flex-col gap-3">
        <ScaleForm formField="Pernyataan 11" label="Pernyataan 1"/>
        <ScaleForm formField="Pernyataan 12" label="Pernyataan 2"/>
        <ScaleForm formField="Pernyataan 13" label="Pernyataan 3"/>
      </div>
    </>
  );
};

export default EnvironmentQuality;
