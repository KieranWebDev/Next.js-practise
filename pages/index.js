import Head from 'next/head';
import Link from 'next/link';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <h1>Homepage</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
        deserunt ratione aspernatur ab, laboriosam dignissimos voluptate placeat
        eos voluptatibus enim aliquid nostrum et minus vel eligendi ipsum
        repellat eum in?
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
        impedit vel, minus necessitatibus accusamus laudantium placeat maiores
        aperiam esse fuga vero ipsa quidem? Veniam voluptatibus quisquam
        voluptates sint, facilis vitae?
      </p>
      <Link href="ninjas">
        <a>See Ninja Listings</a>
      </Link>
    </div>
  );
}