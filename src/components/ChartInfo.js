import React from 'react';

const ChartInfo = ({title, desc}) => {
    return (
        <div>
            <div className="btnWrap nav"><a href="https://zeen-vue-charts.netlify.app" className="btnMain" title="메인으로 가기">메인으로 가기</a></div>
            <h2>{title}</h2>
            <p className="mb30" dangerouslySetInnerHTML={{__html : desc.replaceAll(/\n/g, '<br/>')}}></p>
        </div>
    );
};

export default ChartInfo;