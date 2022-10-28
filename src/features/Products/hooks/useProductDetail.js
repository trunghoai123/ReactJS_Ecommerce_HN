import productApi from 'api/productApi';
import { useEffect, useState } from 'react';

const useProductDetail = (productId) => {
   const [product, setProduct] = useState([]);
   const [isLoading, setIsLoading] = useState(true);
   useEffect(() => {
      (async () => {
         try {
            setIsLoading(true);
            const resProduct = await productApi.get(productId);
            setProduct(resProduct);
         } catch (error) {
            console.log('error when fetching in UseProductDetail Hook');
         }
      })();
      setIsLoading(false);
   }, [productId]);
   return {
      product,
      isLoading,
   };
};

export default useProductDetail;
