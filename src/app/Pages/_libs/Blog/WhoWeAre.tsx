import BigHeading from "@/app/components/Helper/BigHeading";
import { InputWithIcon } from "@/app/components/Helper/InputField";
import { Box, Text } from "@mantine/core";
import { CiSearch } from "react-icons/ci";

export default function WhoWeAre() {
  return (
    <Box m="80px" ta={"center"}>
      <Text
        display={"inline-block"}
        className="rounded-full"
        px={"12px"}
        py={"4px"}
        c={"#EB8F02"}
        bg={"#FFF0D8"}
        lh={"24px"}
        fw={"500"}
        ta={"center"}
        lts={"0"}
      >
        Our blog
      </Text>
      <BigHeading
        otherProps={{ mt: "16px", ta: "center" }}
        text="We are here to help you"
      />
      <Text c={"#344054"} mt={"24px"}>
        The latest industry news, interviews, technologies, and resources..
      </Text>
      <Box mt={"40px"} display={"flex"} className="justify-center">
        <InputWithIcon
          otherProps={{ w: "360px" }}
          placeholderInput="Search"
          icon={<CiSearch />}
        />
      </Box>
    </Box>
  );
}
