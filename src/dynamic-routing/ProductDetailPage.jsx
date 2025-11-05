import { FaBox } from "react-icons/fa";

import React from 'react'

import { useParams } from 'react-router-dom'

const ProductDetailPage = () => {

    const { id } = useParams();
    return (
        <div>
            <h2> <FaBox />Product id : {id}</h2>
        </div>
    )
}

export default ProductDetailPage
