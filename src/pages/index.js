// export async function getServerSideProps() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/todos");
//   const data = await res.json();

//   return {
//     props: {
//       todos: data,
//     },
//   };
// }

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();

  return {
    props: {
      todos: data,
    },
    revalidate: 10,
  };
}

export default function Home({ todos }) {
  return (
    <>
      {todos?.length === 0 ? (
        <div>Loading...</div>
      ) : (
        todos?.map((todo) => (
          <div key={todo.id}>
            <p>
              {todo.id}: {todo.title}
            </p>
          </div>
        ))
      )}
    </>
  );
}
