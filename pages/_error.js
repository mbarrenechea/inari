import React from 'react';
import { Link } from 'routes';

function Error() {
  return (
    <div className="c-page-error">
      <div className="container">
        <h1>404</h1>
        <p>This page could not be found</p>
        <Link route="home">
          <a
            className="c-button -a"
          >
            Go to Resource Watch
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Error;
