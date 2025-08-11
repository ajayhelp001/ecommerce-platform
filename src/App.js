import { BrowserRouter, Route, Routes } from 'react-router';
import IndexPage from './pages/IndexPage';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Provider } from 'react-redux';
import { store } from './ProductStore/store';
import Product from './pages/Product';
import SingleProduct from './pages/SingleProduct';

function App() {
  return (
      <>
      <Provider store={store}>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path='/' element={<IndexPage/> }/>
            <Route path='/product' element={<Product/>}/>
            <Route path='/product/:name' element={<SingleProduct/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </Provider>
      </>
  );
}

export default App;
