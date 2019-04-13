import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import PostLink from "../components/PostLink";


export default () => (
    <div>
        <Head>
            <title>Home | My Store</title>
        </Head>

        <PostLink title={"something"} id={0} />
        <PostLink title={"anything"} id={1} />

        <h1>This is main page.</h1>
        
    </div>
);