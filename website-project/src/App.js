import tw from "twin.macro";

function App() {
  return (
    <Container>
      <HeaderContainer>
      <Header>Welcome to my Page!</Header>
      <WhiteStrip/>
      </HeaderContainer>
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
    </Container>
  );
}

export default App;

const Container = tw.div`bg-black h-[100%] w-[100%] min-h-[100vh]`;
const HeaderContainer = tw.div`flex-row`;
const Header = tw.h1`pb-4 ml-40 text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-blue-800 z-10`;
const WhiteStrip = tw.div`relative bg-white h-2 w-[100%] z-0`;

const Content = tw.div`w-1/2 mx-auto text-white text-xl pl-4 pr-4 pb-4 my-32`;

const SubHeaderContainer = tw.div`flex justify-center items-center`;
const Subheader = tw.h2`text-6xl font-bold text-yellow-100 animate-pulse`;
