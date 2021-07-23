import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {AboutSection, Avatar, Title, Text, SubTitle} from './style';
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
              <Avatar image={getImage(data.placeholderImage)} alt="Shubham Takankhar" />
              {/* <SubTitle> Full Stack Developer</SubTitle> */}
            </div> 
            <div>
              <Title> Hello, I’m Shubham </Title>
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
