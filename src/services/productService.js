import axios from 'axios'
const baseUrl = 'https://bad-api-assignment.reaktor.com'
const productEndpoint = '/v2/products/'
const manufacturerEndpoint = '/v2/availability/'

const getAllProducts = (category) => {
    return axios.get(`${productEndpoint}${category}`)
}

const getManufacturerInfo = (manufacturer) => {
    return axios.get(`${manufacturerEndpoint}${manufacturer}`)
}

export default {
    getAllProducts: getAllProducts,
    getManufacturerInfo: getManufacturerInfo
}