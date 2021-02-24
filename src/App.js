import React, {useState, useEffect, useCallback} from 'react'
import './App.css';
import Categories from "./components/Categories";
import productService from "./services/productService"
import ProductsController from "./components/ProductsController";

function App() {

    const [ products, setProducts ] = useState([])
    const [manufacturers, setManufactorers ] = useState([])
    const [ dataReceived, setDataReceived] = useState(false)
    const [category, setCategory] = useState('')

    const changeCategory = (categoryName) => {
        setCategory(categoryName)
        productService
            .getAllProducts(categoryName)
            .then(response => {
                let manufacturersArray = []
                response.data.map(item => {
                    if (!manufacturersArray.includes(item.manufacturer)) {
                        manufacturersArray = manufacturersArray.concat(item.manufacturer)
                    }
                })
                setManufactorers(manufacturersArray)
                setDataReceived(true)
                setProducts(response.data)

            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="App">
            <Categories changeCategory={changeCategory}/>
            {category !== '' && <div>Current category: {category}</div>}
            <ProductsController products={products} manufacturers={manufacturers} dataReceived={dataReceived}/>
        </div>
    );
}

export default App;
