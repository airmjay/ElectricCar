"use client";
import Image from "next/image";
import { images } from "@/app/assets/asset";
import { Anchor, Box, Button } from "@mantine/core";
import { RiAlignJustify, RiCloseLargeFill } from "react-icons/ri";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [expand, setExpand] = useState(false);
  const router = useRouter();
  const [navStyle,setNavStyle] = useState(1);
  const styleButton = {style : `rounded-lg 
        bg-[linear-gradient(180deg,rgba(24,172,254,0.3)_0%,rgba(1,99,224,0.3)_99.7%)]
        backdrop-blur-[60.599998474121094px]`}
  const NavBarItem = [
    { id: 1, tab: "Home", key: "Home" },
    { id: 2, tab: "How It Work", key: "HowItWork" },
    { id: 3, tab: "Who We Are", key: "WhoWeAre" },
    { id: 4, tab: "How We Help", key: "HowWeHelp" },
    { id: 5, tab: "FAQs", key: "FAQs" },
  ];
  const NavList = () => (
    <Box
      display={{ base: "none", md: "flex" }}
      className="flex items-center  w-[572px] bg-[#10182833] py-[12px] px-[12px] 
  rounded-lg border h-[64px] border-1 border-[#FCFCFD33]"
    >
      {NavBarItem.map((item)=> (
        <Anchor onClick={()=>{ setNavStyle(item.id); setExpand(false) }} className={navStyle == item.id ? styleButton.style : ''}
           key={item.id} href={`/#${item.key}`} c="#FCFCFD" py="8px" px="16px" td="none">
          {item.tab}
      </Anchor>
      ))}
    </Box>
  );
  return (
    <div className="relative">
      <section
        className="z-50 relative flex items-center justify-between 
    bg-[#FCFCFD1A] h-[82px] rounded-3xl px-[14px] mt-[18px]"
      >
        <Box>
          <Image
            src={images.maxwell.src}
            alt="maxwell image"
            width={12000}
            height={120000}
            style={{ width: "135px", height: "52.9px" }}
          />
        </Box>
        {NavList()}
        <Button
          onClick={() => router.push("/Contact/#Contact")}
          display={{ base: "none", md: "block" }}
          variant="filled"
          radius="md"
        >
          Contact Us
        </Button>
        <Box
          className="cursor-pointer"
          onClick={() => setExpand(!expand)}
          display={{ base: "block", md: "none" }}
        >
          {!expand ? (
            <RiAlignJustify size={"40px"} color="white" />
          ) : (
            <RiCloseLargeFill size={"40px"} color="white" />
          )}
        </Box>
      </section>

      <Box
        style={{ height: "100vh" }}
        display={{ base: "block", md: "none" }}
        px={14}
        pos="absolute"
        className="z-100"
        w="100%"
        mt={2}
        visibleFrom={expand ? undefined : "md"}
      >
        <Box
          className="flex flex-col items-center backdrop-blur-2xl  w-[100%] bg-[#0A122233] py-[12px] px-[12px] 
            rounded-lg border h-[100%] border-1 border-[#FCFCFD33]"
        >
     {NavBarItem.map((item)=> (
        <Anchor onClick={()=> {setNavStyle(item.id); setExpand(false)}} className={navStyle == item.id ? styleButton.style : ''}
           key={item.id} href={`/#${item.key}`} c="#FCFCFD" py="16px" px="16px" td="none">
          {item.tab}
      </Anchor>

      
      ))}
       <Anchor onClick={()=> router.push("/Contact/#Contact")} 
            c="#FCFCFD" py="16px" px="16px" td="none">
          Contact Us
      </Anchor>
        </Box>
      </Box>
    </div>
  );
}
