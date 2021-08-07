import { FC, useRef, useEffect } from 'react';
import { ScholarBuddyWhiteLogo } from 'assets/images';
import Typed from 'typed.js';

const LoginLeftSide: FC<{}> = () => {
  const el = useRef<HTMLSpanElement | null>(null);
  const typed = useRef<any>(null);
  useEffect(() => {
    const options = {
      strings: ['Enhance Peace', 'In your', 'Student Life'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };
    if (el.current && typed.current) {
      typed.current = new Typed(el.current, options);
    }

    return () => {
      // typed.current.destroy();
    };
  }, []);

  return (
    <div className="app_login_left_side">
      <div className="app_typing_text">
        <span ref={el} />
      </div>
      <img src={ScholarBuddyWhiteLogo} alt="Scholar Buddy" />
    </div>
  );
};

export default LoginLeftSide;
