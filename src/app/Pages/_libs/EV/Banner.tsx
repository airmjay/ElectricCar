import Image from "next/image";
import { images } from "@/app/assets/asset";
import { Box, Text } from "@mantine/core";
import Navbar from "@/app/components/Navbar/page";
import BigHeading from "../../../components/Helper/BigHeading";
export default function Banner() {
  return (
    <div className="relative overflow-hidden" style={{height: '600px'}}>
      <Box
        style={{ height: "100%" }}
        className="absolute bg-[#1D1D1DA6] z-50 top-[0] button-0 w-full"
      ></Box>
      <Box className="relative h-[100%] overflow-hidden px-[20px] md:px-[80px]">
        <Navbar />
        <Image
          src={images.bgCar.src}
          alt="Hero section"
          width={0}
          height={0}
          layout="fill" 
          objectFit="cover"
          className="absolute"
        />
        <Box pos={'relative'} c='white' display='flex' className="h-[70%] flex-col z-90 items-center justify-center">
            <BigHeading  text="Which EV charging station is best for my business?"/>
            <Text mt={'24px'}>Posted 10/28/2024</Text>
        </Box>
      </Box>
    </div>
  );
}
