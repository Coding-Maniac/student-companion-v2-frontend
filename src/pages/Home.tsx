import React, { FC } from 'react';
import { AppLoadingWrapper } from 'components';

interface homeProps {
  isLoading: boolean;
}

const AttendanceDisplayCard = () => (
  <div className="attendance-card card bg-danger text-white">
    <div className="card-body">
      <h5 className="fw-bolder">Software Engineering</h5>
      <p>
        Attend the Next
        <span className="number_circle">2</span>
        classes to be safe
      </p>
    </div>
  </div>
);

const Home: FC<homeProps> = ({ isLoading = true }) => (
  <AppLoadingWrapper isLoading={isLoading}>
    <div className="home container py-5">
      <div className="row">
        <div className="col-md-4">
          <AttendanceDisplayCard />
        </div>
      </div>
    </div>
  </AppLoadingWrapper>
);
export default Home;
