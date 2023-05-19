export const Post = ({ id, body, userId }) => {
  return (
    <blockquote className="blockquote  w-50 mx-auto">
      <p className="mb-5 text-center">
        <span className="fs-3 me-1">{id}</span>
        <span className="fst-italic">"{body}"</span>
      </p>
      <footer className="blockquote-footer text-end">User {userId}</footer>
    </blockquote>
  );
};
