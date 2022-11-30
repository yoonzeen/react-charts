import React from 'react';
import CHARTS from '../../assets/data/chartProps'
import ChartInfo from '../../components/ChartInfo';
import DoughnutComp from '../../components/Nivo/DoughnutComp';
import LineChartComp from '../../components/Nivo/LineChartComp';

const NivoPage = () => {
    const {title, desc} = CHARTS.nivo;
    return (
        <div>
            <ChartInfo title={title} desc={desc}  />
            <div className='btnWrap mb30'>
                <a className='btnGoToWeb' href="https://nivo.rocks/" target="_blank" title="nivo">Nivo 문서</a>
            </div>
            <LineChartComp />
            <DoughnutComp />
        </div>
    );
};

export default NivoPage;