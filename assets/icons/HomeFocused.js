import React from "react";
import { SvgCss } from 'react-native-svg/css';

 const HomeFocused = () => {
   const xml = `<svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        fill="#429DF0"
        d="M7.51 18.773v-3.057c0-.78.637-1.414 1.423-1.414h2.875c.377 0 .74.15 1.006.414.267.265.417.625.417 1v3.057c-.002.325.126.637.356.867.23.23.544.36.87.36h1.962a3.46 3.46 0 002.443-1 3.41 3.41 0 001.013-2.422V7.867c0-.735-.328-1.431-.895-1.902L12.309.675A3.097 3.097 0 008.36.748L1.842 5.965a2.474 2.474 0 00-.967 1.902v8.702C.875 18.464 2.422 20 4.331 20h1.916c.68 0 1.231-.544 1.236-1.218l.027-.009z"
      ></path>
    </svg>`
    return <SvgCss xml={xml} />
}

export default HomeFocused;