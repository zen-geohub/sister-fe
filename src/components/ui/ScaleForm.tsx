import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useFormContext } from "react-hook-form";

const ScaleForm = ({ formField }: { formField: string }) => {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={formField}
      render={({ field }) => {
        return (
          <FormItem className="text-xs lg:text-sm">
            <FormControl>
              <RadioGroup
                onValueChange={(value) => field.onChange(Number(value))}
                defaultValue={field.value}
                className="flex justify-between text-xs lg:text-sm items-center"
              >
                <p className="font-semibold">
                  Tidak <br /> Setuju
                </p>
                <FormItem className="flex flex-col items-center">
                  <FormLabel>1</FormLabel>
                  <FormControl>
                    <RadioGroupItem value="1" />
                  </FormControl>
                </FormItem>
                <FormItem className="flex flex-col items-center">
                  <FormLabel>2</FormLabel>
                  <FormControl>
                    <RadioGroupItem value="2" />
                  </FormControl>
                </FormItem>
                <FormItem className="flex flex-col items-center">
                  <FormLabel>3</FormLabel>
                  <FormControl>
                    <RadioGroupItem value="3" />
                  </FormControl>
                </FormItem>
                <FormItem className="flex flex-col items-center">
                  <FormLabel>4</FormLabel>
                  <FormControl>
                    <RadioGroupItem value="4" />
                  </FormControl>
                </FormItem>
                <FormItem className="flex flex-col items-center">
                  <FormLabel>5</FormLabel>
                  <FormControl>
                    <RadioGroupItem value="5" />
                  </FormControl>
                </FormItem>

                <p className="font-semibold">Setuju</p>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};

export default ScaleForm;
