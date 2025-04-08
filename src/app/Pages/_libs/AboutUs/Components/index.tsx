import { Stars } from "@/app/assets/asset";
import { AboutType } from "@/app/constants/AboutUs/content";
import { Box, Grid, GridCol, Text } from "@mantine/core";
import Image from "next/image";

export const AboutReviewCard: React.FC<AboutType> = ({image,content,name}) => (
    <GridCol span={{base: 12, md: 6}}>
    <Box bd={'1px solid #344054'} p='16px' className="rounded-lg">
    <Grid gutter={'lg'}>
     <GridCol h={{base: '200px', md: 'auto'}} span={{base: 12, md: 6}}>
     <Image style={{height: '100%'}} src={image} alt='Abouts us' width={10000} height={800}/>
     </GridCol>
     
     <GridCol span={{base: 12, md: 6}}>
     <Box>
     <Stars />
     <Text mt='16px'>
        {content}
     </Text>
     <Text fw='700' lh='28px' lts='0px' mt={{base: '20px', md: '48px'}}>
      {name}
     </Text>
     </Box>
     </GridCol>
    </Grid>
     </Box>
 </GridCol>
)