export const fetchGETConfig = {
  method: 'GET',
  mode: 'cors',
};

export const paramsBody = {
  name: 'jake',
  age: 26,
};

export const fetchPOSTConfig = {
  method: 'POST',
  body: JSON.stringify(paramsBody),
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json',
  },
};
 
export const axiosGETConfig = {
  method: 'GET',
  url: '/book/23?name=jake',
};

export const axiosPOSTConfig = {
  method: 'post',
  url: '/name/23?name=jake',
  params: {
    ID: 12345
  },
  data: {
    name: 'jake'
  },
};