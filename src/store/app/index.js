const initialState = {
    datas_geo : [],
    luas_chart : []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'STORE_DATA_GEO' : 
        return{
            ...state,
            datas_geo: action.datas,
            luas_chart: action.luas_chart
        }
        default:
            return state
    }
}