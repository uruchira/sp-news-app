import { css } from "@emotion/react";

const globalStyles = css`
  @font-face {
    font-family: "georgia-regular";
    src: url("../assets/fonts/georgia-webfont.woff") format("woff2"),
      url("../assets/fonts/georgia-webfont.woff") format("woff");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "georgia-bold";
    src: url("../assets/fonts/georgiab-webfont.woff2") format("woff2"),
      url("../assets/fonts/georgiab-webfont.woff") format("woff");
    font-weight: normal;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-size: 14px;
    font-family: "georgia-regular", Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1 {
    font-size: 1.25rem;
    font-family: "georgia-bold", Arial, sans-serif;
  }

  p {
    font-family: "Roboto", sans-serif;
  }

  a,
  a:active,
  a:visited {
    text-decoration: none;
    color: brown;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px #ffffff inset !important;
    box-shadow: 0 0 0px 1000px #ffffff inset !important;
  }

  .main-wrapper {
    background-color: #fff;
    padding-top: 1rem;
    width: 100%;
  }

  .main-container {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 1200px;
  }

  @media print {
    html {
      font-size: 9px;
    }
  }
`;

export default globalStyles;
