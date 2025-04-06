import { images } from "@/app/assets/asset";
import { Box } from "@mantine/core";
import Image from "next/image";

export default function Phone(){
    return (
        <Box>
            <Image 
            className="mt-[48px]"
            src={images.phones.src}
            alt="phones"
            width={10000}
            height={401}
            style={{width: '100%'}}
            // layout="fill"
            objectFit="cover"
            />
        </Box>
    )
}