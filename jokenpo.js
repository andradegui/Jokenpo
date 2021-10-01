let player = {
    vitorias: 0,
    escolhaPlayer: "",
    buscaEscolhaJokenpo: function () {
        let select = document.getElementById('escolhaJokenpo');
        this.escolhaPlayer = select.options[select.selectedIndex].value;
        this.imprimir();

    },
    imprimir: function () {
        document.getElementById('escolhaPlayer').innerText = this.escolhaPlayer;
        document.getElementById('vitoriasPlayer1').innerText = this.vitorias;
    },
    ganhouRodada: function () {
        this.vitorias += 1;
        this.imprimir();
    }
}

let computer = {
    vitorias: 0,
    escolha: ['Pedra', 'Papel', 'Tesoura'],
    escolhaComputer: "",
    buscaEscolhaJokenpo: function () {

        this.escolhaComputer = this.escolha[Math.floor(Math.random() * 2)];


        this.imprimir();


    },
    imprimir: function () {
        document.getElementById('escolhaComputer').innerText = this.escolhaComputer;
        document.getElementById('vitoriasComputer').innerText = this.vitorias;

    },
    ganhouRodada: function () {
        this.vitorias += 1;
        this.imprimir();
    }
}

let juiz = {
    ganhadorPartida: "",
    regrasJogo: function () {

        //EMPATES
        if (player.escolhaPlayer == 'Papel' && computer.escolhaComputer == 'Papel') {
            this.ganhadorPartida = "Empate";
        }
        else if (player.escolhaPlayer == 'Pedra' && computer.escolhaComputer == 'Pedra') {
            this.ganhadorPartida = "Empate";
        }
        else if (player.escolhaPlayer == 'Tesoura' && computer.escolhaComputer == 'Tesoura') {
            this.ganhadorPartida = "Empate";
        }
        //PLAYER WINS
        else if (player.escolhaPlayer == 'Papel' && computer.escolhaComputer == 'Pedra') {
            player.ganhouRodada();
            this.ganhadorPartida = "Player";
        }
        else if (player.escolhaPlayer == 'Tesoura' && computer.escolhaComputer == 'Papel') {

            player.ganhouRodada();
            this.ganhadorPartida = "Player";
        }
        else if (player.escolhaPlayer == 'Pedra' && computer.escolhaComputer == 'Tesoura') {

            player.ganhouRodada();
            this.ganhadorPartida = "Player";
        }
        //COMPUTER WINS
        else if (player.escolhaPlayer == 'Pedra' && computer.escolhaComputer == 'Papel') {

            computer.ganhouRodada();
            this.ganhadorPartida = "Computer";
        }
        else if (player.escolhaPlayer == 'Papel' && computer.escolhaComputer == 'Tesoura') {

            this.ganhadorPartida = "Computer";
            computer.ganhouRodada();
        }
        else if (player.escolhaPlayer == 'Tesoura' && computer.escolhaComputer == 'Pedra') {

            this.ganhadorPartida = "Computer";
            computer.ganhouRodada();
        }


        this.imprimir();
    },

    imprimir: function () {
        document.getElementById('vencedor').innerText = this.ganhadorPartida;
    }
}

let jokenpo = {
    historicoPartidas: [],
    jogar: function () {

        player.buscaEscolhaJokenpo();
        computer.buscaEscolhaJokenpo();

        juiz.regrasJogo();

        let saveChose = {
            escolhaComputer: computer.escolhaComputer,
            escolhaPlayer: player.escolhaPlayer,
            ganhadorPartida: juiz.ganhadorPartida,
            NumeroPartida: this.historicoPartidas.length
        }
        jokenpo.historicoPartidas.push(saveChose);

        let table = document.getElementById('tabela').getElementsByTagName('tbody')[0];
        

        for (let i = 0; i < this.historicoPartidas.length; i++) {

            table.innerHTML += this.criaLinha(this.historicoPartidas[i]);
            
            
        }

       
    },

    criaLinha: function (objeto) {
        return `<tr>
                    <td>${objeto.NumeroPartida}</td>
                    <td>${objeto.escolhaPlayer}</td>
                    <td>${objeto.escolhaComputer}</td>    
                    <td>${objeto.ganhadorPartida}</td>    
                </tr>`;
    }

}

