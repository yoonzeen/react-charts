import React from 'react';
import { Link } from 'react-router-dom';

const ChartInfo = ({title, desc}) => {
    return (
        <div>
            <div className="btnWrap nav"><Link to="/" className="btnMain">메인으로 가기</Link></div>
            <h2>{title}</h2>
            <p className="mb30" dangerouslySetInnerHTML={{__html : desc.replaceAll(/\n/g, '<br/>')}}></p>
        </div>
    );
};

export default ChartInfo;