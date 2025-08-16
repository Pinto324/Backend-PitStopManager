class Cripto {
    async encriptar(texto) {
        let result = "";
        for (let i = 0; i < texto.length; i++) {
            let valorNumerico = texto[i].charCodeAt(0);
            valorNumerico = valorNumerico ^ (i ** i);//operacion XOR
            result += valorNumerico.toString(16).toString();//hexadecimal
        }
        return btoa(result).toString();//base 64
    }
}

module.exports = new Cripto();