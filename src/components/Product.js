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

            {props.availability}

        </div>
    )
}

export default Product