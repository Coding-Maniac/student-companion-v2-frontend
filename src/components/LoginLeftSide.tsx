import { FC } from 'react';
import { LeftBanner } from 'assets/images';

const LoginLeftSide: FC<{}> = () => (
  <div className="app_login_left_side">
    <img src={LeftBanner} alt="Scholar Buddy Landing" className="app_left_banner" />
  </div>
);

export default LoginLeftSide;
