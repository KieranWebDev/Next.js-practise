async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  const paths = data.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

function DetailsComponent() {
  return (
    <div>
      <h1>Details page</h1>
    </div>
  );
}
export default DetailsComponent;
