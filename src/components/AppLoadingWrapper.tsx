import React, { FC } from 'react';

interface LoadingProps {
  isLoading: boolean;
}

const AppLoadingWrapper: FC<LoadingProps> = ({ isLoading, children }) => (
  <div>
    {isLoading ? (
      <div className="app_loadable_wrapper_1">
        <div className="overlay">
          <div className="app_loader_1">
            <div className="spinner-grow text-dark" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
        {children}
      </div>
    ) : (
      children
    )}
  </div>
);

export default AppLoadingWrapper;
