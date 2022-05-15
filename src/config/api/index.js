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
  users: {
    create: `${url}/admin/users`,
    find: `${url}/admin/users`,
    findOrgs: `${url}/admin/organisations`,
    findone: `${url}/users`,
    update: `${url}/admin/user/edit-user`,
    updateOrg: `${url}/admin/user/edit-organisation`,
    delete: `${url}/user`,
  },
  news: {
    create: `${url}/admin/newsposts`,
    find: `${url}/newsposts`,
    findone: `${url}/newsposts`,
    update: `${url}/newspost`,
    delete: `${url}/newspost`,
  },
  resources: {
    create: `${url}/admin/resources`,
    find: `${url}/resources`,
    findone: `${url}/resource`,
    update: `${url}/resource`,
    delete: `${url}/resource`,
  },
  events: {
    create: `${url}/admin/events`,
    find: `${url}/events`,
    findone: `${url}/event`,
    update: `${url}/event`,
    delete: `${url}/event`,
  },
  apprenticeships: {
    create: `${url}/admin/apprenticeships`,
    find: `${url}/admin/apprenticeships`,
    findone: `${url}/apprenticeship`,
    update: `${url}/apprenticeship`,
    delete: `${url}/apprenticeship`,
  },
  internships: {
    create: `${url}/admin/internships`,
    find: `${url}/admin/internships`,
    findone: `${url}/internship`,
    update: `${url}/internship`,
    delete: `${url}/internship`,
  },
  grants: {
    create: `${url}/admin/grants`,
    find: `${url}/admin/grants`,
    findone: `${url}/grant`,
    update: `${url}/grant`,
    delete: `${url}/grant`,
  },
};

export { API };
