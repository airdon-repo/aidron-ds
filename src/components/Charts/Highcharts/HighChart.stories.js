/* eslint-disable max-len */
/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import { HighChart } from './HighChart';
import { Column } from './Column';
import { Line } from './Line';

export default {
  title: 'Charts/HighChart',
  component: HighChart
};

const Template = (args) => (
  <HighChart {...args}>
    <Column
      name="eoh"
      color="#e6e6e6"
      colorLabel="#bfbfbf"
      yAxis={0}
      data={[10000, 9500, 9300, 9100, 9000, 8900, 8850, 8800, 8750, 8700, 8650]}
    />
    <Column
      name="venda"
      color="#FFE924"
      colorLabel="#cbb700"
      yAxis={0}
      data={[5000, 4000, 3000, 2000, 1000, 1000, 500, 500, 500, 500, 500]}
    />
    <Line
      name="Sell Throught Semanal"
      color="#999999"
      suffix="%"
      marker="circle"
      yAxis={1}
      data={[6.2, 5.9, 5.6, 4.9, 4, 3.1, 2, 2, 2, 2, 2]}
    />
  </HighChart>
);

const Template2 = (args) => (
  <HighChart {...args}>
    <Column
      name="eoh"
      color="#e6e6e6"
      colorLabel="#bfbfbf"
      yAxis={0}
      visible={false}
      // eslint-disable-next-line max-len
      data={[133000, 186000, 188000, 210000, 167000, 276000, 300000, 303000, 210000, 105000, 98000]}
    />
    <Line
      name="preço"
      color="#CBB700"
      marker="diamond"
      yAxis={0}
      // eslint-disable-next-line max-len
      data={[42.44, 44.31, 44.62, 42.39, 41.22, 43.07, 44.92, 45.46, 47.02, 46.7, 40.50]}
    />
    <Line
      name="margem"
      color="#00BECB"
      suffix="%"
      marker="square"
      yAxis={1}
      // eslint-disable-next-line max-len
      data={[63.38, 63.93, 62.88, 59.72, 57.29, 58.92, 60.39, 61.08, 61.89, 61.82, 65.89]}
    />
    <Line
      name="ST acum."
      color="#FF2462"
      suffix="%"
      marker="circle"
      yAxis={1}
      data={[8.77, 13.36, 18.66, 21.2, 29.54, 24.89, 27.38, 30.21, 40.46, 58.4, 55.12]}
    />
    <Line
      name="ST sem."
      color="#D71920"
      suffix="%"
      dash="ShortDot"
      marker={false}
      yAxis={1}
      data={[8.77, 7.89, 7.12, 5.96, 7.49, 7.26, 6.68, 5.62, 5.17, 4.84, 4.99]}
    />
    <Line
      name="venda"
      color="#00CB51"
      dash="ShortDash"
      yAxis={0}
      data={[12799, 15998, 14435, 13319, 13534, 21682, 21500, 18045, 11467, 5363, 8756]}
    />
  </HighChart>
);

export const Basic = Template.bind({});
Basic.args = {
  stack: true,
  xLabels: ['2021/01', '2021/02', '2021/03', '2021/04', '2021/05', '2021/06', '2021/07', '2021/08', '2021/09', '2021/10', '2021/11']
};

export const Lines = Template2.bind({});
Basic.args = {
  stack: true,
  xLabels: ['2021/01', '2021/02', '2021/03', '2021/04', '2021/05', '2021/06', '2021/07', '2021/08', '2021/09', '2021/10', '2021/11']
};
