"use client";

import React from "react";
import Image from "next/image";
import InfoCard from "@/components/info-card";
import { Typography, Card, CardBody } from "@material-tailwind/react";
import { BellAlertIcon, CursorArrowRaysIcon, DocumentCheckIcon, PresentationChartLineIcon, UserGroupIcon } from "@heroicons/react/24/solid";

const OPTIONS = [
  {
    icon: PresentationChartLineIcon,
    title: "100",
    description: "Pantau progres renovasi secara real-time",
  },
  {
    icon: CursorArrowRaysIcon,
    title: "500+",
    description: "Approve & revisi dokumen proyek dalam satu klik",
  },
  {
    icon: UserGroupIcon,
    title: "24/7",
    description: "Koordinasi lebih efisien dengan tim & vendor proyek",
  },
  {
    icon: BellAlertIcon,
    title: "5/5",
    description: "Notifikasi otomatis untuk setiap update perkembangan proyek",
  },
  {
    icon: DocumentCheckIcon,
    title: "5/5",
    description: "Dokumentasi renovasi tersimpan rapi & mudah diakses kapan saja",
  },
];

export function MobileConvenience() {
  return (
    <section className="py-20 px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
        {/* <Image
          width={256}
          height={256}
          src="/image/iphone.png"
          className="col-span-1 w-1/2 mx-auto lg:w-10/12"
          alt="iphone-photo"
        /> */}
        <Image
          width={256}
          height={256}
          src="/image/Device_3-removebg-preview.png"
          className="object-contain h-3/4 col-span-1 w-1/2 mx-auto lg:w-10/12"
          alt="iphone-photo"
        />
        <div className="col-span-1 mx-auto max-w-lg px-4 lg:px-0">
          <Typography variant="h2" color="blue-gray" className="mb-4" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
            Pantau & Kendalikan Proyek Renovasi dengan Mudah!
          </Typography>
          <Typography
            variant="lead"
            className="mb-5 px-4 text-left  text-xl !text-gray-500 lg:px-0  "
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            Dengan renovDulu, kamu bisa memantau progress renovasi secara real-time, memastikan setiap tahap berjalan sesuai rencana, serta menyimpan semua dokumen proyek dengan aman. Semua dalam satu aplikasi!
          </Typography>

          <div className="col-span-2 grid gap-5 grid-cols-2 ">
            {OPTIONS.map(({ title, description, icon }) => (
              <InfoCard key={title} title={title} icon={icon}>
                {description}
              </InfoCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default MobileConvenience;
