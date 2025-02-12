"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";

import {
  BanknotesIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  HeartIcon,
  LightBulbIcon,
  LockClosedIcon,
  PresentationChartLineIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";

import FeatureCard from "../components/feature-card";

const FEATURES = [
  {
    icon: UserGroupIcon,
    title: "Tukang & Kontraktor Profesional",
    children:
      "Dipilih & dikelola langsung oleh renovDulu.",
  },
  {
    icon: BanknotesIcon,
    title: "Estimasi Biaya Transparan",
    children:
      "Tanpa biaya tersembunyi.",
  },
  {
    icon: DevicePhoneMobileIcon,
    title: "Konsultasi Online Cepat",
    children:
      "Langsung di aplikasi tanpa WhatsApp atau kontak langsung.",
  },
  {
    icon: PresentationChartLineIcon,
    title: "Pantau Progres Renovasi",
    children:
      "Real-time dari aplikasi.",
  },
];

export function Features() {
  return (
    <section className="py-28 px-4">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="blue-gray" className="mb-2 font-bold uppercase">
          RenovDulu
        </Typography>
        <Typography variant="h1" color="blue-gray" className="mb-4">
          Memberikan Pengalaman Renovasi yang Berbeda!
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 !text-gray-500 lg:w-11/12 lg:px-8 "
        >
          RenovDulu adalah solusi renovasi modern yang menyediakan tenaga ahli profesional langsung dari tim kami.
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
export default Features;
