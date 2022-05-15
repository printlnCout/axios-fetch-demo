import { fetchGET, fetchPOST, axiosGET, axiosPOST } from './api.js';

fetchGET()
  .then(data => data.text())
  .then(res => console.log('fetch: ', res));

fetchPOST()
  //返回的data是Response类型，调用它上面的json方法返回Promise，解决值为json类型
  .then(data => data.json()) 
  .then(res => console.log('fetch: ', res));

axiosGET().then(res => console.log('axios: ', res.data));
  
axiosPOST().then(res => console.log('axios: ', res.data));