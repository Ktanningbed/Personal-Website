import './App.css';
import About from './components/about/About';
import Experiences from './components/experiences/Experiences';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Projects from './components/projects/Projects';
import Showcase from './components/Showcase';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Showcase/>
        
      </header>
      <div className='content'>
        <About/>
        <Experiences/>
        <Projects/>
        
      </div>
      <Footer/>
    </div>
  );
}

export default App;
