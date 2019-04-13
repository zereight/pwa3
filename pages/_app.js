import App, {Container} from "next/app";
import React from "react";
import Header from "../components/Header";

export default class MyApp extends App { //not extneds Component

    // _app.js is primary page

    render(){
        const {Component} = this.props;
        return (
            <Container>
                <Header/>
                <Component/>
            </Container>
        );
    }

}