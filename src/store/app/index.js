const initialState = {
    datas_geo: [],
    luas_chart: [],
    datas_pen: [],
    datas_tempat_ibadah: [],
    datas_agama: [],
    some_datas: [],
    datas_pdf: [],
    isLoading: true,
    isLogin: false
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
        case 'STORE_DATA_TEMPAT_IBADAH':
            return {
                ...state,
                datas_tempat_ibadah: action.datas,
            }
        case 'STORE_DATA_AGAMA':
            return {
                ...state,
                datas_agama: action.datas,
            }
        case 'STORE_SOME_DATA':
            return {
                ...state,
                some_datas: action.datas,
                isLoading: false
            }
        case 'STORE_PDF':
            return {
                ...state,
                datas_pdf: action.datas,
            }
        case 'SET_LOGIN':
            return {
                ...state,
                isLogin: !state.isLogin
            }
        default:
            return state
    }
}