import { Box, SimpleGrid, Text } from "@mantine/core";
import Image from "next/image";
import { images, Plane } from "../../../assets/asset";
import BigHeading from "../../../components/Helper/BigHeading";
import InputField, {
  TelWithStateCode,
  TextArea,
} from "../../../components/Helper/InputField";
import ButtonComponent from "../../../components/Helper/Button";

export default function WeAreHere() {
  return (
    <>
      <Box id="Contact" m={{ base: "20px", md: "80px" }}>
        <SimpleGrid cols={{base: 1,md:2}} spacing={"80px"}>
          <Box display={{base: 'none', md: 'block'}}>
            <Image
              src={images.contactCharge.src}
              alt="car charger"
              width={10000}
              height={10000}
              objectFit="cover"
              className="rounded-lg"
              style={{height: '100%'}}
              
            />
            </Box>
            <Box>
            <Box>
              <BigHeading text="We are here to help you" />
              <Text c={"#667085"} mt={"24px"} fw={"600"}>
                If you have any questions about our products, need help solving
                a problem or need assistance, our specialized team is here to
                help you with whatever you need. hello@maxwell.com
              </Text>
            </Box>
            <Box mt={"48px"}>
              <InputField
                placeholderInput="Your Name"
                placeholderLabel="Name"
              />
              <InputField
                placeholderInput="you@company.com"
                placeholderLabel="Email"
              />
              <TelWithStateCode
                placeholderInput="+1 (555) 000-0000"
                placeholderLabel="Phone number"
              />
              <TextArea
                placeholderInput="Tell us a little about the project..."
                placeholderLabel="How can we help?"
              />
            </Box>
            
            <ButtonComponent text="Send Message" otherProps={{ rightSection : <Plane />}}/>
            </Box>
         </SimpleGrid>
      </Box>
    </>
  );
}
