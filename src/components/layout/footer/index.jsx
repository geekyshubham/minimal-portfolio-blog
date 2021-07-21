import React from 'react';
import socialMedia from "../../../data/socialMedia.json";
import data from "./../../../data/data";
import { FooterStyle, FooterBody, SubRight, CopyRight, MediaLink, FooterSocialMedia } from './style'
import { Linkedin,GitHub, Twitter} from 'react-feather'

import {ContainerLayout, ButtonDefault} from '../../common'

const Footer = () => {
	return (
		<>
			<FooterStyle>
				<ContainerLayout>
					<FooterBody>
						<FooterSocialMedia>
							{socialMedia.map(({ id, name, url }) => (
								<li key={id}> 
									<div className="social-media-icons">{name=="linkedin"&&<Linkedin/>}{name=="github"&&<GitHub/>}{name=="twitter"&&<Twitter/>}</div>
									<MediaLink className="lined-link" href={url} target="_blank" rel="noopener noreferrer" aria-label={`follow us on ${name}`}>
										{name}
									</MediaLink> 
								</li>
							))}
						</FooterSocialMedia>
						<div>
							<p className="text-primary quote"> Ready to take the next step and work together? </p>
							<ButtonDefault href={`mailto:${data.SiteContact.email}`}> Contact me </ButtonDefault>
						</div>
					</FooterBody>
					<div className="box">
						<SubRight> We abstract to make it look complex. But in real its just simple. </SubRight>
						<CopyRight className="text-dark">
							© 
							
							Copyright {new Date().getFullYear()} <span> Built with {` `} 💖
								{" "}
          		</span>  by {data.SiteAuthor} </CopyRight>
					</div>
				</ContainerLayout>
			</FooterStyle>
		</>
	)
}

export default Footer;