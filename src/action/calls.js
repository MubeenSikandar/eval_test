import * as api from "../api";

export const getCalls = () => async (dispatch) => {

    try {
        const { data } = await api.fetchCalls();
        dispatch({type: "FETCH_ALL", payload: data});
    } catch (error) {
        console.log(error.message)
    }
}