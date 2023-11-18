import tw from "twin.macro";

import { Link } from "react-router-dom";


export default function Pwnagotchi() {
  return (
    <Container>
      <NextContainer>
        <div>
          <Home to="/home">
            Home
          </Home>
        </div>
        <Header>
          The Pwnagotchi (⌐■_■)
        </Header>
        <Description>
        The Pwnagotchi is a unique and whimsical electronic device that combines elements of technology, cybersecurity, and a touch of creativity. Essentially, it is a personalized artificial intelligence companion designed to interact with Wi-Fi networks in a playful and educational manner. Shaped like a small electronic creature, the Pwnagotchi is often housed in a 3D-printed case that resembles a Tamagotchi virtual pet.
          <Break/>
        What sets the Pwnagotchi apart is its primary function: it is a tool used by cybersecurity enthusiasts for ethical hacking and network security experimentation. The device leverages machine learning algorithms to optimize its interactions with Wi-Fi networks, learning and adapting to improve its effectiveness over time. Users can customize and monitor the Pwnagotchi's activities through a user-friendly interface, making it a fun and educational tool for those interested in cybersecurity.
          <Break/>
        Despite its somewhat mischievous name, the Pwnagotchi is generally used for legal and ethical purposes, serving as a hands-on learning platform for cybersecurity enthusiasts to explore and understand the intricacies of Wi-Fi networks and security protocols. The project highlights the intersection of technology, education, and entertainment, offering a novel way for individuals to engage with cybersecurity concepts in a lighthearted and accessible manner.
        </Description>
        <hr className='mt-20'/>
        <CopyRight>© 2023 Timothy D.S. Fee. All rights reserved.</CopyRight>
      </NextContainer>
    </Container>
  );
}

const Container = tw.div`bg-white h-[100%] w-[100%] min-h-[110vh]`;
const NextContainer = tw.div`bg-white h-[100%] w-full md:w-3/4 min-h-[100vh] mx-0 md:mx-auto p-2 md:p-4 pb-16 border-gray-300`;

const Description = tw.div`text-gray-800 font-semibold ml-20 mr-20`
const Break = tw.div`mb-8 border-gray-500`

const Header = tw.h1`text-gray-800 text-5xl text-center font-bold pt-32 w-full xl:w-1/2 pb-9 mx-auto md:mx-0 pr-0 md:pr-8`;

const Home = tw(Link)`mx-auto`

const CopyRight = tw.p`text-center text-gray-500 text-sm mt-8`;