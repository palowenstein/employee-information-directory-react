import axios from "axios";

// Export an object containing methods we'll use for accessing the /Dog.Ceo API/ Employee directory API.

export default {
  // Retrieves all employees
  getEmployees: function() {
     return axios.get("https://randomuser.me/api/?results=100");
   }

  // getRandomDog: function() {
  //   return axios.get("https://dog.ceo/api/breeds/image/random");
  // },
  // getDogsOfBreed: function(breed) {
  //   return axios.get("https://dog.ceo/api/breed/" + breed + "/images");
  // },
  // getBaseBreedsList: function() {
  //   return axios.get("https://dog.ceo/api/breeds/list");
  // }

};