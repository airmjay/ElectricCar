import {
  Facebook,
  images,
  Insta,
  Linkedin,
  Location,
  Mail,
  Phone,
  X,
} from "@/app/assets/asset";
import { Box, Grid, GridCol, Text } from "@mantine/core";
import Image from "next/image";

  

export default function Footer() {
  const currentYear: number = new Date().getFullYear();
  return (
    <div className="px-[20px] pt-[20px] md:px-[80px] md:pt-[80px] bg-[#101828] pb-[40px]">
      <Box c={"white"}>
        <Grid gutter={{base: '30px' }}>
          <GridCol  display={'flex'} span={{ base: 12, md: 4 }} 
          className="items-center flex-col">
            <Box ml={'50px'}>
              <Image
                src={images.maxwell.src}
                width={10000}
                height={10000}
                alt="maxwell"
                
                style={{ width: "240px", height: "126px" }}
              />
            </Box>
            <span className="flex  md:w-[auto] text-center items-center gap-[5px] mt-[16px]">
              <Facebook /> <X /> <Insta /> <Linkedin />
            </span>
          </GridCol>
          <GridCol span={{ base: 12, md: 8 }}>
            <div className="flex flex-col md:flex-row items-center text-center md:text-left md:justify-center gap-[40px] md-gap-[68px]">
              <Box>
                <Text fz={"24px"} fw={"500"} lh={"32px"} lts={"0"}>
                  Company
                </Text>
                <ul className="mt-[24px] flex flex-col gap-[8px]">
                  <li>Contact</li>
                  <li>Blog</li>
                  <li>FAQs</li>
                </ul>
              </Box>
              <Box>
                <Text fz={"24px"} fw={"500"} lh={"32px"} lts={"0"}>
                  Features
                </Text>
                <ul className="mt-[24px] flex flex-col gap-[8px]">
                  <li>How It Work</li>
                  <li>How We Help</li>
                  <li>Who We Are</li>
                </ul>
              </Box>
              <Box>
                <ul className="flex flex-col gap-[12px]">
                  <li className="text-gray-500 flex font-[400] gap-[4px] items-center">
                    <Location />
                    <span>
                      Learning park 366 jerry
                      <br />
                      Underpass 08966 Virgina, US
                    </span>
                  </li>
                  <li className="text-gray-500 flex font-[400] gap-[4px] items-center">
                    <Mail />
                    <span>hello@maxwell.com</span>
                  </li>
                  <li className="text-gray-500 font-[400] flex gap-[4px] items-center">
                    <Phone />
                    <span>+1 (903) 326 7104</span>
                  </li>
                </ul>
              </Box>
            </div>
          </GridCol>
        </Grid>
      </Box>
      <div className="mt-[44px]">
        <Box>
          <div className="p-[40px] border border-x-0 border-t-0 border-b-[#667085]">
            <Image
              src={images.MaxWellHorizontal.src}
              alt="maxwell horizontal bg"
              width={10000}
              height={10000}
              style={{ width: "100%" }}
            />
          </div>
          <div className="flex mt-[28px] items-center justify-between text-gray-100">
            <Text c={'#98A2B3'} fw={'400'}>Copyright Maxwell Co. © {currentYear} </Text>
            <Text> Privacy & Policy</Text>
          </div>
        </Box>
      </div>
    </div>
  );
}
