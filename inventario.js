
class Inventario {

    constructor() {
        this.inventario = new Array();
    }

    agregar(producto) {

        this.inventario.push(producto);

    }

    eliminar(codigo) {
        
        for(let i = 0; i < this.inventario.length; i++) {
            if(codigo === this.inventario[i].getCodigo()) {

                for(let a = i; a < this.inventario.length; a++) {
                    this.inventario[a] = this.inventario[a + 1];
                }
                this.inventario.pop();
            }
        }


    }

    buscar(codigo) {

        for(let i = 0; i <= this.inventario.length -1; i++) {
            if(codigo === this.inventario[i].getCodigo()) {
                return this.inventario[i];
            } 
        } 

        return null;

    }


    listado() {
        let lista = '';
        this.inventario.forEach((producto) => {
            lista += producto.info();
        });
        return lista;

    }

    
    listadoInverso() {

        let lista = '';

        for(let i = this.inventario.length -1; i >= 0; i--) {
            lista += this.inventario[i].info();
        }

        return lista;
    }
}



/*    modificar(codigo) {
        
    } */