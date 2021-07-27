import axios from 'axios'

const storeDataGeo = (payload, chart) => ({ type: 'STORE_DATA_GEO', datas: payload, luas_chart: chart })

export const getDataGeo = () => {
    return (dispatch) => {
        axios.get('http://localhost:8000/api/getgeo')
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