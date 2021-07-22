import styled from 'styled-components';
import {sizes} from "../../../data/variables";

export const ContainerLayout = styled.div`
  width: ${sizes.width};
  margin-left: auto;
  margin-right: auto;

  &.wrapper {
    max-width: ${sizes.wrapperWidth};
    margin: auto;
  }
  @media only screen and (min-width: ${sizes.breakpointLarge}) {
    max-width: 75rem;
  }
  
`