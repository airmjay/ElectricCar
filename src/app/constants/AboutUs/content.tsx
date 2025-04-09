import About1 from '@/app/assets/images/Frame 1686561739.png'
import About2 from '@/app/assets/images/Frame 1686561739 (1).png'
import { StaticImageData } from 'next/image'
export interface AboutType  {
    id : number,
    image : StaticImageData,
    name : string,
    content : string,
}
export const contentType = [
    { header : 'What They Are Saying About Us'},
    {content : 'Discover more and dive into the details of Maxwell.'},
    {content : `Here are testimonials from customers who are thrilled with the 
        products and services we've delivered.`}
    
]

export const AboutReview: AboutType[] = [
    {
        id : 1,
        image : About1,
        name : 'David Lee',
        content : `As a new EV owner, I was overwhelmed by charging. Thankfully,
         Maxwell makes it effortless! The live map
         shows nearby stations, and the reservation option ensures I never find a full station.`
    },
    {
        id : 2,
        image : About2,
        name : 'Emily Johnson',
        content : `Maxwell has changed how we manage our electric vehicle fleet. 
        The app helps find charging stations, monitor times, 
        and plan routes. Our drivers appreciate the user interface, reducing downtime.`
    },
    {
        id : 3,
        image : About1,
        name : 'David Lee',
        content : `As a new EV owner, I was overwhelmed by charging. Thankfully,
         Maxwell makes it effortless! The live map
         shows nearby stations, and the reservation option ensures I never find a full station.`
    },
    {
        id : 4,
        image : About2,
        name : 'Emily Johnson',
        content : `Maxwell has changed how we manage our electric vehicle fleet. 
        The app helps find charging stations, monitor times, 
        and plan routes. Our drivers appreciate the user interface, reducing downtime.`
    }
]