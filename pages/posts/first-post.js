import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";
import { Button } from "antd";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a></a>
        </Link>
      </h2>
    </Layout>
  );
}
