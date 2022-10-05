import tw from 'twin.macro';

function App() {
  return (
    <Container>
      <Header>Welcome to my Page!</Header>
    <SubHeaderContainer>
      <Subheader>Enjoy the look around</Subheader>
    </SubHeaderContainer>
    </Container>
  );
}

export default App;

const Container = tw.div`bg-gray-800 h-[100%] w-[100%] min-h-[100vh]`;
const Header = tw.h1`text-4xl font-bold text-blue-500 pl-4 pt-4 pb-4`;

const SubHeaderContainer = tw.div`flex justify-center items-center bg-black`;
const Subheader = tw.h2`text-6xl font-bold text-gray-800 animate-pulse`;
