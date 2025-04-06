import { Apple, images, PlayStore } from "@/app/assets/asset";
import BigHeading from "@/app/components/Helper/BigHeading";
import Heading from "@/app/components/Helper/Heading";
import { Box, Grid, GridCol, Text } from "@mantine/core";
import Image from "next/image";

export default function OurMobile() {
  return (
    <Box px={{base:'10px' ,md:"80px"}} py="40px">
      <div className="bg-[#D7EEFF] relative rounded-[40px] pb-[30px]">
        <Image
          className="absolute h-[100%] w-[70%]"
          src={images.Pattern.src}
          width={10000}
          height={10000}
          alt="pattern"
        />
        <Grid w={"100%"} gutter={"md"}>
          <GridCol
            px={"30px"}
            w={"100%"}
            pos={"relative"}
            span={{ base: 12, md: 7 }}
          >
            <Box py="65px">
              <Heading text='Our Mobile App'/>
              <BigHeading className="z-88" otherProps={{ta: 'left', mt: '10px'}} text="Now is the Perfect Moment to Embrace a Positive Transformation!" />
            </Box>
          </GridCol>
          <GridCol span={{ base: 12, md: 5 }}>
            <Box>
              <Box>
                <Image
                  className="z-88"
                  src={images.iphone15.src}
                  alt="iphone 15"
                  width={10000}
                  height={10000}
                  style={{ width: "80%", height: "217px" }}
                  objectFit="cover"
                />
              </Box>
              <Box>
                <Text className="z-100" c={"#344054"} fw={"400"} ta={"center"} mt={"24px"}>
                  Get it now from the Google Play Store or the Apple App Store!
                </Text>
                <div className="flex justify-center w-[100%] gap-3 mt-[16px]">
                  <button className="cursor-pointer z-100">
                    <PlayStore />
                  </button>
                  <button className="cursor-pointer z-100">
                      <Apple />
                  </button>
                </div>
              </Box>
            </Box>
          </GridCol>
        </Grid>
      </div>
    </Box>
  );
}
