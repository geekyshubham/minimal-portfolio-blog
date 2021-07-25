
import { GatsbyImage} from "gatsby-plugin-image"

import styled from 'styled-components';
import {sizes} from '../../data/variables';

export const AboutSection = styled.section`
  text-align: center;
  @media only screen and (min-width: ${sizes.breakpointLarge}) {
    display: grid;
    grid-template-columns: 1fr 1.25fr;
    grid-gap: 10rem;
    text-align: left;
    align-items: center;
  }
`
export const Avatar = styled(GatsbyImage)
`
  border-radius: 5px;
  box-shadow: 0px 0px 64px rgba(0, 0, 0, 0.15);
  width: 100%;
`
export const Title = styled.h1`
  font-size: 3rem;
  text-transform: capitalize;
  font-family: "GT-Walsheim-Pro-Bold";
  @media(max-width: ${sizes.breakpointPhone}) {
    font-size: 2rem;
  }
`
export const Text = styled.p`
  font-size: 1.2rem;
  line-height: 2;
  color: #232323;
  text-transform: capitalize;
  a {
    color: #3F51B5;
    text-decoration: underline;
  }
`

export const Wave = styled.span`

animation-name: wave-animation;  /* Refers to the name of your @keyframes element below */
animation-duration: 2.5s;        /* Change to speed up or slow down */
animation-iteration-count: infinite;  /* Never stop waving :) */
transform-origin: 70% 70%;       /* Pivot around the bottom-left palm */
display: inline-block;

@keyframes wave-animation {
    0% { transform: rotate( 0.0deg) }
   10% { transform: rotate(14.0deg) }  
   20% { transform: rotate(-8.0deg) }
   30% { transform: rotate(14.0deg) }
   40% { transform: rotate(-4.0deg) }
   50% { transform: rotate(10.0deg) }
   60% { transform: rotate( 0.0deg) }  /* Reset for the last half to pause */
  100% { transform: rotate( 0.0deg) }
}
`
export const SubTitle = styled.h2`
  font-family: "GT-Walsheim-Pro-Medium";
  margin-top: 3rem;
  margin-bottom: 2rem;
  text-align: center;
  text-transform: uppercase;
  word-spacing: 8px;
  @media(min-width: ${sizes.breakpointPhone}) {
    font-size: 1.8em;
  }
`