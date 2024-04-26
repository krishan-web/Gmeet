import './App.css';
import Horizontal from './components/Horizontal/Horizontal';
import Navbar from './components/Navbar/Navbar';
import Event from './components/Event/Event'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Horizontal/>
      <Event/>
    </div>
  );
}

export default App;
