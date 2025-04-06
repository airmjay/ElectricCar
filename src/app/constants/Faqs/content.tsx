import { Dispatch, SetStateAction } from "react";


export interface FAQType {
title : string,
content : string,
expand : boolean,
setExpand : Dispatch<SetStateAction<boolean>>
}
export const contentLayout = [
  { heading: "FAQs" },
  { content: `More Than 1500 Charging Stations & Growing Big` },
];
export const FAQList = [
  {
    title: "What is Maxwell?",
    content: `Maxwell is a social app designed for electric vehicle (EV) owners, 
        providing them with information about nearby charging stations,
         real-time availability, and the ability to connect with other EV enthusiasts.`,
  },
  {
    title: "How does Maxwell improve the EV charging experience?",
    content: `Maxwell enhances the EV charging experience by offering users real-time updates 
        on charging station availability, 
        personalized recommendations, and a community platform for sharing tips and experiences.`,
  },
  {
    title: "What features make Maxwell stand out from other social apps?",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis eum 
            veniam quidem in cupiditate. Numquam deserunt illo repellat voluptate alias!`,
  },
  {
    title: "Does Maxwell provide information on charging costs?",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis eum 
            veniam quidem in cupiditate. Numquam deserunt illo repellat voluptate alias!`,
  },
  {
    title: "Can I find other EV owners to connect with on the app?",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis eum 
            veniam quidem in cupiditate. Numquam deserunt illo repellat voluptate alias!`,
  },
  {
    title: "What types of payment methods does Maxwell support?",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis eum 
            veniam quidem in cupiditate. Numquam deserunt illo repellat voluptate alias!`,
  },
  {
    title: "Is my data secure while using Maxwell?",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis eum 
            veniam quidem in cupiditate. Numquam deserunt illo repellat voluptate alias!`,
  },
  {
    title: `How can I provide feedback or report an issue with the app?`,
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis eum 
            veniam quidem in cupiditate. Numquam deserunt illo repellat voluptate alias!`,
  },
];
