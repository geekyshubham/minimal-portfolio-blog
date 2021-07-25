import './fonts.css';
import { createGlobalStyle } from 'styled-components';
import {colors} from "../../../data/variables";


export const GlobalStyle = createGlobalStyle`
  // normalize
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  ::-webkit-scrollbar{
    width: 6px;
  }

  ::-webkit- scrollbar -track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  ::-webkit-scrollbar-thumb {
    background: ${colors.primary};
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${colors.darkGrey};
  }


  html {
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
    line-height: 1.15; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
    body {
      font-size: 14px;
      font-family: 'GT-Walsheim-Pro-Regular';
      margin: 0;
    }
    main {
      display: block;
    }
    h1 {
      font-size: 2em;
      margin: 0.67em 0;
    }
    hr {
      box-sizing: content-box; /* 1 */
      height: 0; /* 1 */
      overflow: visible; /* 2 */
    }
    a {
      background-color: transparent;
      text-decoration: none;
    }
    b,
    strong {
      font-weight: bolder;
      font-family: 'GT-Walsheim-Pro-Bold';
    }
    small {
      font-size: 80%;
    }
    sub,
    sup {
      font-size: 75%;
      line-height: 0;
      position: relative;
      vertical-align: baseline;
    }
    sub {
      bottom: -0.25em;
    }
    sup {
      top: -0.5em;
    }
    img {
      border-style: none;
    }
    .center {
      text-align: center;
    }
    button,
    input,
    optgroup,
    select,
    textarea {
      font-family: inherit; /* 1 */
      font-size: 100%; /* 1 */
      line-height: 1.15; /* 1 */
      margin: 0; /* 2 */
    }
    button,
    input { /* 1 */
      overflow: visible;
    }
    button,
    select { /* 1 */
      text-transform: none;
    }
    button,
    [type="button"],
    [type="reset"],
    [type="submit"] {
      -webkit-appearance: button;
    }
    button::-moz-focus-inner,
    [type="button"]::-moz-focus-inner,
    [type="reset"]::-moz-focus-inner,
    [type="submit"]::-moz-focus-inner {
      border-style: none;
      padding: 0;
    }
    button:-moz-focusring,
    [type="button"]:-moz-focusring,
    [type="reset"]:-moz-focusring,
    [type="submit"]:-moz-focusring {
      outline: 1px dotted ButtonText;
    }
    [hidden] {
      display: none;
    }
    
    .text-dark {
      color: ${colors.black};
    }
    .text-primary {
      color: ${colors.primary};
    }
    .align-middle {
      vertical-align: middle;
    }

    p {
      font-size: 1.125rem;
      font-weight: 200;
      line-height: 1.8;
    }
  }

@media(max-width:355px){
  #navlinks>span{
display:none;
}
}
  
.lined-link {
  display: inline-block;
  position: relative;
  padding-top: .5em;
  padding-bottom: .25em;
  transition: all .2s ease-out;
  will-change: transform, color;
  &:after {
    z-index: 1;
    position: absolute;
    bottom: -1px;
    left: 0;
    content: "";
    display: block;
    width: 100%;
    height: 5px;
    background-color: ${colors.primary};
    transform: scale(0, 1);
    transform-origin: 100% 50%;
    will-change: transform;
    transition: transform 0.8s cubic-bezier(0.19, 1, 0.22, 1), 
    -webkit-transform 0.8s cubic-bezier(0.19, 1, 0.22, 1);
  }
  &:hover:after,
  &.active:after {
    background-color: ${colors.primary};
    transform: scale(1);
    transform-origin: 0 50%;
    transition: transform 1s cubic-bezier(0.19, 1, 0.22, 1), background-color 0.2s ease-out, 
    -webkit-transform 1s cubic-bezier(0.19, 1, 0.22, 1);
  }
}

.error__emoji {
  width: 30vw;
}

// navbar anim.

.anim-width{
        max-width: fit-content;
}
.logo-anim span{
  margin-left: 30px;
}

.logo-anim {
  color: rgb(0, 0, 0);  
  font-family: monospace;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .15em solid #ff2d2d; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: .15em; /* Adjust as needed */
  animation: 
    typing 2s steps(15, end),
    blink-caret .5s step-end infinite;
}

/* The typing effect */
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: #ff2d2d }
}

box{
max-width:max-content;}


`