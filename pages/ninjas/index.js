import styles from '../../styles/ninjas.module.css';
import Head from 'next/head';

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
        <h1>All Ninjas</h1>

        {ninjas.map((ninja) => (
          <div key={ninja.id}>
            <a className={styles.single}>
              <h3>{ninja.name}</h3>
            </a>
          </div>
        ))}
      </div>
    </>
  );
}

export default Ninjas;
