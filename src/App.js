
import './App.css';
import Crousal from './components/Crousal';
import Crousal2 from './components/Crousal2';
import Navbar from './components/Navbar';
import Video from './components/Video';
import Page3 from './components/Page3';
import Page4 from './components/Page4';
import Page5 from './components/Page5';
import Footer from './components/Footer';


function App() {
  return (
    <div className="flex flex-col">
    <Navbar/>
    <Video/>
    <Crousal/>
    <Page3/>
    <Page4/>
    <Crousal2/>
    <Page5/>
    <Footer/>
    </div>
  );
}

export default App;
