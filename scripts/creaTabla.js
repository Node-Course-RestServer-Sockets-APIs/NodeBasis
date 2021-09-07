const fs = require("fs");
const color = require("colors");

const creaTabla = async (base, lista, until) => {
  try {
    let salida = "";

    for (let i = 1; i <= until; i++) {
      salida += `${base} x ${i} = ${i * base}\n`;
    }
    if (lista) console.log(salida.red);

    fs.writeFileSync(`./salida/tablaDel${base}.txt`, salida);
    return `tablaDel${base}`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  creaTabla,
};
