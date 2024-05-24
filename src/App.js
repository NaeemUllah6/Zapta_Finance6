import './App.css';
import Stable_coin from './Components/Stable_coin';
import Buy from './Components/Buy&sell';
import Navbar from './Components/Navbar';
import Endless from './Components/Endless';
import Blackchain from './Components/Blockchain';
import Security from './Components/Security';
import Waitlist from './Components/Waitlist';
import Kena from './Components/Kena';
import Managment from './Components/Managment';
import Footer from './Components/Footer';


function App() {
  return (
    <>
  <Navbar></Navbar>
  <Endless></Endless>  
  <Stable_coin></Stable_coin>
  <Buy></Buy> 
  <Blackchain></Blackchain>
  <Security></Security>
  <Kena></Kena>
  <Waitlist></Waitlist>
  <Managment></Managment>
  <Footer></Footer>
  </>
  );
}
export default App;
