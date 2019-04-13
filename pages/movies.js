import Header from "../components/Header";
import Head from "next/head";

import {withRouter} from "next/router";

export default  withRouter( class extends React.Component { 
    // when you using react class,
    // you can console.log() and you can see props's property!!
    // Why do we use withRouter? Because "url" method will not be supported!

    render(){
        console.log(this.props)
        return (
            <div>
                <Head>
                    <title>{this.props.router.query.title} | myStore</title>
                </Head>
                <div>
                <h3>{this.props.router.query.title}</h3>
                </div>
            </div>
            );
    }
}

)