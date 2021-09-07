const { number, boolean } = require("yargs");
const { creaTabla } = require("./scripts/creaTabla.js");
const { argv } = require("./config/yargs");

creaTabla(argv.b, argv.l, argv.u)
  .then((nombreTabla) => console.log(nombreTabla, "creada"))
  .catch((err) => console.log(err));
