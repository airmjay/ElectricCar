import image1 from "../../assets/images/CardImage1.png";
import image2 from "../../assets/images/CardImage2.png";
import image3 from "../../assets/images/CardImage3.png";
import image4 from "../../assets/images/CardImage4.png";
import image5 from "../../assets/images/CardImage5.png";
import image6 from "../../assets/images/CardImage6.png";
import image7 from "../../assets/images/CardImage7.png";
import image8 from "../../assets/images/CardImage8.png";
import image9 from "../../assets/images/CardImage9.png";
import avater1 from "../../assets/images/CardAvatar1.png";
import avater2 from "../../assets/images/CardAvatar2.png";
import avater3 from "../../assets/images/CardAvatar3.png";
import avater4 from "../../assets/images/CardAvatar4.png";
import avater5 from "../../assets/images/CardAvatar5.png";
import avater6 from "../../assets/images/CardAvatar6.png";
import avater7 from "../../assets/images/CardAvatar7.png";
import avater8 from "../../assets/images/CardAvatar8.png";
import avater9 from "../../assets/images/CardAvatar9.png";
import imageBg from "../../assets/images/BackgroundpatternBlog.png";
import { StaticImageData } from "next/image";
export interface CardContentType {
  id: number,
  image : StaticImageData,
  type : string,
  title : string,
  content : string,
  profileImage : StaticImageData,
  name : string,
  date: string
}
export const image = imageBg;
export const CardContent: CardContentType[] = [
  {
    id: 1,
    image: image1,
    type: "Design",
    title: "DCFC chargers: advantages and why to choose them",
    content: `How do you know when fast chargers are the best 
    option to install in a business? Or when to choose them? `,
    profileImage: avater1,
    name: 'Olivia Rhye',
    date: '20 Jan 2024',
  },
  {
    id: 2,
    image: image2,
    type: "Design",
    title: "Which EV charging station is best for my business?",
    content: `Installing electric vehicle charging stations is 
    becoming a strategic necessity for businesses.`,
    profileImage: avater2,
    name: 'Phoenix Baker',
    date: '19 Jan 2024',
  },
  {
    id: 3,
    image: image3,
    type: "Design",
    title: "100 reasons to drive an electric vehicle",
    content: `We support Blink Charging’s campaign: “100 Reasons to Drive an 
    Electric Vehicle.”`,
    profileImage: avater3,
    name: 'Lana Steiner',
    date: '18 Jan 2024',
  },
  {
    id: 4,
    image: image4,
    type: "Management",
    title: "Bill Walsh leadership lessons",
    content: `Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl 
    winning Dynasty?`,
    profileImage: avater4,
    name: 'Alec Whitten',
    date: '17 Jan 2024',
  },
  {
    id: 5,
    image: image5,
    type: "Product",
    title: "PM mental models",
    content: `Mental models are simple expressions of complex processes or relationships.`,
    profileImage: avater5,
    name: 'Demi WIlkinson',
    date: '16 Jan 2024',
  },
  {
    id: 6,
    image: image6,
    type: "Design",
    title: "What is Wireframing?",
    content: `Introduction to Wireframing and its Principles. Learn from the best in the industry.`,
    profileImage: avater6,
    name: 'Candice Wu',
    date: '15 Jan 2024',
  },
  {
    id: 7,
    image: image7,
    type: "Design",
    title: "How collaboration makes us better designers",
    content: `Collaboration can make our teams stronger, and our individual designs better.`,
    profileImage: avater7,
    name: 'Natali Craig',
    date: '14 Jan 2024',
  },
  {
    id: 8,
    image: image8,
    type: "Product",
    title: "Our top 10 Javascript frameworks to use",
    content: `JavaScript frameworks make development easy with extensive features and functionalities.`,
    profileImage: avater8,
    name: 'Drew Cano',
    date: '13 Jan 2024',
  },
  {
    id: 9,
    image: image9,
    type: "Customer Success",
    title: "Podcast: Creating a better CX Community",
    content: `Starting a community doesn’t need to be complicated, but how do you get started?`,
    profileImage: avater9,
    name: 'Orlando Diggs',
    date: '12 Jan 2024',
  },
];
