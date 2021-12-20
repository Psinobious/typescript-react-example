import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions"

export const updateAccount = () =>{
    return(dispatch: Dispatch<Action>) =>{
        dispatch({
            type: ActionType.UPDATE_ACCOUNT_PENDING
        })
    }
}
export const addAccount = () =>{
    return(dispatch: Dispatch<Action>) =>{
        dispatch({
            type: ActionType.ADD_ACCOUNT_SUCCESSS
        })
    }
}
export const removeAccount = () =>{
    return(dispatch: Dispatch<Action>) =>{
        dispatch({
            type: ActionType.REMOVE_ACCOUNT_SUCCESS,
            payload: ""
        })
    }
}