import {constants} from "../Constants";

export const postsService = {
    getAllPosts: () => fetch(constants.apiUrl + 'posts').then(value => value.json())
}