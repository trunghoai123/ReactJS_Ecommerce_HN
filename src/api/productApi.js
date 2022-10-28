import axiosClient from './axios/axiosClient';

const productApi = {
   async getAll(params) {
      // Transform _page to _start
      const newParams = { ...params };
      newParams._start =
         !params._page || params._page <= 1 ? 0 : (params._page - 1) * (params._limit || 50);
      // Remove un-needed key
      delete newParams._page;
      // Fetch product list + count
      const productList = await axiosClient.get('/products', { params: newParams });
      const count = await axiosClient.get('/products/count', { params: newParams });
      // Build response and return
      console.log(productList);
      return {
         data: productList,
         pagination: {
            page: params._page,
            limit: params._limit,
            total: count,
         },
      };
   },
   async get(productId) {
      const product = await axiosClient.get(`/products/${productId}`);
      return product;
   },
};
export default productApi;
