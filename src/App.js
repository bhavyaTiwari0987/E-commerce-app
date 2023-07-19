import Home from './pages/Home';
import Cart from './pages/Cart';
import Header from './components/Header';
import Footer from './components/Footer';
import Product from './components/ProductDetails';
import { productData } from './api/Api';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration
} from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <Header/>
      <ScrollRestoration/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path:"/",
        element: <Home/>,
        loader: productData
      },
      {
        path:"/cart",
        element: <Cart/>,
      },
      {
        path: "/product/:id",
        element: <Product/>
      }
    ]
  }
])

function App() {
  return (
    <div className="font-bodyFont">
     <RouterProvider router={router}/>
    </div>
  );
}

export default App;
