import { useFetch } from "./hooks/useFetch";

export const MultipleCustomHooks = () => {
  const { data, isLoading, hasError } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return (
    <div className="bg-white border rounded p-5 my-5">
      <h2>Multiple Custom Hooks</h2>
      <hr />
    </div>
  );
};
