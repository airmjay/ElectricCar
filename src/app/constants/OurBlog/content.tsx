import OurBlog1 from "@/app/assets/images/ourBlog1.png";
import OurBlog2 from "@/app/assets/images/ourBlog2.png";
import OurBlog3 from "@/app/assets/images/ourBlog3.png";
import { StaticImageData } from "next/image";
export interface OurBlogType {
    id : number,
    image : StaticImageData,
    heading : string,
    content : string
}
export const contentLayout = [
    {heading : `Our Blogs`},
    {content : `Stay Informed on the Cutting-Edge of Technology`},
    {content:  ``}
]
export const OurBlogsCard: OurBlogType[] = [
   {
     id: 1,
     image : OurBlog1,
     heading : 'Which EV charging station is best for my business?',
     content : `Installing electric vehicle charging stations is becoming a strategic 
     necessity for businesses. According to the report “Technology and Innovation 
     Pathways for Zero Carbon Buildings`
   },
   {
    id: 2,
    image : OurBlog2,
    heading : '100 reasons to drive an electric vehicle',
    content : `In Latin America, we are joining Blink Charging’s global celebration campaign:
    “100 Reasons to Drive an Electric Vehicle”, an initiative that 
    highlights the countless advantages of making the transition to electric mobility. `
  },
  {
    id: 3,
    image : OurBlog3,
    heading : 'Charging Ahead: Navigating tthe Electric Car Station Landscape',
    content : `Maxwell is a social app designed for electric vehicle (EV) owners, 
    providing them with information about nearby charging stations, 
    real-time availability, and the ability to connect with other EV enthusiasts.`
  },
  {
    id: 4,
    image : OurBlog2,
    heading : 'Which EV charging station is best for my business?',
    content : `Installing electric vehicle charging stations is becoming a strategic 
    necessity for businesses. According to the report “Technology and Innovation 
    Pathways for Zero Carbon Buildings`
  },
  {
   id: 5,
   image : OurBlog3,
   heading : '100 reasons to drive an electric vehicle',
   content : `In Latin America, we are joining Blink Charging's global celebration campaign:
   “100 Reasons to Drive an Electric Vehicle”, an initiative that 
   highlights the countless advantages of making the transition to electric mobility. `
 },
 {
   id: 6,
   image : OurBlog1,
   heading : 'Charging Ahead: Navigating tthe Electric Car Station Landscape',
   content : `Maxwell is a social app designed for electric vehicle (EV) owners, 
   providing them with information about nearby charging stations, 
   real-time availability, and the ability to connect with other EV enthusiasts.`
 }
]