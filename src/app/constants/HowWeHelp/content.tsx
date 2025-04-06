
import frame1 from '@/app/assets/images/Frame 1686561723.png'
import frame2 from '@/app/assets/images/Frame 1686561723 (1).png'
import frame3 from '@/app/assets/images/Frame 1686561723 (2).png'
import { StaticImageData } from 'next/image'
export interface GridType  {
    id : number,
    image : StaticImageData,
    header : string,
    title : string,
    list : string[];
}

export const contentLayout = [
    {heading : 'How We Help'},
    {content : 'We Simplify the Transition to Electric Vehicles for Fleets.'},
    {content : `Since 2019, we've led the way in creating EV charging solutions that 
        work with all electric vehicle brands and models. Our software platform is 
        designed to empower a wide array of organizations—from car manufacturers to 
        workplaces and diverse fleet types—helping 
        them streamline their EV charging operations and elevate the driver experience.`},
]
export const HowItWorkGrid: GridType[] = [
    {
        id : 1,
        image : frame1,
        header : 'Versatile Solutions for Every Need.',
        title : 'Customize your EV charging experience.',
        list : [
            `Seamlessly establish, oversee, 
            and track your charging operations with our cutting-edge, 
            open software platform.`,
            `Power your preferred hardware or opt for our adaptable charging stations.`,
            `Draw in drivers to your charging stations while ensuring a dependable and 
            consistent experience.`
        ]
    },
    {
        id: 2,
        image : frame2,
        header : 'Fostering Customer Success.',
        title : 'We collaborate with you and adapt as you expand.',
        list : [
            `Lower operational costs while maximizing station availability 
            and keeping your vehicles on the road.`,
            `Boost efficiency with our proactive management tools and dedicated support.`,
            `Meet your current and future operational demands with tailored software, 
            hardware, and services.`
        ]
    },
    {
        id: 3,
        image : frame3,
        header : 'Elevated Driver Experience.',
        title : 'Charge wherever your journey takes you.',
        list : [
            `Easily find, initiate, and pay for charging using the highly-rated Maxwell app.`,
            `Connect to our network through your preferred partner experience, including Apple CarPlay, 
            Android Auto, or your vehicle's built-in infotainment system.`,
            `Charge at countless locations across our network and with our roaming partners.`
        ]
    }
]