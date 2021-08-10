import { FC } from 'react';
import { ScholarBuddyWhiteLogo } from 'assets/images';

const LoginLeftSide: FC<{}> = () => (
  <div className="app_login_left_side">
    <div className="app_typing_text" />
    <p>Enhancing student&apos;s lives</p>
    <img src={ScholarBuddyWhiteLogo} alt="Scholar Buddy" />
  </div>
);

export default LoginLeftSide;
