import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <div className="error">
      <h1>Oops !!!</h1>
      <h2>Something went wrong with this page</h2>
      <h3>
        {error.status}:{error.statusText}
      </h3>
      <p>More Info: {error.data}</p>
    </div>
  );
};

export default Error;
