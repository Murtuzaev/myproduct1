import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import MyRoutes from './config/MyRoutes';

function App() {
  return (
    <>
   <BrowserRouter>
   <Header/>
   <MyRoutes/>
   <Footer/>
   </BrowserRouter>
    </>
  );
}

export default App;
