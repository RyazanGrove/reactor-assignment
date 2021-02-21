import React, { useState, useEffect } from 'react'
import './App.css';
import Categories from "./components/Categories";
import productService from "./services/productService"
import Product from "./components/Product";

function App() {

    const [ products, setProducts ] = useState([])

    useEffect(() => {
        productService
            .getAllProducts('gloves')
            .then(response => {
                console.log(response.data)
                setProducts(response.data)
            })
    }, [])

    return (
        <div className="App">
            <Categories/>
            {products.map(product => <Product key={product.id} productInfo={product}/>)}
        </div>
    );
}

export default App;
