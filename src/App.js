// import logo from './logo.svg';
import './App.css';
import Header from './pages/Header';
import Netflexshow from './pages/Netflexshow';
import Home from './pages//Home/Home'
import movieList from './pages/movieList/movieList'
import {BrowserRouter as Router , Routes ,Route } from 'react-router-dom';

function App() {
  return (
     <div className='App'>
    <Router>
    <Header></Header>  
      <Routes>
        <Route index element={<Home></Home>} />
        <Route path="movie/:id" element={ <h1>movie detailes page</h1>} />
        <Route path="/movies/:type" element={<movieList></movieList>} />
        <Route path="/*" element={<h1>Error page</h1>} />
      </Routes>
    </Router>
     </div>
   
  );
}
export default App;
