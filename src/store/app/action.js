import axios from 'axios';

const url = 'https://dinartech.com/siadhi/public/api'

const storeDataGeo = (payload, chart) => ({ type: 'STORE_DATA_GEO', datas: payload, luas_chart: chart })
const storeDataPenduduk = (payload) => ({ type: 'STORE_DATA_PEN', datas: payload })

export const getDataGeo = () => {
    return (dispatch) => {
        axios.get(`${url}/getgeo`)
            .then(response => {
                let res = response.data.data
                let data = []
                res.map((v, i) =>
                    data.push({ 'name': v.nama_kecamatan, 'value': parseInt(v.luas) })
                )
                dispatch(storeDataGeo(res, data)) //Data untuk chart Luas
            })
    }
}

export const getDataPen = () => {
    return (dispatch) => {
        axios.get(`${url}/getpenduduk`)
            .then(response => {
                console.log(response.data)
                dispatch(storeDataPenduduk(response.data)) 
            })
    }
}