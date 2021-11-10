import './Chart.css';
import ChartBar from './ChartBar';
const Chart=(props)=>{
    const totMax=Math.max(...props.dataPoints.map(data=> data.value));
    return <div className="chart">
        {props.dataPoints.map(dataPoint=>
        <ChartBar 
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totMax}
            label={dataPoint.label}
        />)}
    </div>
};

export default Chart;