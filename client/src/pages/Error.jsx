import { useRouteError } from 'react-router-dom';
import '../App.css';


export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1 id="oops">Oops!</h1>
      <p id="sorry">Sorry, an unexpected error has occurred!</p>
      <p>
        <i id="error">{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

//xpert assistant said we need to use useLocation  

// import React from 'react';
// import { useLocation } from 'react-router-dom';

// export default function ErrorPage() {
//   const location = useLocation();

//   return (
//     <div id="error-page">
//       <h1 id="oops">Oops!</h1>
//       <p id="sorry">Sorry, an unexpected error has occurred.</p>
//       <p>
//         <i id="error">{location.state?.error || 'Unknown error'}</i>
//       </p>
//     </div>
//   );
// }
