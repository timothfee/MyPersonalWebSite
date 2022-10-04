import tw from 'twin.macro';

function App() {
  return (
    <Container>
      <Header>Welcome to my Page!</Header>
    </Container>
  );
}

export default App;

const Container = tw.div`bg-gray-800 h-[100%] w-[100%]`;
const Header = tw.h1`text-4xl font-bold text-blue-500`;
