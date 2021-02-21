import React from 'react'
import Category from "./Category";

const Categories = (props) => {
    return(
        <div>
            <Category categoryName={'Gloves'}/>
            <Category categoryName={'Facemasks'}/>
            <Category categoryName={'Beanies'}/>
        </div>
    )
}

export default Categories