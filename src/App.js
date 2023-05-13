
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/header';
import BackgroundSlider from './Components/backgroundslider';
import CardComponent from './Components/cardComponent';
import Footer from './Components/footer';
import About from './Components/about';
import Contact from './Components/contact';
import Home from './Components/home';
import BlogPost from './Components/blogPost';
import BlogList from './Components/blog-listcomponent';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from 'react-router-dom';

function App() {
  return (
   
    <div className="App">
      
    <Routes>
    <Route exact path='/' element={<Home />}></Route>
    <Route exact path='/about' element={< About />}></Route>
    <Route exact path='/contact' element={< Contact />}></Route>
    {/* <Route exact path='/blogpost' element={< BlogPost />}></Route> */}
    <Route exact path="/display-blog/:id" element={<BlogPost/>}></Route>
    </Routes>
    </div>
   
  );
}

export default App;
