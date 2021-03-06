import React from 'react';
import { Column } from '@ant-design/charts';

const CO = ({ data }) => {
  const config = {
    forceFit: true,
    data,
    isStack: true,
    xField: 'year',
    yField: 'value',
    seriesField: 'type',
    color: ['#98ccd9', '#9b9ff9', '#b1d4f5'],
  };
  return (
    <>
      <div className="chart-wrapper">
        <h5 className="bold chart-title">Clinical Outcomes(%)</h5>
        <Column {...config} />
      </div>
    </>
  );
};

export default CO;
