import axios from 'axios';
const axiosClient = axios.create({
   baseURL: 'https://api.ezfrontend.com/',
   headers: {
      'Content-Type': 'application/json',
   },
});

// Add a request interceptor
axiosClient.interceptors.request.use(
   function (config) {
      // Do something before request is sent
      return config;
   },
   function (error) {
      // Do something with request error
      return Promise.reject(error);
   }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
   function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response.data;
   },
   function (error) {
      const { config, response } = error;
      const urls = ['/auth/local/register', '/auth/local'];
      console.log('error infor', error);
      if (urls.includes(config.url) && response.status === 400) {
         console.log(response.data.message[0].messages[0].message);
         const messageContainer = response.data.message.length > 0 ? response.data.message[0] : [];
         const messages = messageContainer.messages.length > 0 ? messageContainer.messages[0] : {};
         const message = messages?.message || 'invalid message';
         throw new Error(message);
      }
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
   }
);

export default axiosClient;
