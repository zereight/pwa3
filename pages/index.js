import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import PostLink from "../components/PostLink";


export default () => (
    <div>
        <Head>
            <title>Home | My Store</title>
            <Header/>
        </Head>

        <PostLink title={"something"} />

        <h1>This is main page.</h1>
        
    </div>
);