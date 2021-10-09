import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { PieChart } from 'react-minimal-pie-chart';
import { triggerSimpleAjax } from '../appConfig/helper';
import { AppLoadingWrapper, AppNavbar } from '../components';
import { GRADES_COUNT } from '../common/ApiUrl';

const getDataForGrades = (setGrades, setLoading, history) => {
  const rollNumber = localStorage.getItem('rollNumber');
  const password = localStorage.getItem('password');
  if (rollNumber && password) {
    triggerSimpleAjax(GRADES_COUNT, 'POST', {
      rollNumber,
      password,
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
  const colorCode = {
    S: '#4C5747',
    A: '#A87795',
    B: '#5C6C89',
    C: '#BB8F81',
    D: '#631879',
    F: '#2E8273',
    '-': '#9BA670',
  };
  const gradesForPie = Object.keys(gradesCount).map((grade, index) => ({
    title: grade,
    value: gradesCount[grade],
    color: colorCode[grade],
    label: 'hi',
  }));
  const [selected, setSelected] = useState(0);
  const [hovered, setHovered] = useState(undefined);
  const data = gradesForPie.map((entry, i) => {
    if (hovered === i) {
      return {
        ...entry,
        color: 'grey',
      };
    }
    return entry;
  });

  const lineWidth = 60;
  return (
    <AppLoadingWrapper isLoading={isLoading}>
      <AppNavbar />
      <div className="container d-flex justify-content-around">
        <div>
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
        <div>
          <h6>Diagramatic Representation Of Grades</h6>
          <PieChart
            style={{
              fontFamily: '"Nunito Sans", -apple-system, Helvetica, Arial, sans-serif',
              height: '300px',
              fontSize: '6px',
            }}
            data={gradesForPie}
            radius={PieChart.defaultProps.radius - 6}
            lineWidth={60}
            segmentsStyle={{ transition: 'stroke .3s', cursor: 'pointer' }}
            segmentsShift={(index) => (index === selected ? 6 : 1)}
            animate
            label={({ dataEntry }) => `${Math.round(dataEntry.percentage)}%`}
            labelPosition={100 - lineWidth / 2}
            labelStyle={{
              fill: '#fff',
              opacity: 0.75,
              pointerEvents: 'none',
              fontSize: '6px',
            }}
            onClick={(_, index) => {
              setSelected(index === selected ? undefined : index);
            }}
            onMouseOver={(_, index) => {
              setHovered(index);
            }}
            onMouseOut={() => {
              setHovered(undefined);
            }}
          />
        </div>
      </div>
    </AppLoadingWrapper>
  );
};

export default Grades;
