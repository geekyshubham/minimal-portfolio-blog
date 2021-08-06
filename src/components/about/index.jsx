import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {AboutSection, Avatar, Title, Text, Wave} from './style';
import { getImage } from "gatsby-plugin-image"
import {SectionIntro, ContainerLayout} from "../common";

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
              <Title> Hello, I’m Shubham Takankhar <Wave>👋</Wave> </Title>
              <Text> I'm a Techie from <b className="text-primary lined-link">India</b> living in Pune. </Text>
              <Text> I love working with modern technologies, building and designing awesome projects which can create some impact to the world</Text>
            </div>
          </AboutSection>
        </ContainerLayout>
      </SectionIntro>
    </>
  )
}


export default About
