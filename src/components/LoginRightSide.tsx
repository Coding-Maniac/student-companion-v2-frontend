import { FC } from 'react';

const LoginRightSide: FC<{}> = () => (
  <div className="app_login_right_side">
    <h1 className="login_heading">Welcome to Scholar Buddy</h1>
    <form className="app_login_form">
      <div>
        <label htmlFor="rollNumber" className="form-label">
          <p>Roll Number</p>
          <input id="rollNumber" className="form-control" type="number" placeholder="Enter your roll number" />
        </label>
      </div>
      <div>
        <label htmlFor="password" className="form-label">
          <p>Password</p>
          <input id="password" className="form-control" type="password" placeholder="Enter your password" />
        </label>
      </div>
    </form>
  </div>
);

export default LoginRightSide;
