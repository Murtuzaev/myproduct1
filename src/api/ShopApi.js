import axios from "axios"
import { BASE } from "./BaseConfig"

const ShopApi = {
    getProducts : async function() {
         const {data} = await axios.get(`${BASE}products`)
         return data
    },
    getProductSingle : async function(id) {
        const {data} = await axios.get(`${BASE}products/${id}`)
    }

}
export default ShopApi;