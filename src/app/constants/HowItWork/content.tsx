import iphone17 from "@/app/assets/images/iPhone 17.png";
import iphone16 from "@/app/assets/images/iPhone 16.png";
import iphone15 from "@/app/assets/images/iPhone 15 Pro (1).png";
import iphone14 from "@/app/assets/images/iPhone 14.png";
import iphone14pro from "@/app/assets/images/iPhone 14 Pro.png";
import iphone12 from "@/app/assets/images/iPhone 12 Pro.png";
import charge1 from "@/app/assets/images/how-to-charge-01 (1).png";
import charge2 from "@/app/assets/images/how-to-charge-02 (1).png";
import charge3 from "@/app/assets/images/how-to-charge-03 (1).png";
import { StaticImageData } from 'next/image';

export interface PhoneType {
   id : number
   image : StaticImageData,
   title : string,
   content : string

}
export interface chargeType {
    image : StaticImageData,
    content : string,
    id : number,
    title : string
}
export const contentLayout = [
  { heading: `How It Work` },
  {
    content: `Finding a Charging Station is Easy, Whether in the City or Countryside.`,
  },
  {
    content: `Stop wasting time searching for charging stations! Our service guarantees
         an effortless experience, allowing you to find charging stations easily. With our app, 
         you'll quickly discover nearby options, keeping you powered up for anything.
         Embrace worry-free travel and take charge of your journeys! `,
  },
  {
    content: `Charging Your Vehicle`,
  },
  {
    content: `Follow these three easy steps to effortlessly
     connect your vehicle to our charging station for a smooth and 
     efficient experience.`
  }
];

export const PhoneGrid: PhoneType[] = [
  {
    id : 1,
    image: iphone17,
    title: "TRACKING",
    content: "Monitor Your Charging Progress Instantly",
  },
  {
    id : 2,
    image: iphone16,
    title: "OPEN MAPS",
    content: "Locate Charging Stations Anytime, Anywhere",
  },
  {
    id : 3,
    image: iphone15,
    title: "DIRECTION",
    content: "Effortless Route Planning with Charging Stops Included",
  },
  {
    id : 4,
    image: iphone14,
    title: "COMMUNITY",
    content: "Connect with Like-Minded Users, Vote, and Earn Rewards",
  },
  {
    id : 5,
    image: iphone14pro,
    title: "REWARDS",
    content: "Keep Track of All Your Activities and Rewards in One Place",
  },
  {
    id : 6,
    image: iphone12,
    title: "CONNECTIVITY",
    content: "Link Your Vehicle for Comprehensive Power Reports",
  },
]
;
export const ChargeCard: chargeType[] = [
   {
    id : 1,
    image : charge1,
    title : 'Connect the charger.',
    content: ''
   },
   {
    id : 2,
    image : charge2,
    title : 'Press to Begin Charging',
    content: 'Using the Maxwell app, RFID, or your credit card.'
   },
   {
    id : 3,
    image : charge3,
    title : 'Power Up and Hit the Road',
    content: 'Your next adventure is just around the corner.'
   }
]