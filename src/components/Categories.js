import React from 'react'
import Category from "./Category";
import "./categories.css"

const Categories = (props) => {

    return(
        <div className="buttonsContainer">
            <Category categoryName={'Gloves'} changeCategory={props.changeCategory}/>
            <Category categoryName={'Facemasks'} changeCategory={props.changeCategory}/>
            <Category categoryName={'Beanies'} changeCategory={props.changeCategory}/>
        </div>
    )
}

export default Categories