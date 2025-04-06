import { LeftArrowShift, RightArrowShift } from "@/app/assets/asset";
import BigHeading from "@/app/components/Helper/BigHeading";
import Heading from "@/app/components/Helper/Heading";
import { contentType, AboutReview } from "@/app/constants/AboutUs/content";
import { Grid, GridCol, Text } from "@mantine/core";
import { AboutReviewCard } from './Components/';
export default function AboutUs() {
  return (
    <div className="px-[20px] md:px-[80px]  py-[20px] md:py-[80px] bg-[#011929] text-[white] mt-[20px] md:mt-[80px]">
      <Grid>
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
                <span><LeftArrowShift/></span>
                <span><RightArrowShift/></span>
               </div>
            </div>
        </GridCol>
      </Grid>
      <Grid gutter={'lg'} mt={{base: '30px',md:'68px'}}>
      {AboutReview.map((item)=> (
        <AboutReviewCard key={item.id} {...item} />
      ))}
      </Grid>
    </div>
  );
}
