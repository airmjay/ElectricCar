import { Stars } from "@/app/assets/asset";
import { AboutType } from "@/app/constants/AboutUs/content";
import { Box, Grid, GridCol, Text } from "@mantine/core";
import Image from "next/image";

export const AboutReviewCard: React.FC<AboutType> = ({image,content,name}) => (
    <GridCol span={{base: 12, md: 6}}>
    <Box bd={'1px solid #344054'} p='16px' className="rounded-lg">
    <Grid gutter={'lg'}>
     <GridCol span={{base: 12, md: 6}}>
     <Image className="md:w-[239px] h-[239px] sm:w-[100%]" src={image} alt='Abouts us' width={10000} height={10000}/>
     </GridCol>
     <GridCol span={{base: 12, md: 6}}>
     <Box>
     <Stars />
     <Text mt='16px'>
        {content}
     </Text>
     <Text fw='700' lh='28px' lts='0px' mt={'48px'}>
      {name}
     </Text>
     </Box>
     </GridCol>
    </Grid>
     </Box>
 </GridCol>
)