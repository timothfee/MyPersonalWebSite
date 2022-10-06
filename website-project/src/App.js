import tw from "twin.macro";
import GitHub from "../src/svg/GitHub.svg";

function App() {
  return (
    <Container>
      <NextContainer>
        <Header>Timothy D.S. Fee, your friendly neighborhood problem solver!</Header>
        <ImageContainer>
        <Image src="https://scontent-ort2-1.xx.fbcdn.net/v/t39.30808-6/310203608_5462309950484429_6826429688342991449_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=mBteukRq1WgAX9jdcyR&_nc_ht=scontent-ort2-1.xx&oh=00_AT_S_HVKnTIomZu16Ot8VZgsQ_Itbpuk5KCd4TJ-ZbpslQ&oe=634304F2"></Image>
        <Caption>(I may not be smiling, but I was happy in this picture!)</Caption>
        </ImageContainer>
      <Content>
        <p>
          Hello! I'm a developer and I love to build. I currently do all my
          coding in React with Tailwind CSS, but I got my start with C# and the
          .NET Framework. I believe I could be a great addition to any team not
          only because of my can do attitude but because I'm always looking to
          learn and improve. I love building keyboards and computers, I also love making music! And I will start the office Dungeons & Dragons campaign
           I hope you stay a while and explore! Have a
          wonderful year!
        </p>
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
const GitHubIcon = tw(GitHub)`w-10 h-10 text-white`;
const ImageContainer = tw.div`flex-col`;
const Caption = tw.p` text-white font-bold text-sm w-1/4 ml-8 mt-4`;
const Image = tw.img`rounded-full h-32 w-32 ml-32`;
const Content = tw.div`w-1/2 h-full text-gray-300 mx-auto text-xl pl-4 pr-4 pb-4 my-8 mb-8`;

const SubHeaderContainer = tw.div`flex justify-center items-center`;
const Subheader = tw.h2`text-6xl font-bold text-gray-200 animate-pulse`;
