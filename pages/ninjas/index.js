import styles from '../../styles/ninjas.module.css';
import Head from 'next/head';
import Link from 'next/link';

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  console.log(data);
  return {
    props: { ninjas: data },
  };
};

function Ninjas({ ninjas }) {
  return (
    <>
      <Head>
        <title>Ninja List | Ninjas</title>
        <meta name="keywords" content="about" />
      </Head>
      <div>
        <h1>All Ninjas (Click for more info)</h1>

        {ninjas.map((ninja) => (
          <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
            <a className={styles.single}>
              <h3>{ninja.name}</h3>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Ninjas;
