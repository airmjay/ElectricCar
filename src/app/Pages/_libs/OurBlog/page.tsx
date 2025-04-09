'use client';
import { LeftArrowShift, RightArrowShift } from "@/app/assets/asset";
import BigHeading from "@/app/components/Helper/BigHeading";
import Heading from "@/app/components/Helper/Heading";
import { contentLayout } from "@/app/constants/OurBlog/content";
import { OurBlogsCard, OurBlogType } from "@/app/constants/OurBlog/content";
import { Box, Text } from "@mantine/core";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import './SwiperStyles.css';
import { useMediaQuery } from "react-responsive";

const OurBlogCard: React.FC<OurBlogType> = ({ image, heading, content }) => (
  <Box w="100%">
    <Box h={{ base: "220px", md: "360px" }}>
      <Image
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        src={image}
        alt="our blog 1"
        width={1200}
        height={800}
        className="rounded-xl"
      />
    </Box>
    <Box w="100%" mt="24px">
      <Text fz="24px" fw="500" lh="32px" lts="0">{heading}</Text>
      <Text c="#98A2B3" fw="400" lh="24px" lts="0" mt="8px">{content}</Text>
    </Box>
  </Box>
);

export default function OurBlog() {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 640px)' });
  const isMediumScreen = useMediaQuery({ query: '(min-width: 641px) and (max-width: 1000px)' }); // Fixed range

  return (
    <div className="p-[20px] md:p-[80px] bg-[#011929] text-gray-100">
      <Heading text={contentLayout[0].heading as string} />
      <div className="swiper-container">
        <div className="flex gap-[10px] flex-wrap md:flex-nowrap mt-2 md:mt-0 justify-between items-center">
          <BigHeading text={contentLayout[1].content as string} />
          <Text className="flex gap-[10px] items-center">
            <button className="custom-prev-button-1 cursor-pointer"><LeftArrowShift /></button>
            <button className="custom-next-button-1 cursor-pointer"><RightArrowShift /></button>
          </Text>
        </div>
        <Box mt='80px'>
        <Swiper
          modules={[Navigation]}
          slidesPerView={isSmallScreen ? 1 : isMediumScreen ? 2 : 3} // Adjusted for better display
          spaceBetween={isSmallScreen ? 10 : isMediumScreen ? 20 : 30}
          navigation={{
            nextEl: '.custom-next-button-1',
            prevEl: '.custom-prev-button-1',
          }}
          speed={200}
        >
          {OurBlogsCard.map((item) => (
            <SwiperSlide key={item.id}><OurBlogCard {...item} /></SwiperSlide>
          ))}
        </Swiper>
        </Box>
      </div>
    </div>
  );
}