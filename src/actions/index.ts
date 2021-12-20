import { ActionType } from "../action-types"

interface updateAccountPending{
    type: ActionType.UPDATE_ACCOUNT_PENDING;
}
interface updateAccountSuccess{
    type: ActionType.UPDATE_ACCOUNT_SUCCESS;
}
interface updateAccountFail{
    type: ActionType.UPDATE_ACCOUNT_FAIL;
}
interface addAccountSuccess{
    type: ActionType.ADD_ACCOUNT_SUCCESSS;
}
interface addAccountFail{
    type: ActionType.ADD_ACCOUNT_FAIL;
    payload: string;
}
interface removeAccountSuccess{
    type: ActionType.REMOVE_ACCOUNT_SUCCESS;
    payload: string;
}
export type Action = updateAccountFail | updateAccountPending | updateAccountSuccess | addAccountFail | addAccountSuccess | removeAccountSuccess; 