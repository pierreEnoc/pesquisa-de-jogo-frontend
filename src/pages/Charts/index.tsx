import React from 'react';
import Filters from '../../components/Filters';
import Chart from 'react-apexcharts';
import { barOptions, pieOptions } from './chart-options';
import './styles.css'

const chartData = [
    {
        x: 'pierre',
        y:10
    },
    {
        x: 'pietra',
        y:20
    },
]

const Charts = () => {

    return (
        <div className="page-container">
            <Filters link="/records" linkText="VER TABELA" />
            <div className="chart-container">
                <div className="top-related">
                    <h1 className="top-related-title">
                        Jogos mais votado
                    </h1>
                    <div className="games-container">
                        <Chart
                         options={barOptions} 
                         type="bar"
                         width="900"
                         height="150"
                         series={[{ data: chartData}]}
                         />
                    </div>
                </div>
                <div className="charts">
                <div className="platform-chart">
                    <h2 className="chart-title">Platafomas</h2>
                    <Chart 
                    options={{...pieOptions, labels: ['Pierre', 'Pietra']}}
                    type="donut"
                    series={[30, 70]}
                    width="350"
                    />
                </div>

                <div className="charts">
                    <div className="gender-chart">
                    <h2 className="chart-title">Gêneros</h2>
                    <h2 className="chart-title">Platafomas</h2>
                    <Chart 
                    options={{...pieOptions, labels: ['Pierre', 'Pietra']}}
                    type="donut"
                    series={[30, 70]}
                    width="350"
                    />
                </div>
                </div>
             </div>
            </div>
        </div>
    )
}

export default Charts;
