import api from ".";

const productsService = {
    getProducts: async () => {
        const response = (await api.get("/products/all/")).data
        return response;
    }
}

export default productsService;