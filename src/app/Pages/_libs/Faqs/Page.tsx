"use client"
import { images} from "@/app/assets/asset";
import BigHeading from "@/app/components/Helper/BigHeading";
import Heading from "@/app/components/Helper/Heading";
import { contentLayout, FAQList } from "@/app/constants/Faqs/content";
import { Box, Grid, GridCol } from "@mantine/core";
import Image from "next/image";
import { FAQs } from "./Components";
import { useState } from "react";

export default function Faqs() {
  const [expandedFaqs, setExpandedFaqs] = useState<{ [key: string]: boolean }>({});

  const handleToggle = (title: string) => {
    setExpandedFaqs(prevState => ({
      ...prevState,
      [title]: !prevState[title],
    }));
  };
  return (
    <div id="FAQs" className="py-[20px] md:py-[80px] px-[20px] md:px-[80px]">
      <Grid gutter={"md"}>
        <GridCol span={{ base: 12, md: 7 }}>
          <Box>
            <Heading otherProps={{mt: 'lg'}} text={contentLayout[0].heading as string}/>
           <BigHeading otherProps={{mt: '5px'}} text={contentLayout[1].content as string} />
          </Box>
          <Box mt={'48px'}>
          {FAQList.map((item) => (
              <FAQs
                key={item.title}
                expand={!!expandedFaqs[item.title]}
                setExpand={() => handleToggle(item.title)}
                {...item}
              /> )) }
          </Box>
        </GridCol>
        <GridCol h={{base: '400px', md: 'auto'}} span={{ base: 12, md: 5 }}>
          <Image
            src={images.carCharger.src}
            width={1200}
            alt="charger"
            height={100}
            style={{height:'100%'}}
            objectFit="cover"
          />
        </GridCol>
      </Grid>
    </div>
  );
}
