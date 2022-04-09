import {constants} from "../Constants";

export const usersService = {
    getAllUsers: () => fetch(constants.apiUrl + 'users').then(value => value.json())
}