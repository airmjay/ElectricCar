import { Mark } from "@/app/assets/asset";
import BigHeading from "@/app/components/Helper/BigHeading";
import { GridType } from "@/app/constants/HowWeHelp/content";
import { Grid, GridCol, Text } from "@mantine/core";
import Image from "next/image";

export const GridCard: React.FC<GridType> = ({ id, image, header, title, list }) => (
  <>
  {id % 2 === 1 ? 
    <Grid gutter={"20px"} mt="42px">
      <GridCol span={{ base: 12, md: 6 }}>
      <Image
      src={image}
      alt="frame"
      width={577}  // Base width
      height={384} // Base height
      style={{ 
        width: '100%', 
        height: 'auto' 
      }}
    />
      </GridCol>
      <GridCol span={{ base: 12, md: 6 }}>
        <Text fz="48px" fw="700" lh="48px" lts="0px">
         <BigHeading text={header} />
        </Text>
        <Text fz='24px' fw='600' lh={'32px'} mt={'24px'}>{title}</Text>
        <ul className="mt-[24px]">
          {list.map((list) => (
            <li key={list} className="flex gap-[10px] items-center mt-[12px] font-[400] text-[#344054]">
              <span className="w-[25px] h-[25px] flex items-center rounded-[100%] bg-[#FEF7ED] p-[5px] block">
                <Mark />
              </span>
              {list}
            </li>
          ))}
        </ul>
      </GridCol>
    </Grid>
    : <Grid gutter={"20px"} mt="42px">
    <GridCol span={{ base: 12, md: 6 }}>
      <Text fz="48px" fw="700" lh="48px" lts="0px">
      <BigHeading text={header} />
      </Text>
      <Text fz='24px' fw='600' lh={'32px'} mt={'24px'}>{title}</Text>
      <ul className="mt-[24px]">
        {list.map((list) => (
          <li key={list} className="flex gap-[10px] items-center mt-[12px] font-[400] text-[#344054]">
            <span className="w-[25px] h-[25px] flex items-center rounded-[100%] bg-[#FEF7ED] p-[5px] block">
              <Mark />
            </span>
           {list}
          </li>
        ))}
      </ul>
    </GridCol>
    <GridCol span={{ base: 12, md: 6 }}>
      <Image
        src={image}
        alt="frame"
        width={10000}
        height={10000}
        
      />
    </GridCol>    
  </Grid> }
  </>
);
