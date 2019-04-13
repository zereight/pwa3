import Header from "../components/Header";
import Head from "next/head";

import {withRouter} from "next/router";
import Axios from "axios";

export default  withRouter( class extends React.Component { 
    // when you using react class,
    // you can console.log() and you can see props's property!!
    // Why do we use withRouter? Because "url" method will not be supported!
    // So getInitialProps is used for fetching API!

    static async getInitialProps(ctx){
        //console.log(ctx);
        const movie = await Axios.get(`https://yts.am/api/v2/movie_details.json?movie_id=${ctx.query.id}`);
        
        return {
            movie: movie.data.data.movie
        }
    }

    render(){
        console.log(this.props.movie);
        const movie = this.props.movie;
        return (
            <div>
                <Head>
                    <title>{movie.title} | myStore</title>
                </Head>
                <div>
                    <h1>{movie.title}</h1>
                    <p>{movie.description_full}</p>
                </div>
            </div>
            );
    }
}

)