
import axios from 'axios';
import { getSlimmedDownUserList } from '../utils/userUtils';

/**
 * Get user directory list data from random user api
 * @param  {number} userListCount num of random users to get
 * @returns {object} Promise from from axios request
 */
export function getUserDirectoryList(userListCount) {
    const requestUserListUrl = `https://randomuser.me/api/?results=${userListCount}`;
    return axios.get(requestUserListUrl)
    .then(users => {
        const users = res.data.results;
        // Slim down the user directory list to only get relevant data that is needed for the app
        return getSlimmedDownUserList(users);
    })
}