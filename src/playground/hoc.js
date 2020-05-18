import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => {
  const { info } = props;
  return (
    <div>
      <h1>Info</h1>
      <p>This is is info: {info}</p>
    </div>
  );
};

const withAdminInfo = (WrappedComponent) => {
  return (props) => {
    const { isAdmin } = props;
    return (
      <div>
        {isAdmin && <p>This is admin only info.</p>}
        <WrappedComponent {...props} />
      </div>
    );
  };
};

const AdminInfo = withAdminInfo(Info);

const requireAuthentication = (WrappedComponent) => {
  return (props) => {
    const { isAuthenticated } = props;
    return (
      <div>
        {isAuthenticated ? (
          <WrappedComponent {...props} />
        ) : (
          <p>Please login to view</p>
        )}
      </div>
    );
  };
};

const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(
//   <AdminInfo isAdmin={true} info="ok" />,
//   document.getElementById('app')
// );

ReactDOM.render(
  <AuthInfo isAuthenticated={true} info="ok" />,
  document.getElementById('app')
);
