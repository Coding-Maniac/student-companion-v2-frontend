import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { triggerSimpleAjax } from 'appConfig/helper';
import { useHistory } from 'react-router-dom';
import { AppLoadingWrapper } from './index';

const LoginRightSide: FC<{}> = () => {
  const [formValues, setFormValues] = useState({ rollNumber: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const history = useHistory();
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const reqBody = { rollNumber: formValues.rollNumber, password: formValues.password };
    triggerSimpleAjax('attendance', 'POST', reqBody)
      .then((response: any) => {
        if (response.status === 404) {
          setLoading(false);
          setError('Kindly check your Roll Number and password');
          return null;
        }
        return response.json();
      })
      .then((response) => {
        if (response === null) {
          return;
        }
        history.push('/home', response);
      })
      .catch(() => setLoading(false));
  };

  return (
    <div className="app_login_right_side">
      <AppLoadingWrapper isLoading={loading}>
        <h1 className="login_heading">Welcome to Scholar Buddy</h1>
        <p className="text-danger">{error}</p>
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
                required
              />
            </label>
          </div>
          <div>
            <label htmlFor="password" className="form-label">
              <p>Password</p>
              <input
                id="password"
                className="form-control"
                type="password"
                name="password"
                placeholder="Enter your password"
                onChange={handleChange}
                value={formValues.password}
                autoComplete="new-password"
              />
            </label>
          </div>
          <button className="btn btn-primary w-100" type="submit">
            Submit
          </button>
        </form>
      </AppLoadingWrapper>
    </div>
  );
};

export default LoginRightSide;
