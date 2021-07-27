import React from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import { connect } from "react-redux";
import { getDataGeo } from './../../store/app/action';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];

function Dashboard({ getDataGeo, datas_geo, luas_chart }) {

    React.useEffect(() => {
        getDataGeo()
        console.log(luas_chart)
    }, [])



    return (
        <>
            <div className="main-content">
                <div className="w-30">
                        <PieChart width={400} height={400}>
                            <Pie
                                data={luas_chart}
                                cx="50%"
                                cy="50%"
                                labelLine
                                label
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {luas_chart.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                        </PieChart>
                </div>
                <div className="w-60 p-20" style={{ display:'flex', justifyContent:'center', alignItems:'center' }}>
                    <table id="customers">
                        <tr>
                            <th>Kecamatan</th>
                            <th>Koordinat</th>
                            <th>Luas (ha)</th>
                        </tr>
                        {datas_geo.map((v, i) =>
                            <tr>
                                <td>{v.nama_kecamatan}</td>
                                <td>{v.bujur} dan {v.lintang}</td>
                                <td>{v.luas} ha</td>
                            </tr>
                        )}

                    </table>
                </div>

            </div>
        </>
    )
}



const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
}

const mapStateToProps = ({ app }) => {
    return {
        datas_geo: app.datas_geo,
        luas_chart: app.luas_chart
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getDataGeo: () => dispatch(getDataGeo()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
