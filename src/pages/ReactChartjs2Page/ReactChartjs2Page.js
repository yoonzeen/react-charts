import React from 'react';
import ChartInfo from '../../components/ChartInfo';
import CHARTS from '../../assets/data/chartProps'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
  } from 'chart.js';
import BarChart from '../../components/react-charts-2/BarChart';
import DoughnutChart from '../../components/react-charts-2/DoughnutChart';

const ReactCharts2Page = () => {
    ChartJS.register(
        ArcElement,
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
      );
    const {title, desc} = CHARTS.reactchartjs2;
    
    
    return (
        <div>
            <ChartInfo title={title} desc={desc}  />
            <div className='btnWrap mb30'>
                <a className='btnGoToWeb' href="https://react-chartjs-2.js.org/" target="_blank" rel="noreferrer" title="react-chartjs-2">react-chartjs-2 문서</a>
            </div>
            <div>
                <div className="mb30">
                    <BarChart />
                </div>
                <div>
                    <DoughnutChart />
                </div>
            </div>
        </div>
    );
};

export default ReactCharts2Page;