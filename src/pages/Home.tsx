import React, { FC } from 'react';

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

const AppLoadingWrapper: FC<homeProps> = ({ isLoading, children }) => (
  <div>
    {isLoading ? (
      <div className="app_loader">
        <div className="spinner-grow text-dark" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    ) : (
      children
    )}
  </div>
);

const Home: FC<homeProps> = ({ isLoading = false }) => (
  <AppLoadingWrapper isLoading={isLoading}>
    <div className="home container my-5">
      <div className="row">
        <div className="col-md-4">
          <AttendanceDisplayCard />
        </div>
      </div>
    </div>
  </AppLoadingWrapper>
);
export default Home;
