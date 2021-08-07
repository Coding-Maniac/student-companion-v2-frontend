import { ChangeEvent, FC, useState } from 'react';

const handleSubmit = () => {
  console.log('sumbit');
};

const LoginRightSide: FC<{}> = () => {
  const [formValues, setFormValues] = useState({
    rollNumber: '',
    password: '',
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="app_login_right_side">
      <h1 className="login_heading">Welcome to Scholar Buddy</h1>

      <form className="app_login_form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="rollNumber" className="form-label">
            <p>Roll Number</p>
            <input
              id="rollNumber"
              name="rollNumber"
              className="form-control"
              type="number"
              placeholder="Enter your roll number"
              value={formValues.rollNumber}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label htmlFor="password" className="form-label">
            <p>Password</p>
            <input id="password" className="form-control" type="password" placeholder="Enter your password" value={formValues.password} />
          </label>
        </div>
        <button className="btn btn-primary w-100" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginRightSide;
