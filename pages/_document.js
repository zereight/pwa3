import Document , {Head, Main, NextScript} from "next/document";

export default class MyDocument extends Document {
    render () {
        return (
            <html>
                <Head>
                    <title>my Store</title>
                    <meta name= "Zereight" content={"KDH"}/>
                    <link href="/static/styles.css" rel={"stylesheet"} />
                </Head>

                <body>
                    <Main/>
                    <NextScript/>

                </body>

            </html>
        );
    }
};