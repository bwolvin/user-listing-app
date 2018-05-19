
import axios from 'axios';

/**
 * Get initial user list data from random user api
 * @param  {number} userListCount num of random users to get
 * @returns {object} Promise from from axios request
 */
export function getInitialUserListData(userListCount) {
    const requestUserListUrl = `https://randomuser.me/api/?results=${userListCount}`;
    return axios.get(requestUserListUrl)
}