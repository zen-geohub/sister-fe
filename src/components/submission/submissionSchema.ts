import { z } from "zod";

export const submissionSchema = z.object({
  Nama: z.string().min(1, "Nama pemohon tidak boleh kosong!"),
  Golongan: z.string(),
  Kecamatan: z.string().min(1),
  Kelurahan: z.string().min(1),
  "Koordinat Lintang": z.number().min(-90).max(90),
  "Koordinat Bujur": z.number().min(-180).max(180),

  "Pernyataan 11": z.number().min(1).max(5),
  "Pernyataan 12": z.number().min(1).max(5),
  "Pernyataan 13": z.number().min(1).max(5),

  "Pernyataan 21": z.number().min(1).max(5),
  "Pernyataan 22": z.number().min(1).max(5),
  "Pernyataan 23": z.number().min(1).max(5),

  "Pernyataan 31": z.number().min(1).max(5),
  "Pernyataan 32": z.number().min(1).max(5),
  "Pernyataan 33": z.number().min(1).max(5),

  "Pernyataan 41": z.number().min(1).max(5),
  "Pernyataan 42": z.number().min(1).max(5),
  "Pernyataan 43": z.number().min(1).max(5),
});

export type SubmissionSchema = z.infer<typeof submissionSchema>;
