'use client';
import { LeftArrowShift, RightArrowShift } from "@/app/assets/asset";
import BigHeading from "@/app/components/Helper/BigHeading";
import Heading from "@/app/components/Helper/Heading";
import { contentType, AboutReview } from "@/app/constants/AboutUs/content";
import { Grid, GridCol, Text } from "@mantine/core";
import { AboutReviewCard } from './Components/';
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'; // Required for navigation
import { Navigation } from 'swiper/modules'; // Import Navigation module
import './SwiperStyles.css'
import { useMediaQuery } from "react-responsive";
export default function AboutUs() {

  const isSmallScreen = useMediaQuery({ query: '(max-width: 640px)' });
  const isMediumScreen = useMediaQuery({ query: '(min-width: 641px) and (max-width: 600px)' });
  return (
    <>
    <div className="swiper-container">
    <div className="px-[20px] md:px-[80px]  py-[20px] md:py-[80px] bg-[#011929] text-[white] mt-[20px] md:mt-[80px]">
      <Grid mb={'40px'}>
        <GridCol span={{base: 12, md : 6}}>
                
          <Heading text={contentType[0].header as string}/>      
          <BigHeading text={contentType[1].content as string} otherProps={{mt: '16px'}} />
        </GridCol>
        <GridCol span={{base: 12, md : 6}}>
            <Text fw='400' lh='24px' lts='0px'>
           {contentType[2].content as string}
            </Text>
            <div className="mt-[24px] flex justify-end">
               <div className="flex gap-[24px]">
                <span className="custom-prev-button cursor-pointer"><LeftArrowShift/></span>
                <span className="custom-next-button cursor-pointer"><RightArrowShift/></span>
               </div>
            </div>
        </GridCol>
      </Grid>
      <Swiper
        modules={[Navigation]} // Include Navigation module
      slidesPerView={isSmallScreen ? 1 : isMediumScreen ? 2 : 2}
      spaceBetween={isSmallScreen ? 10 : isMediumScreen ? 20 : 30}
        navigation={{
          nextEl: '.custom-next-button', // Custom class for Next button
          prevEl: '.custom-prev-button', // Custom class for Previous button
        }}
        speed={200}
      >      
      {AboutReview.map((item)=> (
        <SwiperSlide key={item.id}> <AboutReviewCard {...item} /> </SwiperSlide>
      ))}
      
      </Swiper> 
    </div>
    </div>

    </>
  );
}
