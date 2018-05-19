/**
 * Slim down initial user data list to only return 
 * what items are needed for the app to reduce size
 * of data that is being stored
 * @param  {array} results Array of of initial users
 * @returns {array} Array of slimmed down user data
 */
export function getRelevantUserDataList(results) {
    return results.map(item => {
        return {
            location: item.location,
            name: item.name,
            picture: item.picture.large
        };
    });
}

/**
 * Get filtered list of users for search input that match 
 * first name and/or last name
 * @param  {array} users Array of users
 * @returns {array} Array of filtered users
 */
export function getFilteredResultsForUsers(users, searchString) {
    return users.filter(function(user) {
        const isFirstNameMatch = user.name.first.toLowerCase().indexOf(searchString) > -1;
        const isLastNameMatch = user.name.last.toLowerCase().indexOf(searchString) > -1;
        return isFirstNameMatch || isLastNameMatch;
    });
}
