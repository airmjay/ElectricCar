import { Box } from "@mantine/core";
import Footer from "../Footer/page";
import OurMobile from "../OurMobile/page";
import Banner from "./Banner";
import Cards from "./Cards";
import WhoWeAre from "./WhoWeAre";


export default function Blog(){
    return (
        <Box>
        <Banner/>
        <WhoWeAre/>
        <Cards/>
        <OurMobile/>
        <Footer/>
        </Box>
    )
}