export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
};

const reducer = (state, action) => {
    console.log(action);

    //Action -> type, [payload]

    switch(action,type) {
        case 'USER_SET':
            return {
                ...state,
                user: action.user
            }
        default:
            return state;
    }
}

export default reducer;