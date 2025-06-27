import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Categories from './Components/Categories';
import PopularEvents from './Components/PopularEvents';
import SignIn from './Components/signin'; 
import Footerr from './Components/Footerr'; 
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
      </Routes>
    </Router>
  );
}

export default App;