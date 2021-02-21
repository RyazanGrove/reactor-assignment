import React, {useState, useEffect, useCallback} from 'react'
import './App.css';
import Categories from "./components/Categories";
import productService from "./services/productService"
import ProductsController from "./components/ProductsController";

function App() {

    const [ products, setProducts ] = useState([])
    const [manufacturers, setManufactorers ] = useState([])
    const [manufacturersData, setManufacturersData] = useState({})
    const [ dataReceived, setDataReceived] = useState(false)

    useEffect(() => {
        productService
            .getAllProducts('gloves')
            .then(response => {
                let manufacturersArray = []
                response.data.map(item => {
                    if(!manufacturersArray.includes(item.manufacturer)){
                        manufacturersArray = manufacturersArray.concat(item.manufacturer)
                    }
                })
                setManufactorers(manufacturersArray)
                setDataReceived(true)
                setProducts(response.data)

            })
    }, [])


    return (
        <div className="App">
            <Categories/>
            <ProductsController products={products} manufacturers={manufacturers} dataReceived={dataReceived}/>
        </div>
    );
}

export default App;
