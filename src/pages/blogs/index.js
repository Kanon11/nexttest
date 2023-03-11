import Head from 'next/head'
import styles from '../../styles/Blogs.module.css'
import Link from 'next/link'

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);
    return {
        props: {
            blogs:data
        }
    }
}

const Blogs = ({blogs}) => {
    return (
        <>
            <Head>
                <title>Blogers | List</title>
                <meta name="keywords" content="blogs" />
            </Head>
            <div>
                <h1>All Blogers are here...</h1>
                {blogs.map(blog => (
                    <Link href={'/blogs/'+blog.id} key={blog.id} legacyBehavior>
                        <a className={styles.single}>
                            <h3>{ blog.name}</h3>
                        </a>
                    </Link>
                ))}
            </div>
        </>
    );
}

export default Blogs;