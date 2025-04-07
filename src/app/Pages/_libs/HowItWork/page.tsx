import { BigMaxWell} from "@/app/assets/asset";
import BigHeading from "@/app/components/Helper/BigHeading";
import Heading from "@/app/components/Helper/Heading";
import { contentLayout } from "@/app/constants/HowItWork/content";
import { Box, Grid, GridCol, SimpleGrid, Text } from "@mantine/core";
import { PhoneGrid, ChargeCard} from "@/app/constants/HowItWork/content";
import React from "react";
import { GridPhone,GridCharge} from "./Components/index";
export default function HowItWorks() {
  return (
    <Box id='HowItWork' c='white' mt="80px" bg={'#011929'} px={{base: '20px',md:'80px'}} pt={{base: '20px',md:'80px'}} pb='40px'>
      <Grid gutter="md">
        <GridCol span={{ base: 12, md: 5 }}>
          <Grid gutter="md">
            <GridCol span={{ base: 12, md: 4 }}>
              <Box>
                <Heading text={contentLayout[0].heading as string}/>
              </Box>
            </GridCol>
            <GridCol span={{ base: 12, md: 8 }}>
              <Box display={{base: 'none', lg: 'block'}}>
                <BigMaxWell/>
              </Box>
            </GridCol>
          </Grid>
        </GridCol>
        <GridCol span={{ base: 12, md: 7 }}>
          <Box c='white'>
           <BigHeading text={contentLayout[1].content as string}/>            
           <Text mt='24px' fz={'16px'} fw="400" lh="24px" lts="0px">
            {contentLayout[2].content as string}
            </Text>
          </Box>
          <Grid mt={'68px'} gutter='md'>
            {PhoneGrid.map((item)=> (
                <GridPhone key={item.id} {...item} />
            ))}
          </Grid>
        </GridCol>
      </Grid>
      <Grid gutter='xl' mt={{ base: '24px',md:'64px'}}>
        <GridCol span={{base: 12, md: 6}}>
            <BigHeading text={contentLayout[3].content as string} />
        </GridCol>
        <GridCol span={{base: 12, md: 6}}>
        <Text fw='400' lh='28px' lts='0px'>
        {contentLayout[4].content as string}
         </Text>
        </GridCol>
      </Grid>
      <SimpleGrid cols={{base: 1,md:3}} spacing={'24px'} verticalSpacing={'lg'} mt={{base: '24px',md: '64px'}}>
          {ChargeCard.map((item)=> (
            <GridCharge key={item.id} {...item} />
          ))}
      </SimpleGrid>
    </Box>
  );
}
