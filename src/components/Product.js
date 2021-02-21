import React from 'react'

const Product = (props) => {
    return(
        <div>
            {props.productInfo.id}{props.productInfo.manufacturer}{props.productInfo.name}{props.productInfo.price}{props.productInfo.type}{props.productInfo.color}{props.availability}
        </div>
    )
}

export default Product