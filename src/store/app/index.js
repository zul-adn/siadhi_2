const initialState = {
    datas_geo: [],
    luas_chart: [],
    datas_pen: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'STORE_DATA_GEO':
            return {
                ...state,
                datas_geo: action.datas,
                luas_chart: action.luas_chart
            }
        case 'STORE_DATA_PEN':
            return {
                ...state,
                datas_pen: action.datas,
            }
        default:
            return state
    }
}