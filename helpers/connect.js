const { Pool } = require("pg");
require("dotenv").config();
const config = {
  host: "localhost",
  user: "postgres",
  password: "44182",
  database: "like_me",
  allowExitOnIdle: true,
};
// singleton
const Singleton = (() => {
  let instance;
  function createInstance() {
    const classObj = new Pool(config);
    return classObj;
  }
  return {
    getInstance: () => {
      if (!instance) {
        instance = createInstance();
        console.log("Nueva conexión a la base de datos establecida");
      } else {
        console.log("Establecida la conexión");
      }
      return instance;
    },
  };
})();

module.exports = Singleton;
