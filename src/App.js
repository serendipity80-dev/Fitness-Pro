import React from 'react';
import{BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './screen/Banner';
// import HomeSrceen from './screens/HomeSrceen';
// import ProductScreen from './screens/ProductScreen';


const App = () => {
  return (
   <Router>
     <Header/>
<Banner/>
     <main className='py-3'>
       <Container>
         <Routes>
     {/* <Route path='/' element={<HomeSrceen/>} />
     <Route path='/product/:id' element={<ProductScreen />} /> */}
     </Routes>
     </Container>
    </main>

    <Footer/>
    </Router>
  );
}

export default App;
