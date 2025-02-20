"use client";

import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";

function Hero() {
  return (
    <div className="relative min-h-screen w-full">
      <header className="grid !min-h-[49rem] bg-[#4a3732] px-8">
        <div className="container mx-auto mt-32 grid h-full w-full grid-cols-1 place-items-center lg:mt-14 lg:grid-cols-2">
          <div className="col-span-1">
            <Typography variant="h1" color="white" className="mb-4" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
              Memberikan Pengalaman <br /> Renovasi yang Berbeda!
            </Typography>
            <Typography
              variant="lead"
              className="mb-7 !text-white md:pr-16 xl:pr-28"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              Ajukan proyek renovasi dengan mudah! Dengan renovDulu, kamu bisa mengajukan proyek, memantau progres secara real-time, serta mengelola semua dokumen penting langsung dari aplikasi. Semua proses dalam satu platform yang efisien!
            </Typography>
            <Typography className="mb-4" color="white" variant="h6" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
              Download aplikasi di Play Store / App Store dan mulai renovasi tanpa ribet!
            </Typography>
            <div className="flex flex-col gap-2 md:mb-2 md:w-10/12 md:flex-row">
              <Button
                size="lg"
                color="white"
                className="flex justify-center items-center gap-3"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                <Image
                  width={256}
                  height={256}
                  src="/logos/logo-apple.png"
                  alt="App Store"
                  className="w-6 h-6"
                />
                App Store
              </Button>
              <Button
                size="lg"
                color="white"
                className="flex justify-center items-center gap-3"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                <Image
                  width={256}
                  height={256}
                  src="/logos/logo-google.png"
                  alt="Play Store"
                  className="w-6 h-6"
                />
                Play Store
              </Button>
            </div>
          </div>
          <Image
            width={470}
            height={576}
            src="/image/iPhone 16 Pro mockup natural titanium.png"
            alt="Team Work"
            className="object-contain col-span-1 my-20 h-full -translate-y-32 lg:my-0 lg:ml-auto lg:max-h-[40rem] lg:translate-y-0"
          />
        </div>
      </header>
      <div className="mx-8 lg:mx-16 -mt-24 rounded-xl bg-white p-5 md:p-14 shadow-md">
        <div>
          <Typography variant="h3" color="blue-gray" className="mb-3" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
            Apa itu RenovDulu ?
          </Typography>
          <Typography
            variant="paragraph"
            className="font-normal !text-gray-500 lg:w-5/12"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            RenovDulu adalah solusi renovasi modern yang menyediakan tenaga ahli profesional langsung dari tim kami. Semua proyek dikerjakan oleh tukang dan kontraktor terlatih & bersertifikat dari renovDulu. Cukup konsultasi lewat aplikasi, dan kami akan mengurus semuanya untukmu!
          </Typography>
        </div>
      </div>
    </div>
  );
}
export default Hero;
