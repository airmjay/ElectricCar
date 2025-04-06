import { Box } from "@mantine/core";
import Content from "../Pages/_libs/EV/Content";
import Banner from "../Pages/_libs/EV/Banner";
import OurMobile from "../Pages/_libs/OurMobile/page";
import Footer from "../Pages/_libs/Footer/page";
export default function EVcharging(){
    return (
        <Box>
        <Banner/>
        <Box  m={{base: '27px',md:'80px'}} c={'#344054'}>
         <Content/>
         <OurMobile/>
        </Box>
        <Footer />
        </Box>
    )
}