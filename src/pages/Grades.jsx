import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { triggerSimpleAjax } from '../appConfig/helper';
import { AppLoadingWrapper, AppNavbar } from '../components';
import { GRADES_COUNT } from '../common/ApiUrl';

const getDataForGrades = (setGrades, setLoading, history) => {
  const rollNumber = localStorage.getItem('rollNumber');
  const password = localStorage.getItem('password');
  if (rollNumber && password) {
    triggerSimpleAjax(GRADES_COUNT, 'POST', {
      rollNumber: '18113075',
      password: '123456',
    })
      .then((res) => res.json())
      .then((res) => {
        setGrades(res);
        setLoading(false);
      });
  } else {
    history.push('/');
  }
};

const Grades = () => {
  const history = useHistory();
  const [gradesCount, setGrades] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getDataForGrades(setGrades, setLoading, history);
  }, []);

  return (
    <AppLoadingWrapper isLoading={isLoading}>
      <AppNavbar />
      <div className="container">
        <h5>Total Grade Count from Semester 1 to 8</h5>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Grade</th>
              <th scope="col">Count</th>
            </tr>
          </thead>

          <tbody>
            {Object.keys(gradesCount).map((ele) => (
              <tr>
                <th scope="row">{ele}</th>

                <td> {gradesCount[ele]} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AppLoadingWrapper>
  );
};

export default Grades;
