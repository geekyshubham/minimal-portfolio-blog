import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {AboutSection, Avatar, Title, Text, SubTitle , Wave} from './style';
import { getImage } from "gatsby-plugin-image"
import {SectionIntro, ContainerLayout, ResumeButton} from "../common";

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "profile.webp" }) {
       childImageSharp {
         gatsbyImageData(
           placeholder: BLURRED formats: [AUTO, WEBP, AVIF]
         )
       }
      }
    }
  `)
  return (
    <>
      <SectionIntro>
        <ContainerLayout>
          <AboutSection>
            <div>
              {/* <svg class="absolute top-8 right-1/2 -mr-3 lg:m-0 lg:left-0" width="404" height="392" fill="none" viewBox="0 0 404 392"><defs><pattern id="837c3e70-6c3a-44e6-8854-cc48c737b659" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor"></rect></pattern></defs><rect width="404" height="392" fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"></rect></svg> */}
              <Avatar image={getImage(data.placeholderImage)} alt="Shubham Takankhar" />
              {/* <SubTitle> Full Stack Developer</SubTitle> */}
            </div> 
            <div>
              <Title> Hello, I’m Shubham <Wave>👋</Wave> </Title>
              <Text> I'm a Full Stack Developer from <b className="text-primary lined-link">India</b> living in Pune. </Text>
              <Text> I love working with modern technologies, building and designing awesome projects. I prefer minimalistic & clean designs with strong user experience.</Text>
              {/* <ResumeButton href="resume.pdf" target="_blank"> Download resume </ResumeButton> */}
            </div>
          </AboutSection>
        </ContainerLayout>
      </SectionIntro>
    </>
  )
}


export default About
