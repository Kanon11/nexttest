import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";
import Link from "next/link";
import style from '../styles/Home.module.css'

const Home = () => {
  return (
    <>
      <Head>
        <title>Blogs | Home</title>
        <meta name="keywords" content="blogs" />
      </Head>
      <h1 className={style.title}>Homepage</h1>
      <p className={style.text}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
        deserunt, soluta possimus cupiditate, debitis maiores quibusdam,
        accusamus atque iste quod tempora. Quo voluptas molestias a? In magni
        eius molestiae consectetur.
      </p>
      <p className={style.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis officia
        aspernatur maiores odio, molestiae temporibus libero dolore minima
        consequatur, ea aperiam voluptates minus maxime veritatis quam sed.
        Facilis, fuga totam.
      </p>
      <Link href="/blogs" legacyBehavior>
        <a className={style.btn}>See all Blogers</a>
      </Link>
    </>
  );
};

export default Home;
