import { useRouteError } from 'react-router-dom';


export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1 id="oops">Oops!</h1>
      <p id="sorry">Sorry, an unexpected error has occurred.</p>
      <p>
        <i id="error">{error.statusText || error.message}</i>
      </p>
    </div>
  );
}