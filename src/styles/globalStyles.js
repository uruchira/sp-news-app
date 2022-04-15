import { css } from "@emotion/react";

const globalStyles = css`
  html {
    font-family: "Roboto", sans-serif;
    font-size: 0.875rem;
    overflow-x: hidden;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body,
  p,
  button,
  * {
    font-kerning: normal;
    margin: 0;
    padding: 0;
  }

  a,
  a:active,
  a:visited {
    text-decoration: none;
    color: brown;
  }

  b {
    font-weight: 500;
  }

  button {
    border: none;
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

  .logo {
    margin-right: 50px;
  }

  .logo a {
    font-size: 2rem;
  }

  @media print {
    html {
      font-size: 9px;
    }
  }
`;

export default globalStyles;
