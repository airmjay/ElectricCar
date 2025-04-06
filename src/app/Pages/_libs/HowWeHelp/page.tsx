import BigHeading from "@/app/components/Helper/BigHeading";
import Heading from "@/app/components/Helper/Heading";
import { contentLayout,HowItWorkGrid } from "@/app/constants/HowWeHelp/content";
import { GridCard } from "./Components";
import { Box, Grid, GridCol, Text } from "@mantine/core";
export default function HowWeWork() {
  return (
    <Box id='HowWeHelp' mx={{base: '20px',md:"80px"}} mt={{base: '24px',lg:"80px"}}>
      <Grid gutter={{base: '', md: "10px"}}>
        <GridCol span={{ base: 12, md: 6 }}>
          <Heading text={contentLayout[0].heading as string} />
          <BigHeading otherProps={{ mt:'24px'}} text={contentLayout[1].content} />
        </GridCol>
        <GridCol span={{ base: 12, md: 6 }}>
          <Text py="30px" pl={{base:"10px", lg: '40px' }} fw="400" lh="24px">
           {contentLayout[2].content}
          </Text>
        </GridCol>
      </Grid>
       {HowItWorkGrid.map((item)=> (
        <GridCard key={item.id} {...item} />
       ))}     
    </Box>
  );
}
