import axios from 'axios'
const baseUrl = 'https://bad-api-assignment.reaktor.com'
const productEndpoint = '/v2/products/'

const getAllProducts = (category) => {
    return axios.get(`${productEndpoint}${category}`)
}

export default {
    getAllProducts: getAllProducts
}