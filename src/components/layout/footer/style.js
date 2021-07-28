import styled from 'styled-components';
import {colors,sizes} from '../../../data/variables';

export const FooterStyle = styled.footer`
	padding-top: 1rem;
  padding-bottom: 2rem;
	z-index: 0;
	position: relative;
	text-align: left;
	@media(min-width: ${sizes.breakpointPhone}) {
		background: linear-gradient(to top, #efe9e9, transparent 50%);
	}
	@media(max-width: ${sizes.breakpointPhone}) {
		padding-bottom: 2rem;
		padding-left: .5rem;
		padding-right: .5rem;
		text-align: center;
	}
	.quote {
		font-size: 2rem;
		font-family: "GT-Walsheim-Pro-Bold";
		line-height: 1.2;
		color: ${colors.primary};
		@media(max-width: ${sizes.breakpointPhone}) {
			font-size: 2rem;
		}
	}
`;

export const SubRight = styled.p`
	font-size: 1rem;
	line-height: 1.8;
	letter-spacing:2px;
	text-transform: capitalize;
	margin-bottom: 20px;
	font-family: "GT-Walsheim-Pro-Bold";
`	
export const CopyRight = styled.p`
	font-size: 11px;
	line-height: 1.8;
	letter-spacing:1px;
	text-transform: capitalize;
`
export const FooterBody = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	align-items: center;
	@media(max-width: ${sizes.breakpointPhone}) {
		grid-template-columns: 1fr;
	}
`
export const Author = styled.div`
	text-align: right;
`
export const FooterSocialMedia = styled.ul`
	list-style: none;
	padding: 0rem 1.5rem;
	@media(max-width: ${sizes.breakpointPhone}) {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	li {
		margin-bottom: 1.5rem;
	}
`
export const MediaLink = styled.a`
	padding: 1rem 0rem;
	padding-bottom: .5rem;
	line-height: 1;
	font-size: 1rem;
  text-transform: capitalize;
  font-family: "GT-Walsheim-Pro-Regular";
	color: #000;
	
`