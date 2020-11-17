export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: 'BQC5JJUGG3KqpdeQ_IBgCSZFU_HC_w5y_iOQTcu7eFC1jebLKOj9Y3m3p_EG5RT0Vh_7TCwBlJtDZHplZ5HZafREmWFuuiqcTeFvW4DGVQMaJOZUAjcZs53wTVpNoUFd-BKNu5pbhZybysT0CdTNbUZjGoZ4RoMtnwbntQHpF1HaeeU1PEEH',
};

const reducer = (state, action) => {
    console.log(action);

    //Action -> type, [payload]

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            };
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            };
        default:
            return state;
    }
}

export default reducer;