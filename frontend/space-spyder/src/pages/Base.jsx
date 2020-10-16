import React, {useContext} from 'react';
import Header from "../components/Header/Header";
import Loader from "../components/Loader/Loader";
import Footer from "../components/Footer";
import ModalLogin from "../components/ModalLogin";
import {AppContext} from "../App";


const Base = props => {

    const app_context = useContext(AppContext);

    return (
        <>
            {
                app_context.state.isLoading ? <Loader/> :
                    (
                        <main className={`${props.singleContent ? "cs-page-wrapper d-flex flex-column" : ""}`}>
                            <ModalLogin/>
                            <Header light={props.light} contact={props.contact} navbar={props.navbar}/>
                            {props.children}
                            {props.footer ? <Footer/> : null}
                        </main>
                    )
            }
        </>
    )
}


export default Base;