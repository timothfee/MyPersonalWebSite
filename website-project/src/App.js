import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <Header>Hello world!</Header>
    </div>
  );
}

export default App;

const Header = tw.h1`text-4xl text-blue-500`;
