import React, { useState, useEffect } from 'react'
import productService from "../services/productService";
import Product from "./Product";
import "./productsController.css"


const ProductsController = (props) => {
    const [receivedValues, setReceivedValues] = useState([])
    const [availabilityMap, setAvailabilityMap] = useState(new Map())

    if(props.dataReceived === true) {
        props.manufacturers.forEach(manufacturer => {
            productService
                .getManufacturerInfo(manufacturer)
                .then(response => {
                    if(response.data.response !== "[]") {
                        if(receivedValues.includes(manufacturer) === false) {
                            setReceivedValues(receivedValues.concat(manufacturer))
                            response.data.response.map(item => {
                                const status = item.DATAPAYLOAD.toString().split(/INSTOCKVALUE/)[1]
                                setAvailabilityMap(availabilityMap.set(item.id.toString().toLowerCase(), status.substring(1, status.length - 2).toLowerCase()))
                            })
                        }
                    }
                })
                .catch(error => {
                    console.log(error)
                })
        })
    }

    return(
        <div className="productsContainer">
            {props.products.map(product => <Product key={product.id} productInfo={product} availability={availabilityMap.get(product.id)}/>)}
        </div>
    )
}

export default ProductsController