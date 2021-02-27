import axios from "axios";
// Export an object containing methods we'll use for accessing the Employee directory API.

export default {
  // Retrieves stock employees from axios return extracted from randomuser.me, employees folded into getStockEmployees function.
  getStockEmployees: function() {
     return axios.get('https://randomuser.me/api/?results=200');
   }

};