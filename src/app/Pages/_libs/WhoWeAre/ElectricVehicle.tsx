import { MailBox } from "@/app/assets/asset";
import BigHeading from "@/app/components/Helper/BigHeading";
import ButtonComponent from "@/app/components/Helper/Button";
import { contentLayout } from "@/app/constants/WhoWeAre/content";
import { Box, Grid, GridCol, Text } from "@mantine/core";

export default function ElectricVehicle(){
    return (
        <Box>
            <Grid gutter={'20px'}>
              <GridCol span={{base: 12, md: 6}}>
                <BigHeading text={contentLayout[4].content as string} />
              </GridCol>
              <GridCol span={{base: 12, md: 6}}>
                <Box>
                <Text c={'#344054'} fw={'400'} lh={'24px'} lts={'0px'}> 
                {contentLayout[5].content as string} 
                </Text>
                <ButtonComponent text="Contact Us" otherProps={{ leftSection: <MailBox/>, mt: '24px'}}/>
                </Box>
              </GridCol>  
            </Grid>
        </Box>
    )
}