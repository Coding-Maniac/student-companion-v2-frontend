import { FC } from 'react';
import { LoginRightSide, LoginLeftSide } from 'components';

const Login: FC<{}> = () => (
  <div className="app_login_page">
    <LoginLeftSide />
    <LoginRightSide />
  </div>
);

export default Login;
