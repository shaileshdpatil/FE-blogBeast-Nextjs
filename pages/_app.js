import {Provider} from "react-redux";
import {createWrapper} from "next-redux-wrapper";
import store from "../store";
import CustomNavbar from "../components/CustomNavbar";
import 'bootstrap/dist/css/bootstrap.css';
import '../scss/app.scss';
import React from "react";
import Head from "next/head";
import LabelBottomNavigation from "../components/BottomNavigation";

function MyApp({Component, pageProps}) {
    return (
        <Provider store={store}>
            <Head>
                <title>My Blog Site</title>
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <CustomNavbar/>
            <Component {...pageProps} />
            <LabelBottomNavigation/>
        </Provider>
    );
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);
