"use client"
import { ArrowDown, ArrowUp } from "@/app/assets/asset";
import ButtonComponent from "@/app/components/Helper/Button";
import { CardContentType, CardContent, image } from "@/app/constants/Blogs/Cards";
import { Anchor, Box, Card, Flex, SimpleGrid, Text } from "@mantine/core";
import Image from "next/image";
const CardComponent: React.FC<CardContentType> = ({
  image,
  title,
  name,
  date,
  profileImage,
  content,
  type,
}) => (
  <Card shadow="sm" padding="md" radius="md" withBorder>
    <Image src={image.src} width={1200} height={80} alt="image" />
    <Text fw={600} fz={"14px"} c={"blue.4"} mt={"32px"}>
      {type}
    </Text>
    <Box>
      <Flex gap={"10px"} justify="space-between" mt="md" mb="xs">
        <Anchor href="/evcharging" td={'none'} c={'#101828'} className="" fw={500} fz={"24px"} lh={"30px"}>
          {title}
        </Anchor>
        <ArrowUp />
      </Flex>
      <Text size="sm" c="dimmed">
        {content}
      </Text>
    </Box>
    <Flex mt={"30px"} gap={12} align={"center"}>
      <Box h={"40px"} w={"40px"}>
        <Image
          className="rounded-full"
          src={profileImage.src}
          width={1200}
          height={800}
          alt="avater"
        />
      </Box>
      <Box>
        <Text mb={0} fz={"14px"} lh={"15px"} fw={"500"}>
          {name}
        </Text>
        <Text c="dimmed" fz={"14px"} mt={0}>
          {date}
        </Text>
      </Box>
    </Flex>
  </Card>
);
export default function Cards() {
  return (
    <Box pos={'relative'} >
      <Image
      className="absolute top-0"
      src={image.src}
      alt="bg pattern"
      width={1400}
      height={800}
       />
       <Box className="cursor-pointer" mx={{ base: "20px", md: "80px" }} py={{base:"20px",md:"70px"}}>
      <SimpleGrid cols={{base: 1,md:3}} spacing="sm" verticalSpacing="40px">
        {CardContent.map((item) => (
          <CardComponent key={item.id} {...item} />
        ))}
      </SimpleGrid>
      <Flex justify={'center'} mt={'80'}>
        <ButtonComponent text="Load More" otherProps={{leftSection : <ArrowDown/>, bg: '#D7EEFF', c :'#026EB9'}}/>
      </Flex>
      </Box>
    </Box>
  );
}
