import { DownloadDown, Mark } from "@/app/assets/asset";
import { Box, Button, Grid, GridCol, Text } from "@mantine/core";
import Phone from "./phone";
import {
  WhoWeAreRating,
  RatingCard,
  contentLayout,
  childContent,
} from "@/app/constants/WhoWeAre/content";
import Heading from "@/app/components/Helper/Heading";
import BigHeading from "@/app/components/Helper/BigHeading";
import Map from "./Map";
import ElectricVehicle from "./ElectricVehicle";
import ThreeCard from "./ThreeCard";


const Rating: React.FC<WhoWeAreRating> = ({ rate, value }) => (
  <>
    <Text fz="32px" fw="600" lh="40px" lts="0%">
      {rate}
    </Text>
    <Text lh="24px" lts="0%" fw="400" mt="8px">
      {value}
    </Text>
  </>
);
const MarkDiv: React.FC<childContent> = ({ title }) => (
  <li className="text-[16px] mt-[8px] font-[400] leading-[24px] treaking-[0] flex items-center gap-[4px]">
    <span className="w-[32px] h-[32px] bg-[#FEF7ED] flex justify-center items-center">
      <Mark />
    </span>
    <Text>{title}</Text>
  </li>
);
export default function WhoWeAre() {
  return (
    <>
      <section id='WhoWeAre' className="mx-[20px] mt-[20px] md:mx-[80px] md:mt-[80px]">
        <Grid gutter="md" mt="32px" className="z-50 relative">
          <GridCol span={{ base: 12, md: 7 }} w="610px" fw="800" lts="0">
            <Box>
              <Heading text="Who we are" />
              <BigHeading otherProps={{ mt:'16px'}} text={contentLayout[1].content as string} />
              <Text fz="16px" fw="400" lh="24px" mt="24px">
                {contentLayout[2].content as string}
              </Text>
              <ul className="mt-[24px]">
                {Array.isArray(contentLayout[3].content) && 
                  contentLayout[3].content.map((item: childContent) => (
                    <MarkDiv key={item.id} {...item} />
                  ))}
              </ul>
            </Box>
          </GridCol>
          <GridCol span={{ base: 12, md: 5 }}>
            <Box>
              <div className="flex flex-wrap md:flex-nowrap w-[100%] md:w-[486px] justify-between gap-[24px]">
                {RatingCard.map((item) => (
                  <Box key={item.id}>
                    <Rating {...item} />
                  </Box>
                ))}
              </div>
              <Box>
                <Button
                  display="flex"
                  variant="filled"
                  radius="md"
                  mt="48px"
                  h="48px"
                  w="183px"
                >
                  <DownloadDown />{" "}
                  <span className="ml-2 font-[600] leading-[0px]">
                    Download Now
                  </span>
                </Button>
              </Box>
            </Box>
          </GridCol>
        </Grid>
      </section>
      <Phone />
      <section className="mx-[10px] mt-[10px] md:mx-[80px] md:mt-[80px]">
        <ElectricVehicle/>
        <Map/>
        <ThreeCard/>
      </section>
    </>
  );
}
