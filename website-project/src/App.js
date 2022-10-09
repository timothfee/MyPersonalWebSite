import tw from "twin.macro";

import {ReactComponent as DocDownload} from "../src/svg/document-download.svg";
import {ReactComponent as BriefCase} from "../src/svg/brief-case.svg";

function App() {
  return (
    <Container>
      <NextContainer>
        <Header>
          Timothy D.S. Fee, your friendly neighborhood problem solver!
        </Header>
        <ImageContainer>
          <Image src="https://scontent-ort2-1.xx.fbcdn.net/v/t39.30808-6/310203608_5462309950484429_6826429688342991449_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=mBteukRq1WgAX9jdcyR&_nc_ht=scontent-ort2-1.xx&oh=00_AT_S_HVKnTIomZu16Ot8VZgsQ_Itbpuk5KCd4TJ-ZbpslQ&oe=634304F2"></Image>
          <Caption>
            (I may not be smiling, but I was happy in this picture!)
          </Caption>
        </ImageContainer>
        <Content>
          <p>
            Hello! I'm a developer and I love to build. I currently do all my
            coding in React with Tailwind CSS, but I got my start with C# and
            the .NET Framework. I believe I could be a great addition to any
            team not only because of my can do attitude but because I'm always
            looking to learn and improve. I love building keyboards and
            computers, I also love making music! And I will start the office
            Dungeons & Dragons campaign I hope you stay a while and explore!
            Have a wonderful year!
          </p>
          <Download>
            <ResumeHeader className="text-center">My work History <BriefCase className='ml-4 h-8 w-8'/></ResumeHeader>
            <Row>
              <WorkImage src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.acellus.com%2Fwp-content%2Fuploads%2F2017%2F09%2FAcellus-Cube-Logo-Color.jpg&f=1&nofb=1&ipt=f95bd14bf42128cd18f77a63f97797c1bb038d9ddc2330a621dc69b3691b9466&ipo=images" />
              <Description>
                <Company>Acellus</Company>
                <CompanyTitle>Software Developer</CompanyTitle>
                <Date>2022 - Present</Date>
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
              Download My Resume Here
              <ResumeButton>Click Here<DocSVG/></ResumeButton>
            </Resume>
          </Download>
        </Content>
        <SubHeaderContainer>
          <Subheader>Enjoy the look around</Subheader>
        </SubHeaderContainer>
      </NextContainer>
    </Container>
  );
}

export default App;

const Container = tw.div`bg-black h-[100%] w-[100%] min-h-[100vh]`;
const NextContainer = tw.div`bg-gray-500 bg-opacity-10 h-[100%] w-3/4 min-h-[100vh] mx-auto`;

const Header = tw.h1`text-5xl text-center text-white font-bold pt-32 w-1/2 pb-9 pr-8`;
const ImageContainer = tw.div`flex-col`;
const Caption = tw.p` text-white font-bold text-sm w-1/4 ml-8 mt-4`;
const Image = tw.img`rounded-full h-32 w-32 ml-32`;

const Download = tw.div` rounded-2xl text-lg font-bold border-gray-500 border mx-8 w-full whitespace-nowrap`;
const ResumeHeader = tw.div`flex flex-row text-lg font-bold text-white mx-8 mt-8 mb-4`;
const Row = tw.div`flex flex-row mt-4 mx-4 mr-16 justify-start`;
const Description = tw.div`flex flex-col`;
const Company = tw.h2`text-base font-bold`;
const CompanyTitle = tw.p`text-sm text-gray-500 font-semibold`;
const Date = tw.p`text-gray-600 font-medium text-xs`;
const WorkImage = tw.img`mr-2 rounded-full h-10 w-10`;
const Resume = tw.div`flex flex-col text-white font-bold text-sm text-center mt-16 align-baseline`;
const ResumeButton = tw.button`flex justify-center bg-gray-800 bg-opacity-50 font-bold text-sm mx-auto my-4 py-4 align-baseline border border-gray-500 rounded-2xl h-3/5 w-10/12 hover:bg-white hover:text-black hover:border-black transition ease-in-out duration-300`;
const DocSVG = tw(DocDownload)`h-6 w-6 ml-2 text-white stroke-2 hover:text-black`;

const Content = tw.div` flex w-1/2 h-full text-gray-300 mx-auto text-xl pl-4 pr-4 pb-4 my-8 mb-8`;

const SubHeaderContainer = tw.div`flex justify-center items-center`;
const Subheader = tw.h2`text-6xl font-bold text-gray-200 animate-pulse`;
