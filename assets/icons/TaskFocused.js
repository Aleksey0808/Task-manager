import React from "react";
import { SvgCss } from 'react-native-svg/css';

 const MyVisitsFocused = () => {
   const xml = `  <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="20"
      fill="none"
      viewBox="0 0 21 20"
    >
      <path
        fill="#429DF0"
        fillRule="evenodd"
        d="M9.58 1.519c-.671 0-1.241.466-1.401 1.094h5.382a1.453 1.453 0 00-1.4-1.094H9.579zm5.502 1.094h1.981c2.101 0 3.812 1.731 3.812 3.858 0 0-.06.9-.08 2.154a.33.33 0 01-.13.255c-.48.355-.92.65-.96.67-1.661 1.113-3.591 1.897-5.647 2.287a.318.318 0 01-.335-.163 3.296 3.296 0 00-2.853-1.649 3.35 3.35 0 00-2.872 1.643.319.319 0 01-.333.16 15.491 15.491 0 01-5.62-2.269l-.96-.668a.286.286 0 01-.13-.243c-.03-.516-.08-2.177-.08-2.177 0-2.127 1.71-3.858 3.812-3.858h1.97C6.849 1.144 8.08 0 9.58 0h2.582c1.5 0 2.731 1.144 2.921 2.613zm5.453 8.202l-.04.02c-2.021 1.357-4.452 2.259-7.004 2.633a.753.753 0 01-.82-.546 1.816 1.816 0 00-1.781-1.378h-.03c-.85 0-1.56.547-1.78 1.378a.753.753 0 01-.821.546c-2.552-.374-4.983-1.276-7.004-2.633-.01-.01-.11-.07-.19-.02-.09.05-.09.172-.09.172l.07 5.165c0 2.127 1.7 3.848 3.802 3.848h12.046c2.101 0 3.802-1.721 3.802-3.848l.08-5.165s0-.121-.09-.172c-.05-.03-.11-.02-.15 0zm-8.915 4.243c0 .426-.33.76-.75.76a.754.754 0 01-.75-.76v-1.306c0-.415.34-.76.75-.76.42 0 .75.345.75.76v1.306z"
        clipRule="evenodd"
      ></path>
    </svg>`
    return <SvgCss xml={xml} />
}

export default MyVisitsFocused;