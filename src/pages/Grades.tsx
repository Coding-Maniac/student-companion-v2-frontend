import React, { FC, useEffect, useMemo, useState } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import { triggerSimpleAjax } from '../appConfig/helper';
import { AppLoadingWrapper, AppNavbar } from '../components';
import { GRADES } from '../common/ApiUrl';

const gradesNumber = (response: any, setGrades: any) => {
  const totalGrades: any = {};

  if (response) {
    const { subjects } = response.semester1;

    Object.keys(subjects).map((subject: any) => {
      const { grade } = subjects[subject];
      if (Object.keys(totalGrades).includes(grade)) {
        totalGrades[grade] += 1;
      } else {
        totalGrades[grade] = 1;
      }
      return subject;
    });
  }
  setGrades(totalGrades);
  return totalGrades;
};

const getDataForGrades = (setGrades: any) => {
  triggerSimpleAjax(GRADES(1), 'POST', {
    rollNumber: '18113075',
    password: '123456',
  })
    .then((res: any) => res.json())
    .then((res) => gradesNumber(res[0], setGrades));
};

const Grades: FC<{}> = () => {
  const val = 1;
  const [grades, setGrades] = useState<any>({});
  useEffect(() => {
    getDataForGrades(setGrades);
  }, []);
  const pieGrade = Object.keys(grades || {}).map((grade) => ({
    title: grade,
    value: grades[grade],
    color: '#00f',
    label: grade,
  }));
  console.log(grades);
  console.log(pieGrade);
  return (
    <AppLoadingWrapper isLoading={false}>
      <AppNavbar />
      <div style={{ height: '100px' }}>
        <PieChart data={pieGrade} />
      </div>
    </AppLoadingWrapper>
  );
};

export default Grades;
