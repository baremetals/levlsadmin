/**
 * It's suggested to configure the RESTful endpoints in this file
 * so that there is only one source of truth, future update of endpoints
 * could be done from here without refactoring on multiple places throughout the app
 */

const url = process.env.REACT_APP_API_URL;
const API = {
  auth: {
    login: `${url}/admin/login`,
    register: `${url}/admin/register`,
  },
  user: {
    user: `${url}/admin/user`,
    notifications: `${url}/notifications`,
  },
  articles: {
    create: `${url}/articles`,
    find: `${url}/articles`,
    findone: `${url}/articles`,
    update: `${url}/articles`,
  },
};

export { API };
