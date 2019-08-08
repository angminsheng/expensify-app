// Higher order component (HOC) - A component that render another component

//Reuse code
//Perform render hijacking
//Prop manipulation
//Extract state

import React from "react";

const Info = props => (
  <div>
    <h1>info</h1>
    <p>The info is : {props.info}</p>
  </div>
);

const withAdminWarning = WrappedComponent => {
  return props => (
    <div>
      {props.isAdmin && <p>This is private info please don't share</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

//requireAuthentication

const requireAuthentication = WrappedComponent => {
  return props => (
    <div>
      {props.isAuthenticated ? (
        <div>You are logged in</div>
      ) : (
        <div>Please login to view</div>
      )}
      {props.isAuthenticated && <WrappedComponent {...props} />}
    </div>
  );
};

export const AuthInfo = requireAuthentication(Info);

export const AdminInfo = withAdminWarning(Info);
