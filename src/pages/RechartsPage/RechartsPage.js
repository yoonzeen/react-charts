import React from 'react';
import ChartInfo from '../../components/ChartInfo';
import CHARTS from '../../assets/data/chartProps'
import LineChartComp from '../../components/Recharts/LineChartComp';

const RechartsPage = () => {
    const {title, desc} = CHARTS.recharts;
      
    return (
        <div>
            <ChartInfo title={title} desc={desc}  />
            <div className="btnWrap mb30">
              <a className="btnGoToWeb" href="https://recharts.org/en-US/" title="recharts" target="_blank" rel="noreferrer">Recharts 문서</a>
            </div>
            <div>
              <LineChartComp />
            </div>
        </div>
    );
};

export default RechartsPage;