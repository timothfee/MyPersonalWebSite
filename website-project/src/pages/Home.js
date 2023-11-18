import tw from "twin.macro";

import {ReactComponent as BriefCase} from "../svg/brief-case.svg";

import { Link } from "react-router-dom";

function App() {
  return (
    <Container>
      <NextContainer>
        <Header>
          Timothy D.S. Fee: Technology Enthusiast
        </Header>
        <ImageContainer>
          <Image src="https://avatars.githubusercontent.com/u/101140703?v=4"></Image>
        </ImageContainer>
        <Content>
          <LeftSide>
          <Introduction>
            Howdy, welcome to my website (that I built)!
           </Introduction>
           <Projects>
            <ProjectsTitle>
              Projects (That I've Done)
            </ProjectsTitle>
            <Pwn>
              <PwnTitle to="/pwnagotchi">
                Pwnagotchi
              </PwnTitle>
            </Pwn>
          </Projects>
          </LeftSide>
          <hr/>
          <Download>
            <ResumeHeader>My work History <BriefCase className='ml-4 h-8 w-8 stroke-2 text-gray-300'/></ResumeHeader>
            <Row>
              <WorkImage src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/uwf1eeplthacp3toears"/>
              <Description>
                <Company>United Benefits Group</Company>
                <CompanyTitle>System Administrator/Software Developer</CompanyTitle>
                <Date>2023 - Present</Date>
              </Description>
            </Row>
            <Row>
              <WorkImage src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.acellus.com%2Fwp-content%2Fuploads%2F2017%2F09%2FAcellus-Cube-Logo-Color.jpg&f=1&nofb=1&ipt=f95bd14bf42128cd18f77a63f97797c1bb038d9ddc2330a621dc69b3691b9466&ipo=images" />
              <Description>
                <Company>Acellus</Company>
                <CompanyTitle>Software Developer</CompanyTitle>
                <Date>2022 - 2023</Date>
              </Description>
            </Row>
            <Row>
              <WorkImage src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.explicit.bing.net%2Fth%3Fid%3DOIP.1Do85NGgh2ehYsxPKRVsEQHaHa%26pid%3DApi&f=1&ipt=c431dd75300b8759937e5605e52d04188962b9803714c6c0b3cf084b77c7222c&ipo=images" />
              <Description>
                <Company>Tri-Health</Company>
                <CompanyTitle>Maintenance Technician</CompanyTitle>
                <Date>January 2022 - July 2022</Date>
              </Description>
            </Row>
            <Row>
              <WorkImage src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.lorsel.com%2Fwp-content%2Fuploads%2F2020%2F02%2Fzlogo-arku.png&f=1&nofb=1&ipt=0af92966c95dacb18aa58d59ccc9beed4295a60c37ddc2a0692260801c1f8d93&ipo=images" />
              <Description>
                <Company>ARKU</Company>
                <CompanyTitle>Field Service Engineer</CompanyTitle>
                <Date>February 2021 - July 2021</Date>
              </Description>
            </Row>
            <Row>
              <WorkImage src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fclipartcraft.com%2Fimages%2Fus-marines-logo-symbol-4.png&f=1&nofb=1&ipt=222fedf5fd47bf903d58b736574983fde5ad0562a96d3e8d1d8402354e54ab64&ipo=images" />
              <Description>
                <Company>United States Marine Corps</Company>
                <CompanyTitle>Avionics Technician</CompanyTitle>
                <Date>January 2016 - January 2021</Date>
              </Description>
            </Row>
            <Resume>
              <ResumeButton to="https://drive.proton.me/urls/875EAV7TPG#LFXzVVax8Yqp" target="_blank">Download My Resume Here</ResumeButton>
            </Resume>
          </Download>
        </Content>
        <SubHeaderContainer>
          <Subheader>Enjoy looking around</Subheader>
        </SubHeaderContainer>
        <hr/>
        <CopyRight>© 2023 Timothy D.S. Fee. All rights reserved.</CopyRight>
      </NextContainer>
    </Container>
  );
}

export default App;

const Container = tw.div`bg-white h-[100%] w-[100%] min-h-[110vh]`;
const NextContainer = tw.div`bg-white h-[100%] w-full md:w-3/4 min-h-[100vh] mx-0 md:mx-auto p-2 md:p-4 pb-16`;

const Header = tw.h1`text-gray-800 text-5xl text-center font-bold pt-32 w-full xl:w-1/2 pb-9 mx-auto md:mx-0 pr-0 md:pr-8`;
const ImageContainer = tw.div`flex-col`;
const Image = tw.img`rounded-full h-40 w-40 ml-52 border-white border-2 ring-black ring-2`;

const Download = tw.div`mt-8 rounded-2xl text-lg font-bold border-gray-300 border mx-auto w-full md:w-5/6 whitespace-nowrap`;
const ResumeHeader = tw.div`flex flex-row text-lg font-bold text-gray-800 mt-8 mb-4 justify-center`;
const Row = tw.div`flex flex-row mt-4 mx-4 mr-16 justify-start`;
const Description = tw.div`flex flex-col ml-8 mr-auto w-1/2`;
const Company = tw.h2`text-black hover:text-green-500 transition ease-in-out duration-300 text-base font-semibold`;
const CompanyTitle = tw.p`text-sm text-gray-500`;
const Date = tw.p`text-gray-800 text-xs`;
const WorkImage = tw.img`mr-2 rounded-full h-10 w-10 bg-white`;
const Resume = tw.div`text-yellow-300 flex flex-col font-bold text-sm text-center mt-16 align-baseline`;
const ResumeButton = tw(Link)`text-black flex justify-center bg-white bg-opacity-50 font-bold text-sm mx-auto my-4 py-4 align-baseline border border-gray-500 rounded-2xl h-3/5 w-10/12 hover:bg-black hover:text-white hover:border-black transition ease-in-out duration-300`;

const Content = tw.div` block  lg:flex w-full h-full text-gray-300 mx-auto text-xl pl-4 pr-4 pb-4 my-8 mb-8 justify-between`;
const LeftSide = tw.div`text-base text-gray-300 w-full h-full mb-8 mr-8`;
const Introduction = tw.p`text-base font-bold text-gray-800 w-full h-full mb-8 mr-8`;

const Projects = tw.div`justify-center`
const ProjectsTitle = tw.h1`text-[200%] font-bold text-gray-800 mb-10`
const Pwn = tw.div``
const PwnTitle = tw(Link)`font-bold mt-5 border-gray-500 hover:text-black transition ease-in-out duration-300`

const SubHeaderContainer = tw.div`flex justify-center items-center`;
const Subheader = tw.h2`text-6xl font-bold text-gray-200 animate-pulse pb-16`;

const CopyRight = tw.p`text-center text-gray-500 text-sm mt-8`;
