import { chargeType, PhoneType } from "@/app/constants/HowItWork/content";
import { Box, GridCol, Text } from "@mantine/core";
import Image from "next/image";

export const GridPhone: React.FC<PhoneType> = ({ image, title, content }) => (
  <GridCol span={{ base: 12, md: 6 }}>
    <Box bg="#1D2939" className="rounded-lg">
      <Image  src={image} alt="iphone" width={1200} height={800} objectFit="cover"/>
    </Box>
    <Box mt="24px">
      <Text fw="500" lh="24px">
        {title}
      </Text>
      <Text
        mt="8px"
        fz={{ base: "24px", md: "35px" }}
        fw="600"
        lh={{ base: "24px", md: "40px" }}
        lts="0px"
      >
        {content}
      </Text>
    </Box>
  </GridCol>
);
export const GridCharge: React.FC<chargeType> = ({ image, title, content }) => (
  <Box bg="#344054" className="rounded-md" pb="20px">
    <Image
      src={image}
      alt="charge"
      width={10000}
      height={10000}
      style={{ height: "200px" }}
    />
    <Text
      mt={"10px"}
      fw="600"
      lh="24px"
      lts="0px"
      fz="18px"
      className="text-center"
    >
      {title}
    </Text>
    <Text
      fw="400"
      c={"#D0D5DD"}
      lh="24px"
      lts="0px"
      fz="14px"
      className="text-center"
    >
      {content}
    </Text>
  </Box>
);
