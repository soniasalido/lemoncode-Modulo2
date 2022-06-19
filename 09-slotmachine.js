// Máquina tragaperras
// He creado un console log que no pide el ejercicio para ver si el funcionamiento del programa es correcto


// ************************************ CLASE SlotMachine ************************************
class SlothMachine {
    /**** Constructor de la clase ************/
    constructor() {
        this.saldo = 0;
    }


    /***** Métodos de la clase ***************/
    // Método getSaldo
    getSaldo() {
        return this.saldo;
    }

    // Método setSaldo
    setSaldo(saldo) {
        this.saldo = saldo;
    }


    // Métodos para generar tres booleanos aleatorios
    ruleta = () => Math.random() >= 0.5;
    tirada = () => this.ruleta() && this.ruleta() && this.ruleta();


    // Método ganar: comprueba si el jugador ha ganado o no --> mensaje "Congratulations" y se reinicia el saldo
    win = () => {
        console.log("************************* Congratulations!!!. You won", this.getSaldo(), " coins!!");
        this.setSaldo(0);
    }


    // Método perder: comprueba si el jugador ha perdido o no --> mensaje "Good luck next time" y se incrementa saldo
    lose = () => {
        console.log("El saldo actual de la máquina es: ", this.getSaldo());
        let saldoAcumulado = this.getSaldo();
        saldoAcumulado += 1;
        this.setSaldo(saldoAcumulado);
        console.log("El saldo de la máquina tras perder es: ", this.getSaldo());
        console.log("Good luck next time!!");
    }


    // Método jugar: comprueba si el jugador ha ganado o perdido
    jugarExtendido = () => {
        if (this.tirada()) {
            this.win();
        } else {
            this.lose();
        }
    }

    // Forma abreviada del método jugarExtendido
    jugar = () => {
        this.tirada() ? this.win() : this.lose()
    };

}


// ************************************ INSTANCIA de la Clase SlotMachine ************************************
const machine1 = new SlothMachine();

machine1.jugar();
machine1.jugar();
machine1.jugar();
machine1.jugar();
machine1.jugar();
machine1.jugar();
machine1.jugar();
machine1.jugar();
machine1.jugar();
machine1.jugar();
machine1.jugar();
machine1.jugar();
machine1.jugar();
machine1.jugar();
machine1.jugar();
machine1.jugar();
machine1.jugar();
machine1.jugar();
machine1.jugar();
machine1.jugar();

