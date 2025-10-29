import { COLORS } from '../helpers/colors.ts';
/**
 * ! Patrón Builder:
 * Es un patrón de diseño creacional que nos permite construir objetos complejos
 * paso a paso.
 *
 * El patrón nos permite producir distintos tipos y representaciones
 * de un objeto empleando el mismo código de construcción.
 *
 * * Es útil cuando necesitamos construir un objeto complejo con muchas partes
 * * y queremos que el proceso de construcción sea independiente de las partes
 * * que lo componen.
 *
 * https://refactoring.guru/es/design-patterns/builder
 */



class Computer {
    public cpu: string = 'cpu - not defined';
    public ram: string = 'ram - not defined';
    public storage: string = 'storage - not defined';
    public gpu?: string;

    displayConfiguration() {
        console.log(`Configuracion de la computadora
            CPU: ${this.cpu}
            RAM: ${this.ram}
            Storage: ${this.storage}
            GPU: ${this.gpu ?? 'No tiene gpu'}
            `);
    }


}

class ComputerBuilder {


    private computer: Computer;

    constructor(

    ) {
        this.computer = new Computer();
    }


    setCPU(cpu: string): ComputerBuilder {
        this.computer.cpu = cpu;
        return this
    }


    setRAM(ram: string) {

        this.computer.ram = ram;
        return this

    }

    setStorage(storage: string) {

        this.computer.storage = storage;
        return this

    }


    setGPU(gpu: string) {
        this.computer.gpu = gpu
        return this;
    }


    build() {
        return this.computer
    }



}

function main() {

    const basicComputer = new ComputerBuilder().setCPU('Intel Core 2 Dúo').setRAM('4GB').setStorage('256GB').build();

    console.log('%cBasic computer:', COLORS.blue);
    basicComputer.displayConfiguration();

    const gamingComputer = new ComputerBuilder().setCPU('Ryzen 5 5000').setRAM('8GB').setGPU('AMD').setStorage('500GB').build();

    console.log('%cGaming Computer:', COLORS.purple);
    gamingComputer.displayConfiguration();

}

main();