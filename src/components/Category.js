import React from 'react'

const Category = (props) => {
    const changeCategory= () => {
        props.changeCategory(props.categoryName.toLowerCase())
    }
    return(
        <div>
            <button onClick={changeCategory} type="button" class="btn btn-outline-secondary">{props.categoryName}</button>
        </div>
    )
}

export default Category