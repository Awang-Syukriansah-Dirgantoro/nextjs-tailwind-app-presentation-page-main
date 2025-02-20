"use client";

import React from "react";
import {
  Typography,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

// Komponen Icon untuk accordion
function Icon({ id, open }: { id: number; open: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

const FAQS = [
  {
    title: "Apa itu RenovDulu?",
    desc: "RenovDulu adalah platform yang memudahkan pengajuan proyek renovasi rumah atau bangunan dengan estimasi biaya yang transparan dan tim profesional.",
  },
  {
    title: "Apakah saya bisa melihat estimasi biaya sebelum proyek dimulai?",
    desc: "Ya! RenovDulu akan menghitung Rencana Anggaran Biaya (RAB) secara otomatis berdasarkan data yang Anda isi sebelum Anda menekan tombol final submit.",
  },
  {
    title: "Berapa lama proses review proyek setelah saya submit?",
    desc: "Proses review biasanya memakan waktu 1-3 hari kerja. Setelah itu, Anda akan mendapatkan notifikasi mengenai status proyek.",
  },
  {
    title: "Apakah saya bisa mengedit proyek setelah submit?",
    desc: "Saat ini, proyek yang sudah disubmit tidak bisa diedit secara langsung. Jika ada perubahan, Anda bisa menghubungi tim support atau membuat pengajuan ulang.",
  },
  {
    title: "Bagaimana saya tahu proyek saya disetujui?",
    desc: "Anda akan mendapatkan notifikasi di aplikasi mengenai status proyek, apakah Sedang Direview, Disetujui, atau Butuh Revisi.",
  },
  {
    title: "Apakah ada biaya tersembunyi?",
    desc: "Tidak, RenovDulu memberikan estimasi biaya yang transparan tanpa biaya tersembunyi.",
  },
  {
    title: "Bagaimana cara mengajukan proyek renovasi?",
    desc: `● Klik tombol "Submit Project" di aplikasi. <br/>
          ● Isi detail proyek seperti nama proyek, alamat, luas tanah, jumlah lantai, dll. <br/>
          ● Unggah dokumen pendukung (foto bangunan, denah, atau kondisi bangunan saat ini). <br/>
          ● Pilih kebutuhan ruangan dan preferensi desain. <br/>
          ● Lihat ringkasan proyek dan estimasi RAB sebelum mengirimkan pengajuan. <br/>
          ● Setelah submit, tim kami akan mereview proyek Anda dan memberikan update status.`,
  },
  {
    title: "Apa yang terjadi setelah proyek saya disetujui?",
    desc: `Setelah proyek disetujui, Anda akan mendapatkan rincian lebih lanjut mengenai: <br/>
✅ Rencana kerja & timeline proyek <br/>
✅ Tim kontraktor yang menangani proyek <br/>
✅ Tahapan pembayaran dan update progress proyek`,
  },
  {
    title: "Apakah RenovDulu menyediakan jasa kontraktor?",
    desc: "Ya, RenovDulu bekerja sama dengan kontraktor terpercaya yang akan menangani proyek renovasi Anda. RenovDulu bukan marketplace, tetapi menyediakan kontraktor dan tenaga lapangan sendiri, serta menemani proses renovasi dari awal hingga selesai.",
  },
  {
    title: "Bagaimana jika saya mengalami masalah atau ingin bertanya lebih lanjut?",
    desc: "Anda bisa menghubungi tim support melalui email ke support@renovdulu.com.",
  },
];

export function Faqs() {
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <section className="px-8 py-20">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            Sering Ditanyakan
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto mb-24 !text-gray-500 lg:w-3/5"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            Mungkin ada pertanyaan yang belum Anda ketahui, kami akan menjawab pertanyaan Anda dengan detail.
          </Typography>
        </div>

        <div className="grid gap-4">
          {FAQS.map(({ title, desc }, index) => (
            <Accordion
              key={title}
              open={open === index + 1}
              icon={<Icon id={index + 1} open={open} />}
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              <AccordionHeader 
                onClick={() => handleOpen(index + 1)}
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                {title}
              </AccordionHeader>
              <AccordionBody>
                <Typography
                  className="font-normal !text-gray-500"
                  placeholder=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                  dangerouslySetInnerHTML={{ __html: desc }}
                >
                  {null}
                </Typography>
              </AccordionBody>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faqs;
