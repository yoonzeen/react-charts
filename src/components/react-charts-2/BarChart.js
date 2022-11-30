import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = () => {
    const options = {
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js Bar Chart',
          },
        },
        maintainAspectRatio: false,
      };
    const data = {
        datasets: [
          {
            label: 'Data 1',
            data: {
                'January': 30, 
                'February': 40,
                'March': 20,
                'April' : 25,
                'May' : 35,
                'June' : 25,
                'July' : 50
            },
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: 'Data 2',
            data: {
                'January': 20, 
                'February': 10,
                'March': 70,
                'April' : 65,
                'May' : 35,
                'June' : 55,
                'July' : 20
            },
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      };
    return (
        <div>
            <Bar 
                data={data}
                width={200}
                height={300}
                options={options}
                />
        </div>
    );
};

export default BarChart;