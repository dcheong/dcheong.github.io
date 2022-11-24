import './App.css';
import ClipboardItem from './ClipboardItem.js';
import LinkItem from './LinkItem.js';
import Toaster from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          I'm working on it...
        </p>
        <ClipboardItem label="email" text="douglas.cheong@gmail.com"/>
        <LinkItem label="LinkedIn" link="https://www.linkedin.com/in/douglascheong/"/>
      </header>
      <Toaster />
    </div>
  );
}

export default App;
