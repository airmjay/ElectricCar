import {
  Box,
  Grid,
  GridCol,
  List,
  ListItem,
  Text,
  TextProps,
} from "@mantine/core";
import { ContentLayout } from "../../../constants/EVcharging/content";
import BigHeading from "../../../components/Helper/BigHeading";
import { images } from "../../../assets/asset";
import Image from "next/image";

const TextComponent = ({
  text,
  otherProps,
}: {
  text: string;
  otherProps?: Omit<TextProps, "">;
}) => (
  <Text {...otherProps} fw={"400"} lh={"24px"} lts={"0px"}>
    {text}
  </Text>
);
export default function Content() {
  return (
    <Box>
      <TextComponent text={ContentLayout[0].content} />
      <TextComponent
        otherProps={{ mt: "30px" }}
        text={ContentLayout[1].content}
      />
      <Box mt={"48px"}>
        <BigHeading text={ContentLayout[2].content as string} />
        <Grid gutter={"58px"} mt={"24px"}>
          <GridCol span={{ base: 12, md: 7 }}>
            <TextComponent text={ContentLayout[3].content as string} />
          </GridCol>
          <GridCol span={{ base: 12, md: 5 }}>
            <Image
              className="rounded-lg"
              src={images.EV1.src}
              alt="EV1"
              width={1200}
              height={800}
            />
          </GridCol>
        </Grid>
        <Box mt={"16px"}>
          <TextComponent text={ContentLayout[4].content as string} />
          <TextComponent
            otherProps={{ mt: "30px" }}
            text={ContentLayout[5].content}
          />
        </Box>
      </Box>
      <Box mt="48px">
        <BigHeading text={ContentLayout[6].content as string} />
        <Grid gutter={"58px"} mt={"24px"}>
          <GridCol span={{ base: 12, md: 5 }}>
            <Image
              className="rounded-lg"
              src={images.EV2.src}
              alt="EV2"
              width={1200}
              height={800}
            />
          </GridCol>
          <GridCol span={{ base: 12, md: 7 }}>
            <TextComponent text={ContentLayout[7].content as string} />
          </GridCol>
        </Grid>
        <List listStyleType="disc" mt={"16px"}>
          {Array.isArray(ContentLayout[7].ul) &&
            ContentLayout[7].ul.map((item, key) => (
              <ListItem key={key}>{item.li}</ListItem>
            ))}
        </List>
      </Box>
      <Box mt={"48px"}>
        <BigHeading text={ContentLayout[8].content} />
        <Grid gutter={"58px"} mt={"24px"}>
          <GridCol span={{ base: 12, md: 7 }}>
            <TextComponent text={ContentLayout[8].title as string} />
            <List listStyleType="disc" mt={"16px"}>
              {Array.isArray(ContentLayout[8].ul) &&
                ContentLayout[8].ul.map((item, key) => (
                  <ListItem key={key}>{item.li}</ListItem>
                ))}
            </List>
          </GridCol>
          <GridCol span={{ base: 12, md: 5 }}>
            <Image
              className="rounded-lg"
              src={images.EV2.src}
              alt="EV2"
              width={1200}
              height={800}
            />
          </GridCol>
        </Grid>
      </Box>
      <Box mt={"48px"}>
        <BigHeading text={ContentLayout[9].content} />
        <List listStyleType="disc" mt={"16px"}>
              {Array.isArray(ContentLayout[9].ul) &&
                ContentLayout[9].ul.map((item, key) => (
                  <ListItem key={key}>{item.li}</ListItem>
                ))}
            </List>
      </Box>
      <Box mt={"48px"}>
        <BigHeading text={ContentLayout[10].content} />
        <List listStyleType="disc" mt={"16px"}>
              {Array.isArray(ContentLayout[10].ul) &&
                ContentLayout[10].ul.map((item, key) => (
                  <ListItem key={key}>{item.li}</ListItem>
                ))}
            </List>
      </Box>
    </Box>
  );
}
