import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import PostLink from "../components/PostLink";
import Axios from "axios";


export default class extends React.Component{

    static async getInitialProps() {
        //when fetching, This code will be running on front-end & back-end
        // so, we can't use "fetch" like nomal method
        // we need to install axios, isomorphic, fetch

        const {data} = await Axios.get("https://yts.am/api/v2/list_movies.json");
       // console.log(data.data);

        return {
            movies: data.data.movies
        }

    }

    render(){
        //console.log(this.props.movies);
        const movies = this.props.movies;
        return (
            <div>
                <Head>
                    <title>Home | My Store</title>
                </Head>
                <h1>This is Main-Movie page.</h1>
                {
                    movies.map( movie => {
                        return ( <PostLink title={movie.title} id={movie.id} key={movie.id} /> )
                    } )
                }
            
            </div>
        );

    }

} 