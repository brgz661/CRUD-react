import React from 'react';
import { Chart as ChartJS, registerables } from 'chart.js';

import { Bar } from 'react-chartjs-2';
// import data from '../services/Q1_1.json';

ChartJS.register(...registerables);

export const Graphic = () => {
  const data = {
    labels: [
      'Jan',
      'Fev',
      'Mar',
      'Abr',
      'Mai',
      'Jun',
      'Jul',
      'Ago',
      'Set',
      'Out',
      'Nov',
      'Dez',
    ],
    datasets: [
      {
        label: 'My First Dataset',
        data: [10, 30, 40, 45, 80, 85, 100, 120, 130, 140, 150, 260],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)',
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <Bar data={data} width="400" height="400"></Bar>
    </>
  );
};
