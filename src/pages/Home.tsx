import React, { FC, useEffect } from 'react';
import { AppLoadingWrapper, AppNavbar } from 'components';
import { useHistory, useLocation } from 'react-router-dom';

interface homeProps {
  isLoading: boolean;
}

interface AttendanceDisplayProps {
  bgColor: 'success' | 'danger';
  subjectName: string;
  totalClasses: number;
  attendedClasses: number;
  percentage: number;
}

const AttendanceDisplayCard: FC<AttendanceDisplayProps> = ({
  bgColor = 'success',
  subjectName,
  totalClasses,
  attendedClasses,
  percentage,
}) => (
  <div className={`attendance-card card bg-${bgColor} mb-4 text-white`}>
    <div className="card-body">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h5 className="fw-bolder subject_name">{subjectName}</h5>
          <p>
            Total Classes
            <span className="number_circle">{totalClasses}</span>
          </p>
          <p>
            Attended Classes
            <span className="number_circle">{attendedClasses}</span>
          </p>
        </div>
        <div>
          <div className={`progress-circle ${percentage > 50 ? 'over50' : ''} p${percentage}`}>
            <span>{percentage}</span>
            <div className="left-half-clipper">
              <div className="first50-bar" />
              <div className="value-bar" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Home: FC<homeProps> = ({ isLoading = false }) => {
  const location: any = useLocation();
  const history = useHistory();
  useEffect(() => {
    const attendanceData = location.state;
    if (!attendanceData) {
      history.push('/');
    }
  }, []);
  const attendanceData = location.state;
  const attendanceCardData: any = [];
  for (let i = 0; i < Object.keys(attendanceData || {}).length; i += 1) {
    const subjectName = Object.keys(attendanceData)[i];
    const subjectValues = attendanceData[subjectName];
    const bgColor = subjectValues.attendancePercentage > 75 ? 'success' : 'danger';
    attendanceCardData.push({
      bgColor,
      subjectName,
      totalClasses: subjectValues.totalHours,
      attendedClasses: subjectValues.totalHoursPresent,
      percentage: Math.floor(subjectValues.attendancePercentage),
    });
  }
  return (
    <AppLoadingWrapper isLoading={isLoading}>
      <AppNavbar />
      <div className="home container py-5">
        <div className="row">
          {(attendanceCardData || []).map((data: any) => (
            <div className="col-md-6">
              <AttendanceDisplayCard
                bgColor={data.bgColor}
                subjectName={data.subjectName}
                totalClasses={data.totalClasses}
                attendedClasses={data.attendedClasses}
                percentage={data.percentage}
              />
            </div>
          ))}
        </div>
      </div>
    </AppLoadingWrapper>
  );
};
export default Home;
