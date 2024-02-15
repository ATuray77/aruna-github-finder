import {BrowserRouter as Router, Route} from 'react-router-dom'// for links 
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';


function App() {
  return (
    <Router>
     <div className="flex flex-col justify-between h-screen">
     <Navbar />
    

     <main>
     <Footer />
     </main>
     </div>
    </Router>
  );
}

export default App;
