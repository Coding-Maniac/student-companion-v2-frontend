import React, { useState } from 'react';
import { AppNavbar } from '../components';

const Internals = () => {
  const [internal1, setInternal1] = useState('');
  const [internal2, setInternal2] = useState('');

  const handleInternalChange = (event) => {
    setInternal1(event.target.value);
    if (event.target.value) {
      setInternal2(30 - event.target.value);
    }
  };

  return (
    <>
      <AppNavbar />
      <div className="container text-center mt-5 pt-5">
        <div className="row align-items-center">
          <label htmlFor="internal1" className="col-form-label">
            Enter Your First Internal mark (out of 30)
            <input
              type="number"
              name="internal1"
              id="internal1"
              value={internal1}
              onChange={handleInternalChange}
              className="ms-5"
            />
          </label>
          <label htmlFor="internal2" className="col-form-label">
            This is the required mark in internal2(out of 30)
            <input type="text" name="internal2" id="internal2" value={internal2} className="ms-5" />
          </label>
        </div>
        <p>
          ** According to R2018 regulation each student must get atleast of 50% marks with 2 internals combined to be
          exempted from RC category
        </p>
      </div>
    </>
  );
};

export default Internals;
