import React from "react";
import { SvgCss } from 'react-native-svg/css';

 const MyVisits = () => {
   const xml = ` <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="20"
      fill="none"
      viewBox="0 0 21 20"
    >
      <path
        stroke="#9E9E9E"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M10.87 14.677V12.14"
      ></path>
      <path
        stroke="#9E9E9E"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M17.065 3.33c1.69 0 3.05 1.37 3.05 3.06v3.44c-2.46 1.44-5.71 2.31-9.25 2.31s-6.78-.87-9.24-2.31V6.38c0-1.69 1.37-3.05 3.06-3.05h12.38z"
        clipRule="evenodd"
      ></path>
      <path
        stroke="#9E9E9E"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M14.37 3.326V2.96c0-1.22-.99-2.21-2.21-2.21H9.58c-1.22 0-2.21.99-2.21 2.21v.366M1.65 13.483l.188 2.509A3.242 3.242 0 005.07 18.99h11.6a3.242 3.242 0 003.231-2.998l.19-2.51"
      ></path>
    </svg>`
    return <SvgCss xml={xml} />
}

export default MyVisits;