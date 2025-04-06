import React from "react";
export interface WhoWeAreType {
  id: number;
  title: string;
  content: string;
  icon: React.FC; // Use React.FC for SVG components
}
export interface WhoWeAreRating {
  id: number;
  rate: string;
  value: string;
}
export interface childContent {
  id: number;
  title: string;
}
export interface layoutText {
  heading?: string;
  content?: string | childContent[];
}
export const CardOne: React.FC = () => (
  <svg
    width="49"
    height="49"
    viewBox="0 0 49 49"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.075709 24.2455C0.0338961 10.9907 10.7451 0.211709 23.9999 0.169896C37.2546 0.128083 48.0337 10.8393 48.0755 24.0941C48.1173 37.3488 37.4061 48.1278 24.1513 48.1697C10.8965 48.2115 0.117522 37.5003 0.075709 24.2455Z"
      fill="#EB8F02"
      fill-opacity="0.3"
    />
    <path
      d="M10.0754 24.2138C10.051 16.4819 16.2992 10.1941 24.0312 10.1697C31.7631 10.1453 38.0509 16.3935 38.0753 24.1255C38.0997 31.8574 31.8515 38.1452 24.1195 38.1696C16.3876 38.194 10.0998 31.9457 10.0754 24.2138Z"
      fill="#EB8F02"
    />
    <path
      d="M22.4916 29.5079L25.6916 29.4978C28.3582 29.4894 29.4215 28.4193 29.4131 25.7527L29.403 22.5527C29.3946 19.886 28.3246 18.8227 25.6579 18.8312L22.4579 18.8413C19.7913 18.8497 18.728 19.9197 18.7364 22.5863L18.7465 25.7863C18.7549 28.453 19.8249 29.5163 22.4916 29.5079Z"
      stroke="#FCFCFD"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M23.0858 27.506L25.0858 27.4996C26.7524 27.4944 27.417 26.8256 27.4117 25.159L27.4054 23.159C27.4002 21.4923 26.7314 20.8278 25.0648 20.833L23.0648 20.8393C21.3981 20.8446 20.7335 21.5133 20.7388 23.18L20.7451 25.18C20.7504 26.8466 21.4191 27.5112 23.0858 27.506Z"
      stroke="#FCFCFD"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21.3978 18.8446L21.3936 17.5112"
      stroke="#FCFCFD"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M24.0579 18.8363L24.0537 17.5029"
      stroke="#FCFCFD"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M26.7249 18.828L26.7207 17.4946"
      stroke="#FCFCFD"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M29.3994 21.4858L30.7327 21.4816"
      stroke="#FCFCFD"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M29.4082 24.1528L30.7415 24.1486"
      stroke="#FCFCFD"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M29.417 26.8193L30.7503 26.8151"
      stroke="#FCFCFD"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M26.7588 29.4946L26.763 30.828"
      stroke="#FCFCFD"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M24.0986 29.5029L24.1028 30.8363"
      stroke="#FCFCFD"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21.4316 29.5112L21.4358 30.8446"
      stroke="#FCFCFD"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M17.4004 21.5239L18.7337 21.5197"
      stroke="#FCFCFD"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M17.4082 24.1904L18.7415 24.1862"
      stroke="#FCFCFD"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M17.417 26.8574L18.7503 26.8532"
      stroke="#FCFCFD"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M24.0705 22.636L23.4472 23.7313C23.308 23.9718 23.422 24.1714 23.702 24.1705L24.4486 24.1682C24.7286 24.1673 24.8426 24.3669 24.7033 24.6074L24.0801 25.7027"
      stroke="#FCFCFD"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
export const CardTwo: React.FC = () => (
  <svg
    width="49"
    height="49"
    viewBox="0 0 49 49"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.742701 24.2455C0.700888 10.9907 11.4121 0.211709 24.6669 0.169896C37.9216 0.128083 48.7007 10.8393 48.7425 24.0941C48.7843 37.3488 38.0731 48.1278 24.8183 48.1697C11.5635 48.2115 0.784514 37.5003 0.742701 24.2455Z"
      fill="#EB8F02"
      fill-opacity="0.3"
    />
    <path
      d="M10.7424 24.2138C10.718 16.4819 16.9662 10.1941 24.6982 10.1697C32.4301 10.1453 38.7179 16.3935 38.7423 24.1255C38.7667 31.8574 32.5184 38.1452 24.7865 38.1696C17.0546 38.194 10.7668 31.9457 10.7424 24.2138Z"
      fill="#EB8F02"
    />
    <path
      d="M30.4033 22.4849C31.4033 22.4817 31.4044 22.815 31.4065 23.4817L31.4107 24.815C31.4128 25.4817 31.4138 25.815 30.4138 25.8182"
      stroke="#FCFCFD"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M23.4002 21.507L22.1455 23.1776C21.8869 23.6251 22.2086 24.1774 22.7219 24.1758L24.2553 24.1709C24.7686 24.1693 25.0903 24.7216 24.8384 25.1691L23.417 26.8403"
      stroke="#FCFCFD"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21.4233 28.8467C18.7567 28.8551 18.0879 28.1905 18.0795 25.5239L18.0711 22.8572C18.0626 20.1906 18.7272 19.5218 21.3939 19.5134"
      stroke="#FCFCFD"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M25.3936 19.501C28.0602 19.4926 28.729 20.1571 28.7374 22.8238L28.7458 25.4904C28.7542 28.1571 28.0897 28.8259 25.423 28.8343"
      stroke="#FCFCFD"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
export const CardThree: React.FC = () => (
  <svg
    width="49"
    height="49"
    viewBox="0 0 49 49"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.408717 24.2455C0.366904 10.9907 11.0781 0.211709 24.3329 0.169896C37.5877 0.128083 48.3667 10.8393 48.4085 24.0941C48.4503 37.3488 37.7391 48.1278 24.4843 48.1697C11.2295 48.2115 0.45053 37.5003 0.408717 24.2455Z"
      fill="#EB8F02"
      fill-opacity="0.3"
    />
    <path
      d="M10.4084 24.2138C10.384 16.4819 16.6322 10.1941 24.3642 10.1697C32.0961 10.1453 38.3839 16.3935 38.4083 24.1255C38.4327 31.8574 32.1845 38.1452 24.4525 38.1696C16.7206 38.194 10.4328 31.9457 10.4084 24.2138Z"
      fill="#EB8F02"
    />
    <path
      d="M18.7628 30.8543L18.727 19.521C18.7228 18.1877 19.614 17.5182 20.7207 17.5147L26.054 17.4979C27.1607 17.4944 28.0561 18.1582 28.0603 19.4915L28.0961 30.8248L18.7628 30.8543Z"
      stroke="#FCFCFD"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M17.7627 30.8574L29.096 30.8217"
      stroke="#FCFCFD"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21.9971 22.8438L24.8171 22.8349C25.5104 22.8327 26.076 22.4976 26.0731 21.571L26.0705 20.751C26.0676 19.8243 25.4999 19.4928 24.8065 19.4949L21.9866 19.5038C21.2932 19.506 20.7276 19.8411 20.7305 20.7678L20.7331 21.5878C20.736 22.5145 21.3038 22.846 21.9971 22.8438Z"
      stroke="#FCFCFD"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M24.4101 24.8364L21.9144 26.1776L24.9186 27.5014L21.9228 28.8442"
      stroke="#FCFCFD"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M28.0831 26.8315L31.0831 26.8154L31.0704 22.8154L29.735 22.1529"
      stroke="#FCFCFD"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
export const WhoWeAreCard: WhoWeAreType[] =  [
  {
    id: 1,
    title: "Commercial and Business Solutions",
    content: `We provide a comprehensive array of deployment options, including
         single and dual-port configurations for all vehicles, as well as dual-port 
         setups with e-bike charging and rapid dual-port solutions tailored for every user.`,
    icon: CardOne,
  },
  {
    id: 2,
    title: "Automakers and Fleet Solutions",
    content: `As the leading provider in fleet electrification, we deliver charging solutions
         for the largest rideshare services, food delivery companies, and electric vehicle fleet 
         managers across the nation.`,
    icon: CardTwo,
  },
  {
    id: 3,
    title: "Personal and Driver Use",
    content: `By creating an account, you gain access to a wider selection of charging options, 
        enjoy zero roaming fees, and experience less hassle while using our app on the go.`,
    icon: CardThree,
  },
];
export const RatingCard = [
  {
    id: 1,
    rate: "7.5+",
    value: `Charging sessions have been successfully initiated.`,
  },
  {
    id: 2,
    rate: "13K+",
    value: `Charging sessions currently active in the network..`,
  },
  {
    id: 3,
    rate: "82%",
    value: `Sustainable Charging Stations for a Greener Future.`,
  },
];
export const contentLayout = [
  { heading: `Who We Are` },
  {
    content: `We Provide a Variety of Charging 
    Solutions Customized to Fit your Unique Business Model.`,
  },
  {
    content: `We are dedicated to providing the necessary 
    infrastructure and expertise to support the transition to electric 
    mobility, ensuring our customers are satisfied and their vehicles remain 
    fully operational.`,
  },
  {
    content: [
      {
        id : 1,
        title: `Enjoy a warranty of 2 to 3 years, with the option to extend it up to 5 years.`,
      },
      {
        id : 2,
        title: `Track your charging activity and earn rewards while you charge.`,
      },
      { id : 3,
        title: `Access to hundreds of thousands of charging locations.` },
      {
        id : 4,
        title: `Participate, engage, and stand a chance to win gift cards in our community video contests!`,
      },
    ],
  },
  {
    content: `Electric Vehicle Charging Options Tailored for Every Business and Driver`,
  },
  {
    content: `For over ten years, we’ve been pioneering the fueling network of the future. 
    We’ve established more charging locations than any other provider, 
    and our customers rely on us for their charging needs throughout the day.`,
  },
];
