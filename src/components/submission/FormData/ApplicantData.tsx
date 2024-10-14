import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useFormContext } from "react-hook-form";

const ApplicantData = () => {
  const { control } = useFormContext();

  return (
    <>
      <p className="font-semibold text-sm lg:text-base">
        A. <u>Profil Responden</u>
      </p>

      <div className="ml-4 mr-[1px] flex flex-col gap-1">
        <FormField
          control={control}
          name="Nama"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className="text-xs lg:text-sm">Nama *</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />

        <FormField
          control={control}
          name="Golongan"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className="text-xs lg:text-sm">Golongan *</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Penduduk">Penduduk</SelectItem>
                      <SelectItem value="Non-penduduk">Non-penduduk</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />

        <div className="w-full flex items-center gap-2">
          <FormField
            control={control}
            name="Kecamatan"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel className="text-xs lg:text-sm">
                    Kecamatan *
                  </FormLabel>
                  <FormControl>
                    <Input type="text" {...field} disabled />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />

          <FormField
            control={control}
            name="Kelurahan"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel className="text-xs lg:text-sm">
                    Kelurahan *
                  </FormLabel>
                  <FormControl>
                    <Input type="text" {...field} disabled />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
        </div>
        <p className="text-xs text-muted-foreground">Pilih menggunakan peta</p>

        <div className="w-full flex items-center gap-2">
          <FormField
            control={control}
            name="Koordinat Lintang"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel className="text-xs lg:text-sm">
                    Koordinat Lintang *
                  </FormLabel>
                  <FormControl>
                    <Input type="text" {...field} disabled />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />

          <FormField
            control={control}
            name="Koordinat Bujur"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel className="text-xs lg:text-sm">
                    Koordinat Bujur *
                  </FormLabel>
                  <FormControl>
                    <Input type="text" {...field} disabled />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
        </div>
        <p className="text-xs text-muted-foreground">Pilih menggunakan peta</p>
      </div>
    </>
  );
};

export default ApplicantData;
