import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <div>
            <h1 className={ styles.title }>Home Page</h1>
            <p className={ styles.text }>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                esse consequatur saepe molestias provident, itaque accusantium
                tempore illo mollitia non pariatur expedita est ducimus omnis
                reprehenderit, doloribus, aliquam assumenda ut?
            </p>
            <p className={ styles.text }>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                esse consequatur saepe molestias provident, itaque accusantium
                tempore illo mollitia non pariatur expedita est ducimus omnis
                reprehenderit, doloribus, aliquam assumenda ut?
            </p>
            <Link href="/ninjas">
                <a className={ styles.btn}>See Ninja Listing</a>
            </Link>s
        </div>
    );
}
