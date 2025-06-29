import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import PopularEvents from './Components/PopularEvents';
import SignIn from './Components/signin';
import Footerr from './Components/Footerr';
import AboutUs from './Components/AboutUs';
import Signup from './Components/Signup';
import Changepass from './Components/Changepass'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <PopularEvents />
              <Footerr />
            </>
          }
        />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/changepass" element={<Changepass />} />

      </Routes>
    </Router>
  );
}

export default App;