import Image from "next/image";
import { images, RightArrow } from "@/app/assets/asset";
import { Box, Grid, GridCol, Text } from "@mantine/core";
import Navbar from "@/app/components/Navbar/page";
import { DownArrow } from "@/app/assets/asset";
export default function Banner() {
  return (
    <div className="relative overflow-hidden h-[auto] md:h-[auto] lg:h-[100vh]">
      <Box
        style={{ height: "100%" }}
        className="absolute bg-[#1D1D1DA6] z-50 top-[0] button-0 w-full"
      ></Box>
      <Box className="relative h-[100%] overflow-hidden px-[20px] md:px-[80px]">
        <Navbar />
        <Image
          src={images.bgBanner.src}
          alt="Hero section"
          width={0}
          height={0}
          layout="fill" // Fills the parent container
          objectFit="cover"
          className="absolute"
        />

        <Grid gutter="md" mt="32px" className="z-50 relative">
          <GridCol span={{ base: 12, md: 6 }} w="610px" fw="800" lts="0">
            <Box>
              <Text c="#EB8F02">
                For Everyone, Every Business, and Every Electric Vehicle
              </Text>
              <Text fz={{ base: '32px', lg: '72px' }} c="#FCFCFD" lh={{ base: '32px', lg: '72px' }}>
                Solutions for EV Charging <br /> Stations
              </Text>
              <Text fz="16px" c="#FCFCFD" fw="600" lh="24px" mt="20px">
                Our residential, commercial, and fast charging stations are
                highly compatible, built on open standards, and designed for
                accessibility for all.
              </Text>
            </Box>
            <Box w="270px" mt={{ base: '20px', lg: '60px' }} fw="600" lh="24px" lts="0" c="#FCFCFD">
              <Text display="block">
                Help us minimize your carbon footprint, one charge at a time!
              </Text>
              <a
                href="#"
                className="text-[#FCFCFD] mt-[24px] pb-[4px] flex w-[150px] items-center justify-between border 
                border-0 border-b-1"
              >
                <Text>Explore More</Text> <DownArrow />
              </a>
            </Box>
          </GridCol>
          <GridCol span={{ base: 12, md: 6 }}>
            <Box className="relative">
              <Image
                src={images.iphone.src}
                width={946}
                height={709}
                alt="iphone image"
                objectFit="cover"
              />
              <Box
                display={{ base: 'none', lg: 'block' }}
                fw={'600'}
                lh={'24px'}
                c={"#FCFCFD"}
                style={{ backdropFilter: "blur(50px)", borderRadius: '20px', overflow: 'hidden' }}
                p={"16px"}
                className="bg-[#FCFCFD33]  w-[337px] absolute 
                top-[40%] md:top-[300px] left-[10%] md:left-[150px]"
              >
                <Text>
                  Boost efficiency with the cutting-edge Charging Station App
                  for Electric Vehicle Owners
                </Text>
                <div className="mt-[16px] pb-[4px] inline-block border border-0 border-b-1">
                  <a className="flex items-center gap-[16px]"> <span>Download App</span>  <RightArrow /> </a>
                </div>
              </Box>
            </Box>
          </GridCol>
        </Grid>
      </Box>
    </div>
  );
}
