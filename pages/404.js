import Link from 'next/link';

function NotFound() {
  return (
    <div className="not-found">
      <h1>Oooopsss.</h1>
      <h2>Can't find that page mate.</h2>
      <p>
        Go back to the
        <Link href="/">
          <a>Home Page</a>
        </Link>
      </p>
    </div>
  );
}
export default NotFound;
