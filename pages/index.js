import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <div>
            <Navbar />
            <h1>Home Page</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                esse consequatur saepe molestias provident, itaque accusantium
                tempore illo mollitia non pariatur expedita est ducimus omnis
                reprehenderit, doloribus, aliquam assumenda ut?
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                esse consequatur saepe molestias provident, itaque accusantium
                tempore illo mollitia non pariatur expedita est ducimus omnis
                reprehenderit, doloribus, aliquam assumenda ut?
            </p>
            <Link href="/ninjas">
                <a>See Ninja Listing</a>
            </Link>s
            <Footer />
        </div>
    );
}
