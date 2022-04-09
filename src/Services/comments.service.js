import {constants} from "../Constants";

export const commentsService = {
    getAllComments: () => fetch(constants.apiUrl + 'comments').then(value => value.json())
}