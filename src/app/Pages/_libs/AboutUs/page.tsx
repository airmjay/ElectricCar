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
import './SwiperStyles.css'
import { Autoplay, Navigation } from 'swiper/modules'; // Import Navigation module
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
export default function AboutUs() {
  const [isLastSlide, setIsLastSlide] = useState(false);
  const isSmallScreen = useMediaQuery({ query: '(max-width: 640px)' });
  const isMediumScreen = useMediaQuery({ query: '(min-width: 641px) and (max-width: 600px)' });
  useEffect(()=> {
    if(isLastSlide){
      setTimeout(()=> {
        setIsLastSlide(false);
      }, 3000)
    }
  }, [isLastSlide])
  return (
    <>
    <div className="swiper-container">
    <div className="px-[20px] md:px-[80px]  py-[20px] md:py-[80px] bg-[#011929] text-[white] mt-[20px] md:mt-[80px]">
      <Grid mb={{base: '20px', md : '40px'}}>
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
                <button className="custom-prev-button cursor-pointer"><LeftArrowShift/></button>
                <button className={`custom-next-button  ${
                  isLastSlide  ? 'cursor-not-allowed' : 'cursor-pointer'
                }`}><RightArrowShift/></button>
               </div>
            </div>
        </GridCol>
      </Grid>
      <Swiper
        modules={[Navigation,Autoplay]} // Include Navigation module
      slidesPerView={isSmallScreen ? 1 : isMediumScreen ? 2 : 2}
      spaceBetween={isSmallScreen ? 10 : isMediumScreen ? 20 : 30}
        navigation={{
          nextEl: '.custom-next-button', // Custom class for Next button
          prevEl: '.custom-prev-button', // Custom class for Previous button
        }}
        speed={400}
        autoplay={{delay : 3000}}
        onReachEnd={() => setIsLastSlide(true)}
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
