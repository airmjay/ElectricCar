import { images } from "@/app/assets/asset";
import { Box } from "@mantine/core";
import Image from "next/image";

export default function Map(){
    return (
        <Box mt={'40px'}>
        <Image src={images.maps.src} alt='map' width={1200} height={800} />    
        </Box>
    )
}