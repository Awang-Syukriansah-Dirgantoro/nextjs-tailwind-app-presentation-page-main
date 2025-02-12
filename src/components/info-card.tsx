import React from "react";

import { Typography, Card, CardBody } from "@material-tailwind/react";

interface InfoCardProps {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}


export function InfoCard({ icon: Icon, title, children }: InfoCardProps) {
  return (
    <Card color="transparent" shadow={false} placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
      <CardBody className="grid px-0" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
        {/* <Typography variant="h2" color="blue-gray" className="mb-2">
          {title}
        </Typography> */}
        <div className="mb-4 grid h-12 w-12 place-content-center rounded-lg bg-gray-900 p-2.5 text-left text-white">
            <Icon className="h-6 w-6" />
          </div>
        <Typography className=" font-normal" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>{children}</Typography>
      </CardBody>
    </Card>
  );
}

export default InfoCard;
