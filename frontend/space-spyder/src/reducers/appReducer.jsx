export const initialAppState = {
    isLoading: false,
    isAuthenticated: false
}


export const appReducer = (state, action) => {
    switch(action.type) {
        case "SET_LOADING":
            console.log("Is loading...")
            return {
                ...state,
                isLoading: action.is_loading
            }
        case "SET_AUTH":
            return {
                ...state,
                isAuthenticated: action.is_authenticad
            }
        default:
            return initialAppState;
    }
}