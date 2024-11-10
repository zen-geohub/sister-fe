import { z } from "zod";

const statementSchema = z.object({
  statement: z.string().min(1),
  scale: z.number().optional(),
  additionalInfo: z.string().optional(),
});

const categorySchema = z.array(statementSchema);

export const submissionSchema = z.object({
  Nama: z.string().min(1, "Nama pemohon tidak boleh kosong!"),
  Golongan: z.string().min(1, "Golongan tidak boleh kosong!"),
  Kecamatan: z.string().min(1, "Pilih lokasi menggunakan peta!"),
  Kelurahan: z.string().min(1, "Pilih lokasi menggunakan peta!"),
  "Koordinat Lintang": z.number().min(-90).max(90),
  "Koordinat Bujur": z.number().min(-180).max(180),

  environmentQuality: categorySchema,
  security: categorySchema,
  traffic: categorySchema,
  neighborhoodConvenience: categorySchema,
  landEconomicValue: categorySchema
});

export type SubmissionSchema = z.infer<typeof submissionSchema>;
