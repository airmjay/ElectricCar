import { LeftArrowShift, RightArrowShift } from "@/app/assets/asset";
import BigHeading from "@/app/components/Helper/BigHeading";
import Heading from "@/app/components/Helper/Heading";
import { contentLayout } from "@/app/constants/OurBlog/content";
import { OurBlogsCard, OurBlogType } from "@/app/constants/OurBlog/content";
import { Box, Text } from "@mantine/core";
import Image from "next/image";

const OurBlogCard:  React.FC<OurBlogType> = ({image,heading,content}) => (
  <Box w={'100%'}>
  <Image
    style={{ height: "350px", width: "100%" }}
    src={image}
    alt="our blog 1"
    width={10000}
    height={10000}
    className="rounded-xl"
  />
  <Box w={'100%'} mt={'24px'}>
      <Text fz={'24px'} fw={'500'} lh={'32px'} lts={'0'}>
      {heading}
      </Text>
      <Text c={'#98A2B3'} fw={'400'} lh={'24px'} lts={'0'} mt={'8px'}>
      {content} 
      </Text>
  </Box>
  </Box>
)
export default function OurBlog() {
  return (
    <div className="p-[20px] md:p-[80px] bg-[#011929] text-gray-100">
    <Heading text={contentLayout[0].heading as string} />
    <Box>  
      <div className="flex gap-[10px] flex-wrap md:flex-nowrap mt-2 md:mt-0 justify-between items-center">
        <BigHeading text={contentLayout[1].content as string}/>
        <Text className="flex gap-[10px] items-center">
          <LeftArrowShift />
          <RightArrowShift />
        </Text>
      </div>
      <div className="flex flex-wrap gap-[40px] lg:flex-nowrap w-[100%] mt-[20px] md:mt-[68px]">
        {OurBlogsCard.map((item)=> (
          <OurBlogCard key={item.id} {...item} />
        ))}
      </div>
    </Box>
    </div>
  );
}
