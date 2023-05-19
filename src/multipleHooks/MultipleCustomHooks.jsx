import { useFetch, useCounter } from "../hooks";
import { LoadingMessage, Post } from "./";

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);

  const { data, isLoading } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${counter}`
  );
  const { id, body, userId } = !!data && data;

  return (
    <>
      <h2>Multiple Custom Hooks</h2>
      <hr />

      <button
        className="btn btn-primary"
        disabled={isLoading}
        onClick={increment}
      >
        Next post
      </button>

      {isLoading ? (
        <LoadingMessage />
      ) : (
        <Post id={id} body={body} userId={userId} />
      )}
    </>
  );
};
