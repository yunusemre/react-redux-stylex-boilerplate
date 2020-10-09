import React from 'react';
import { StackedColumn } from '@ant-design/charts';

const HCD = ({ data }) => {
  const config = {
    meta: {
      value: { alias: 'Proportion of HCC Cases Detected(%)' },
    },
    forceFit: true,
    data,
    stackField: 'type',
    color: ['#e1e1e1', '#b3b3b3', '#666'],
    padding: 'auto',
    xField: 'year',
    yField: 'value',
  };
  return (
    <>
      <div className="chart-wrapper">
        <h5 className="bold chart-title">Detection of HCC Cases</h5>
        <StackedColumn {...config} />
      </div>
    </>
  );
};

export default HCD;
