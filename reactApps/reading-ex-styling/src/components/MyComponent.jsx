import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './MyComponent.css';

const MyComponent = () => {
  return (
    <>
    <div className="my-component">
      <h1>Jello, world!</h1>
      <p>This is a basic styling guide.</p>
    </div>
    <div className="container mt-5">
      <h1 className="display-4">Bootstrap, world!</h1>
      <p className="lead">This is a basic styling guide using Bootstrap.</p>
      <p className='lead'>This is only a test OKIE DOKIE?!</p>
      <button className="btn btn-primary">Click me</button>
    </div>
    </>
  );
};

export default MyComponent;