import { WhoWeAreCard,WhoWeAreType } from "@/app/constants/WhoWeAre/content";
import { Box, SimpleGrid, Text } from "@mantine/core";

const ThreeCardGrid: React.FC<WhoWeAreType> = ({icon: Icon,title,content}) => (
                <Box p={'16px'}  bg={'#F2F4F7'} className="rounded-md">
                    <Text><Icon /></Text>
                    <Text fw={'600'} fz={'24px'} lh={'32px'} lts={0} mt={'16px'}>
                    {title}
                    </Text>
                    <Text c={'#344054'} fw={'400'} mt={'16px'} lh={'24px'} lts={'0px'}> 
                        {content}
                    </Text>
                </Box>

)
export default function ThreeCard(){
    return (
        <SimpleGrid cols={{base: 1,md:3}} mt={'48px'} spacing={'md'} verticalSpacing={'lg'}>
            {WhoWeAreCard.map((item)=> (
                <ThreeCardGrid key={item.id} {...item} />
            ))}
        </SimpleGrid>
    )
}