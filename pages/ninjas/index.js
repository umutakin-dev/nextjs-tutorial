import Link from 'next/link';
import styles from '../../styles/Ninjas.module.css';

export const getStaticProps = async () => {
    const uri = "https://jsonplaceholder.typicode.com/users";
    const res = await fetch(uri);

    const data = await res.json();

    return {
        props: { ninjas: data },
    };
};

//const Ninjas = (props) => {
const Ninjas = ({ ninjas }) => {
    return (
        <div>
            <h1>All Ninjas</h1>
            {ninjas.map((ninja) => (
                <Link href={ '/ninjas/' + ninja.id } key={ninja.id}>
                    <a className={styles.single}>
                        <h3>{ninja.name}</h3>
                    </a>
                </Link>
            ))}
        </div>
    );
};

export default Ninjas;
