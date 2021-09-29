let player = {
    escolha: "",
    buscaEscolhaJokenpo: function () {
        let select = document.getElementById('escolhaJokenpo');
        this.escolha = select.options[select.selectedIndex].value;
        this.imprimir();

    },
    imprimir: function () {
        document.getElementById('escolhaPlayer').innerText = this.escolha;
    }
}

let computer = {
    escolha: [0, 1, 2],
    escolhaComputer: "",
    buscaEscolhaJokenpo: function () {

        this.escolhaComputer = this.escolha[Math.floor(Math.random() * this.escolha.length)];

        switch (this.escolhaComputer) {
            case 0:
                this.escolhaComputer = "Pedra";
                break;
            case 1:
                this.escolhaComputer = "Papel";
                break;
            case 2:
                this.escolhaComputer = "Tesoura";
                break;
        };
        this.imprimir();

    },
    imprimir: function () {
        document.getElementById('escolhaComputer').innerText = this.escolhaComputer;
    }
}

let jokenpo = {
    jogar: function () {
        player.buscaEscolhaJokenpo();
        computer.buscaEscolhaJokenpo();
    }

}

