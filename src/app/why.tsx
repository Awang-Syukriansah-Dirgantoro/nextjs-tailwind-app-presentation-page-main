"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";

import {
  CurrencyDollarIcon,
  CursorArrowRaysIcon,
  DocumentCheckIcon,
  EyeIcon,
  HeartIcon,
  LightBulbIcon,
  LockClosedIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/solid";

import FeatureCard from "../components/feature-card";

const FEATURES = [
  {
    icon: DocumentCheckIcon,
    title: "Tenaga Ahli Berpengalaman",
    children:
      "Tim tukang & kontraktor yang sudah diverifikasi.",
  },
  {
    icon: LockClosedIcon,
    title: "Renovasi Terjamin",
    children:
      "Proses dilakukan dengan standar tinggi.",
  },
  {
    icon: EyeIcon,
    title: "Tanpa Ribet & Transparan",
    children:
      "Semua biaya & progres bisa dicek langsung di aplikasi.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Jaminan Kualitas & Garansi",
    children:
      "Layanan terpercaya & berkualitas.",
  },
];

export function WhyMust() {
  return (
    <section className="py-28 px-4">
      <div className="container mx-auto mb-20 text-center">
        {/* <Typography color="blue-gray" className="mb-2 font-bold uppercase">
          RenovDulu
        </Typography> */}
        <Typography variant="h1" color="blue-gray" className="mb-4">
          Kenapa Harus renovDulu?
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 !text-gray-500 lg:w-11/12 lg:px-8 "
        >
          Bukan marketplace biasa! renovDulu memiliki tim sendiri yang siap menangani renovasi dari awal hingga selesai.
        </Typography>
      </div>
      <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-4 gap-y-12 md:grid-cols-2">
        {FEATURES.map((props, idx) => (
          <FeatureCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
export default WhyMust;
