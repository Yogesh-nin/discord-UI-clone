import './App.css';
import Home from './components/Home/Home';
import bg_image from './images/login_bg.png'
function App() {
  return (

  <div style={{ backgroundImage: `url(${bg_image})`}}>
    <Home />
  </div>
      
  );
}

export default App;
