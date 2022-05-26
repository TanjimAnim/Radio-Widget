import { useState } from "react";
import { Box, Text, Collapse, Image, Button } from "@chakra-ui/react";
import radioList from "./radioList";
import image1 from "../assets/minus.png";
import image2 from "../assets/fmImage.jpg";
import image3 from "../assets/plus.png";

import image4 from "../assets/back-arrow.png";
import image5 from "../assets/switch.png";

const RadioBoxFooter = (props) => {
  return (
    <>
      <Box textAlign='center' height='90px'>
        <Text fontSize='3xl' color='#bd8b52' fontWeight={800}>
          CURRENTLY PLAYING
        </Text>
        <Text fontSize='2xl' color='#a3acbe'>
          {props.selectedSubMenu}
        </Text>
      </Box>
    </>
  );
};

export default function RadioBox() {
  const [selectedSubMenu, setSelectedSubMenu] = useState("");

  const handleClick = (title) => {
    if (title === selectedSubMenu) {
      setSelectedSubMenu("");
    } else {
      setSelectedSubMenu(title);
    }
  };

  return (
    <Box
      display='flex'
      flexDir='column'
      justifyContent='center'
      alignItems='center'
      marginTop='30px'
      marginLeft='38%'
      width='300px'
      boxShadow='0 18px 12px -5px #15151c'
      borderBottomLeftRadius='26px'
      borderBottomRightRadius='26px'
    >
      <Box
        width='100%'
        textAlign='start'
        bgColor='#eeae61'
        px={5}
        borderTopLeftRadius='26px'
        borderTopRightRadius='26px'
      >
        <Box
          display='flex'
          flexDir='row'
          alignItems='center'
          justifyContent='space-between'
        >
          <Image src={image4} width='4%'></Image>
          <Text fontSize='24px' color='white' fontWeight={700}>
            STATIONS
          </Text>
          <Image src={image5} width='6%'></Image>
        </Box>
      </Box>
      {radioList.map((items) => {
        return (
          <Box
            background='#2c2c37'
            color='#a3acbe'
            width='100%'
            textAlign='start'
            cursor='pointer'
            onClick={() => {
              handleClick(items.title);
            }}
            key={items.id}
            borderBottom='1px solid #43434d'
            paddingLeft='6px'
            paddingRight='5px'
            marginLeft='11px'
            marginRight='10px'
          >
            <Box display='flex' justifyContent='space-between'>
              <Text fontSize='20px' alignItems='flex-start'>
                {items.title}
              </Text>
              <Text fontSize='20px' alignItems='flex-start'>
                {items.frequency}
              </Text>
            </Box>
            <Collapse
              in={items.title === selectedSubMenu}
              transition={{ enter: { delay: 0.1 }, exit: { delay: 0.1 } }}
            >
              <Box
                display='flex'
                flexDir='row'
                alignItems='center'
                justifyContent='space-between'
                mb={10}
              >
                <Image src={image1} width='10%' />
                <Image src={image2} width='46%' borderRadius='50%' />
                <Image src={image3} width='10%' />
              </Box>
            </Collapse>
          </Box>
        );
      })}
      <RadioBoxFooter selectedSubMenu={selectedSubMenu} />
    </Box>
  );
}
