import {Action} from "../actions"
import {ActionType} from "../action-types"

const initialState = {
    postID: "",
    FirstName: "",
    LastName: "",
    Email: "",
    Password: ""
}

const accountReducer = (state = initialState, action: Action) => {
    switch(action.type) {
        case ActionType.ADD_ACCOUNT_SUCCESSS:
            return {

            }
        case ActionType.ADD_ACCOUNT_FAIL:
            return {

            }
        case ActionType.UPDATE_ACCOUNT_PENDING:
            return {

            }
        case ActionType.UPDATE_ACCOUNT_SUCCESS:
            return {

            }
        case ActionType.UPDATE_ACCOUNT_FAIL:
            return {

            }
        default:
            return state
    }
}
export default accountReducer;