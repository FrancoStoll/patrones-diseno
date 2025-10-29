/**
 * ! Patrón Prototype:

 * Es un patrón de diseño creacional que nos permite copiar objetos existentes sin hacer
 * que el código dependa de sus clases.
 * 
 * * Es útil cuando queremos duplicar el contenido, 
 * * el título y el autor de un documento, por ejemplo o cualquier objeto complejo.
 * 
 * https://refactoring.guru/es/design-patterns/prototype
 */


class DocumentProto {

    constructor(
        public title: string,
        private content: string,
        public author: string,
    ) {

    }

    displayInfo() {
        console.log(`Title: ${this.title}`);
        console.log(`Content: ${this.content}`);
        console.log(`Author: ${this.author}`);
    }

    clone(): DocumentProto {
        return new DocumentProto(this.title, this.content, this.author)
    }

}


function main() {
    const document1 = new DocumentProto('Cotizacion', '500 dolares', 'Fernando')

    console.log({ document1 });
    document1.displayInfo();


    const document2 = document1.clone()

    document2.title = 'Nueva Cotizacion'

    console.log({ document2 });
    document2.displayInfo();

}
main()