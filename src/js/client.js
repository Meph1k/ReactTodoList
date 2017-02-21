import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Layout from "./components/Layout";
import store from "./store";

const app = document.getElementById('app');
ReactDOM.render(<Provider store={store}>
    <Layout />
</Provider>, app);
