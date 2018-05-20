/**
 * Slim down initial user data list to only return 
 * what items are needed for the app to reduce size
 * of data that is being stored
 * @param  {array} users Array of of initial users
 * @returns {array} Array of slimmed down user data
 */
export function getSlimmedDownUserList(users) {
    return users.map(user => {
        return {
            location: user.location,
            name: user.name,
            picture: user.picture.large
        };
    });
}

/**
 * Get filtered list of users for search input that match 
 * first name and/or last name
 * @param  {array} users Array of users
 * @param  {string} searchInput search input string
 * @returns {array} Array of filtered users
 */
export function getFilteredUsersForInput(users, searchInput) {
    return users.filter(function(user) {
        const isFirstNameMatch = user.name.first.toLowerCase().indexOf(searchInput) > -1;
        const isLastNameMatch = user.name.last.toLowerCase().indexOf(searchInput) > -1;
        return isFirstNameMatch || isLastNameMatch;
    });
}
