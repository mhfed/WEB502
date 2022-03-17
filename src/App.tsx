import { useEffect, useState } from 'react'
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import logo from './logo.svg'
import './App.css'
import ShowInfo from './components/ShowInfo'
import Product from './components/Product'
import { list, remove } from './api/product';
import axios from 'axios';
import type { IProduct } from './types/product';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import WebsiteLayout from './pages/layouts/WebsiteLayout';
import ProductPage from './pages/ProductPage';
import AdminLayout from './pages/layouts/AdminLayout';
import ProductManager from './pages/ProductManager';
import DashBoard from './pages/DashBoard';
import DetailProduct from './pages/DetailProduct';


function App() {
  const [count, setCount] = useState(0)
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const getProducts = async () => {
        const { data } = await list();
        setProducts(data);
    };
    getProducts();
  }, [])
  const removeItem = (id: number) => {
      // call api
      remove(id);

      // reRender
      setProducts(products.filter(item => item._id !== id));
  }
  return (
    <div className="App">

      {products.map(item => {
        return  <div>{item.name} <button onClick={() => removeItem(item._id)}>Remove</button></div>
      })}


        <header>
          <ul>
            <li>
              <NavLink to="/">Home Page</NavLink>
            </li>
            <li>
              <NavLink to="/product">Product Page</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<WebsiteLayout/>} >
                <Route index element={<HomePage/>}/>
                <Route path="product">
                  <Route element={<ProductPage/>} />
                  <Route path=":id" element={<DetailProduct/>} />
                </Route>
            </Route>
            <Route path="admin" element={<AdminLayout/>} >
                <Route index element={<Navigate to="dashboard" />}/>
                <Route path="dashboard" element={<DashBoard/>}/>
                <Route path="product" element={<ProductManager/>}/>
            </Route>
          </Routes>
        </main>
    </div>
  )
}

export default App

