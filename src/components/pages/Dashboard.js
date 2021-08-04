import React from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import { connect } from "react-redux";
import { getDataGeo, getDataPen } from './../../store/app/action';
import NumberFormat from 'react-number-format';

import man from './../assets/img/svg/dutch-man.svg';
import woman from './../assets/img/svg/dutch-woman.svg';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
];

function Dashboard({ getDataGeo, datas_geo, luas_chart, getDataPen, datas_pen }) {

    React.useEffect(() => {
        getDataGeo()
        getDataPen()
        console.log(luas_chart)
    }, [])



    return (
        <>
            <div className="main-content">
                <div className="header">
                    <p>Geografis</p>
                </div>
                <div className="flex-row">
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
                    <div className="w-70 p-20" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <table id="customers">
                            <tr>
                                <th >Kecamatan</th>
                                <th>Koordinat</th>
                                <th>Luas (ha)</th>
                            </tr>
                            {datas_geo.map((v, i) =>
                                <tr>
                                    <td >{v.nama_kecamatan}</td>
                                    <td>{v.bujur} dan {v.lintang}</td>
                                    <td><NumberFormat
                                        value={v.luas}
                                        displayType={'text'}
                                        thousandSeparator={true}
                                        renderText={formattedValue => <span >{formattedValue} ha</span>}
                                    /></td>
                                </tr>
                            )}

                        </table>
                    </div>
                </div>

                <div className="flex-col p-20">
                    <div className="border-grey">
                        <div className="header mb-20">
                            <p>Perbatasan</p>
                        </div>
                        <div className="flex-row p-20">
                            <div className="w-100 p-20" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <table id="customers">
                                    <tr>
                                        <th>Kecamatan</th>
                                        <th>Batas Utara</th>
                                        <th>Batas Timur</th>
                                        <th>Batas Selatan</th>
                                        <th>Batas Barat</th>
                                    </tr>
                                    {datas_geo.map((v, i) =>
                                        <tr>
                                            <td style={{ width: 250 }}> {v.nama_kecamatan}</td>
                                            <td>{v.batas_utara}</td>
                                            <td>{v.batas_timur}</td>
                                            <td>{v.batas_selatan}</td>
                                            <td>{v.batas_barat}</td>
                                        </tr>
                                    )}

                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-col p-20">
                    <div className="border-grey">
                        <div className="header mb-20">
                            <p>Jenis Tanah</p>
                        </div>
                        <div className="flex-row p-20">
                            <div className="w-100" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <table id="customers">
                                    <tr>
                                        <th>Kecamatan</th>
                                        <th>Organosol</th>
                                        <th>Alluvial</th>
                                        <th>Pedsol</th>
                                        <th>Latosol</th>
                                        <th>PMK</th>
                                    </tr>
                                    {datas_geo.map((v, i) =>
                                        <tr>
                                            <td style={{ width: 250 }}> {v.nama_kecamatan}</td>
                                            <td>
                                                <NumberFormat
                                                    value={v.jt_organosol}
                                                    displayType={'text'}
                                                    thousandSeparator={true}
                                                    renderText={formattedValue => <span >{formattedValue} ha</span>}
                                                />
                                            </td>
                                            <td>
                                                <NumberFormat
                                                    value={v.jt_alluvial}
                                                    displayType={'text'}
                                                    thousandSeparator={true}
                                                    renderText={formattedValue => <span >{formattedValue} ha</span>}
                                                />
                                            </td>
                                            <td>
                                                <NumberFormat
                                                    value={v.jt_pedsol}
                                                    displayType={'text'}
                                                    thousandSeparator={true}
                                                    renderText={formattedValue => <span >{formattedValue} ha</span>}
                                                />
                                            </td>
                                            <td><NumberFormat
                                                value={v.jt_latosol}
                                                displayType={'text'}
                                                thousandSeparator={true}
                                                renderText={formattedValue => <span >{formattedValue} ha</span>}
                                            /></td>
                                            <td><NumberFormat
                                                value={v.jt_pmk}
                                                displayType={'text'}
                                                thousandSeparator={true}
                                                renderText={formattedValue => <span >{formattedValue} ha</span>}
                                            /></td>
                                        </tr>
                                    )}

                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="main-content">
                <div className="header">
                    <p>Penduduk</p>
                </div>
                <div className="flex-row">
                    <div className="w-40 p-20 ">
                        <div className="card p-20 w-100 bg-green flex-column">
                            <NumberFormat
                                value={datas_pen.length !== 0 ? parseInt(datas_pen.data[0].total_perempuan[0].total_perempuan) + parseInt(datas_pen.data[0].total_laki[0].total_laki) : ''}
                                displayType={'text'}
                                thousandSeparator={true}
                                renderText={formattedValue => <span className="h1-main">{formattedValue} </span>}
                            />
                            <br />
                            <p>Jumlah Penduduk Kota Singkawang</p>
                        </div>
                        <div className="card flex-row w-100">
                            <div className="card bg-blue p-20 w-50 flex-col" style={{ textAlign: 'center' }} >
                                <div className="w-100">
                                    <img src={man} className="w-100" />
                                </div>
                                <div className="w-100">
                                    <NumberFormat
                                        value={datas_pen.length !== 0 ? datas_pen.data[0].total_laki[0].total_laki : ''}
                                        displayType={'text'}
                                        thousandSeparator={true}
                                        renderText={formattedValue => <span className="h1-sub">{formattedValue} </span>}
                                    />
                                    <p>Laki laki</p>
                                </div>
                            </div>
                            <div className="card bg-pink p-20 w-50 flex-col" style={{ textAlign: 'center' }} >
                                <div className="w-100">
                                    <img src={woman} className="w-100" />
                                </div>
                                <div className="w-100">
                                    <NumberFormat
                                        value={datas_pen.length !== 0 ? datas_pen.data[0].total_perempuan[0].total_perempuan : ''}
                                        displayType={'text'}
                                        thousandSeparator={true}
                                        renderText={formattedValue => <span className="h1-sub">{formattedValue} </span>}
                                    />
                                    <p>Perempuan</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-60 p-20" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                    </div>
                </div>

                <div className="flex-col p-20 w-100">
                    {datas_pen.length !== 0 ?
                        datas_pen.kec.map((v, i) =>

                            <div key={i} className="flex-row border-grey mb-20 w-100 ">

                                <div className="flex-col w-40 pr-10">
                                    <div className="card p-20 w-100 bg-imperial flex-column">
                                        <span >{v.nama_kecamatan} </span>
                                    </div>
                                    <div className="card p-20 w-100 bg-blue flex-column">
                                        <NumberFormat
                                            value={v.jumlah_penduduk[0].jumlah_laki}
                                            displayType={'text'}
                                            thousandSeparator={true}
                                            renderText={formattedValue => <span className="h1-sub">{formattedValue} </span>}
                                        />
                                        <br />
                                        <p>Laki Laki</p>
                                    </div>
                                    <div className="card p-20 w-100 bg-pink flex-column">
                                        <NumberFormat
                                            value={v.jumlah_penduduk[0].jumlah_perempuan}
                                            displayType={'text'}
                                            thousandSeparator={true}
                                            renderText={formattedValue => <span className="h1-sub">{formattedValue} </span>}
                                        />
                                        <br />
                                        <p>Perempuan</p>
                                    </div>
                                    <div className="card p-20 w-100 bg-green flex-column">
                                        <NumberFormat
                                            value={parseInt(v.jumlah_penduduk[0].jumlah_perempuan) + parseInt(v.jumlah_penduduk[0].jumlah_laki)}
                                            displayType={'text'}
                                            thousandSeparator={true}
                                            renderText={formattedValue => <span className="h1-sub">{formattedValue} </span>}
                                        />
                                        <br />
                                        <p>Total Penduduk {v.nama_kecamatan}</p>
                                    </div>

                                </div>
                                <div className="flex-col w-60 flex-center pr-10">
                                    <table id="customers2">
                                        <tr>
                                            <th>Kelurahan</th>
                                            <th>Laki - laki</th>
                                            <th>Perempuan</th>
                                            <th>Jumlah</th>
                                        </tr>
                                        {v.jumlah_penduduk_per_kelurahan.map((vx, i) =>
                                            <tr key={i}>
                                                <td>{vx.nama_kelurahan}</td>
                                                <td>
                                                    <NumberFormat
                                                        value={vx.laki}
                                                        displayType={'text'}
                                                        thousandSeparator={true}
                                                        renderText={formattedValue => <>{formattedValue} </>}
                                                    />
                                                </td>
                                                <td>
                                                    <NumberFormat
                                                        value={vx.perempuan}
                                                        displayType={'text'}
                                                        thousandSeparator={true}
                                                        renderText={formattedValue => <>{formattedValue} </>}
                                                    />
                                                </td>
                                                <td>
                                                    <NumberFormat
                                                        value={parseInt(vx.laki) + parseInt(vx.perempuan)}
                                                        displayType={'text'}
                                                        thousandSeparator={true}
                                                        renderText={formattedValue => <>{formattedValue} </>}
                                                    />
                                                </td>
                                            </tr>
                                        )}

                                    </table>
                                </div>
                            </div>
                        )
                        :
                        ''
                    }

                </div>
            </div>

            <div className="main-content">
                <div className="header">
                    <p>Agama</p>
                </div>
                <div className="flex-row">

                </div>
            </div>

            <div className="main-content">
                <div className="header">
                    <p>Footer</p>
                </div>
                <div className="flex-row">

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
        luas_chart: app.luas_chart,
        datas_pen: app.datas_pen
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getDataGeo: () => dispatch(getDataGeo()),
        getDataPen: () => dispatch(getDataPen())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
