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
           <BigHeading text={contentLayout[1].content as string} />
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
        <GridCol span={{ base: 12, md: 5 }}>
          <Image
            src={images.carCharger.src}
            width={10000}
            alt="charger"
            height={10000}
            style={{ width: "100%" }}
          />
        </GridCol>
      </Grid>
    </div>
  );
}
