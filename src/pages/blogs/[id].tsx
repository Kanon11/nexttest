export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  const paths = data.map((bloger:any) => {
    return {
      params: { id: bloger.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async (context:any) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();
  return {
    props: { bloger: data },
  };
};

const Details = ({ bloger }:any) => {
  return (
    <>
          <h1>{bloger.name}</h1>
          <p>{bloger.email}</p>
          <p>{bloger.website}</p>
          <p>{bloger.address.city}</p>
    </>
  );
};

export default Details;
