import {
    Typography,
    Card,
    CardBody,
  } from "@material-tailwind/react";
  
  
  interface FeatureCardProps {
    icon: React.ElementType;
    title: string;
    children: React.ReactNode;
  }
  
  export function FeatureCard({ icon: Icon, title, children }: FeatureCardProps) {
    return (
      <Card color="transparent" shadow={false} placeholder="" className="group" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
        <CardBody className="grid justify-center" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
          <div className="mb-4 grid h-12 w-12 place-self-center rounded-lg bg-gray-900 p-2.5 text-center text-white">
            <Icon className="h-6 w-6 place-self-center" />
          </div>
          <Typography 
            variant="h5" 
            color="blue-gray" 
            className="mb-2 text-center" 
            placeholder="" 
            onPointerEnterCapture={() => {}} 
            onPointerLeaveCapture={() => {}}
          >
            {title}
          </Typography>
          <Typography 
            className="font-normal !text-gray-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100 text-center" 
            placeholder="" 
            onPointerEnterCapture={() => {}} 
            onPointerLeaveCapture={() => {}}
          >
            {children}
          </Typography>
        </CardBody>
      </Card>
    );
  }

  export default FeatureCard;
  