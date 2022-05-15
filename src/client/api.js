import axios from 'axios';
import fetch from "node-fetch";
import { fetchGETConfig, fetchPOSTConfig, axiosGETConfig, axiosPOSTConfig } from './config.js';

export const fetchGET = () => fetch('http://127.0.0.1:3000/book/23?name=jake', fetchGETConfig);
export const fetchPOST = () => fetch('http://127.0.0.1:3000/name/23?name=jake', fetchPOSTConfig);

axios.defaults.baseURL = 'http://localhost:3000/';
axios.defaults.timeout = 1000;

export const axiosGET = () => axios(axiosGETConfig);
export const axiosPOST = () => axios(axiosPOSTConfig);