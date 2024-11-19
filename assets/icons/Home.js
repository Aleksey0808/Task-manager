import React from "react";
import { SvgCss } from 'react-native-svg/css';

 const Home = () => {
   const xml = ` <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="22"
      fill="none"
      viewBox="0 0 21 22"
    >
      <path
        stroke="#9E9E9E"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        fillRule="evenodd"
        d="M7.532 19.771v-3.066c0-.78.636-1.414 1.424-1.42h2.886c.792 0 1.433.636 1.433 1.42v3.076c0 .662.534 1.204 1.203 1.219h1.924c1.918 0 3.473-1.54 3.473-3.438v0-8.724a2.44 2.44 0 00-.962-1.905l-6.58-5.248a3.18 3.18 0 00-3.945 0L1.837 6.943a2.42 2.42 0 00-.962 1.904v8.715C.875 19.46 2.43 21 4.348 21h1.924c.685 0 1.241-.55 1.241-1.229v0"
      ></path>
    </svg>`
    return <SvgCss xml={xml} />
}

export default Home;