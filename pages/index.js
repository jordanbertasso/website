import Head from "next/head";
import Layout from "../components/layout";

export default function Home() {
    const siteTitle = "Jordan Bertasso";

    return (
        <Layout>
            <Head>
                <link rel="icon" href="/images/favicon.ico" />
                <meta name="description" content="Jordan Bertasso's website" />
                <meta property="og:image" content="/images/profile.jpg" />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
                <title>{siteTitle}</title>
            </Head>
        </Layout>
    );
}
