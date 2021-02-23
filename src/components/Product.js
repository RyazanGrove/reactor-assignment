import React from 'react'
import './product.css'

const Product = (props) => {
    return(
        <div className="productFrame">
            <div className="productName">{props.productInfo.name}</div>
            <div className="productManufacturer">manufacturer: {props.productInfo.manufacturer}</div>
            <div className="priceAndTypeContainer">
                <div className="productPrice">
                    Price: <br/><div className="price">{props.productInfo.price}</div>
                </div>
                <div className="productType">
                    Type: <br/>{props.productInfo.type}
                </div>
            </div>
            <div className="colorContainer">
                Colors: {props.productInfo.color.map(color => <div className="colorItem" style={{'background-color': `${color}`}}></div>)}
            </div>

            Availability:<br/>
            {props.availability === undefined && <div>Waiting for the information</div>}
            {props.availability === "instock" && <div className="available">In stock</div>}
            {props.availability === "outofstock" && <div className="notAvailable">Out of stock</div>}
            {props.availability === "lessthan10" && <div className="notMany">Less than 10</div>}

        </div>
    )
}

export default Product