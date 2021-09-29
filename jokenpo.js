let player = {
    vitorias: 0,
    escolha: "",
    buscaEscolhaJokenpo: function () {
        let select = document.getElementById('escolhaJokenpo');
        this.escolha = select.options[select.selectedIndex].value;
        this.imprimir();
    },
    imprimir: function () {
        document.getElementById('escolhaPlayer').innerText = this.escolha;
        document.getElementById('vitoriasPlayer1').innerText = this.vitorias;
    },
    ganhouRodada: function() {
        this.vitorias += 1;
        this.imprimir();
    }
}

let computer = {
    vitorias: 0,
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
        document.getElementById('vitoriasComputer').innerText = this.vitorias;
        
    },
    ganhouRodada: function() {
        this.vitorias += 1;
        this.imprimir();
    }
}

let juiz = {
    regrasJogo:function() {
        
        if(player.escolha == 'Papel' && computer.escolhaComputer == 'Papel'){
            alert('Empate!');
        }
        else if(player.escolha == 'Pedra' && computer.escolhaComputer == 'Pedra'){
            alert('Empate!');
        }
        else if(player.escolha == 'Tesoura' && computer.escolhaComputer == 'Tesoura'){
            alert('Empate!');
        }
        else if(player.escolha == 'Papel' && computer.escolhaComputer == 'Pedra'){
            alert('Player Wins!!!');
            player.ganhouRodada();
        }
        else if(player.escolha == 'Tesoura' && computer.escolhaComputer == 'Papel'){
            alert('Player Wins!!!');
            player.ganhouRodada();
        }
        else if(player.escolha == 'Pedra' && computer.escolhaComputer == 'Tesoura'){
            alert('Player Wins!!!');
            player.ganhouRodada();
        }
       
        else if(player.escolha == 'Pedra' && computer.escolhaComputer == 'Papel'){
            alert('Computer Wins!!!');
            computer.ganhouRodada();
        }
        else if(player.escolha == 'Papel' && computer.escolhaComputer == 'Tesoura'){
            alert('Computer Wins!!!');
            computer.ganhouRodada();
        }
        else if(player.escolha == 'Tesoura' && computer.escolhaComputer == 'Pedra'){
            alert('Player Wins!!!');
            computer.ganhouRodada();
        }
    }
}

let jokenpo = {
    jogar: function () {
        player.buscaEscolhaJokenpo();
        computer.buscaEscolhaJokenpo();

        juiz.regrasJogo();

        

       
       



    }

}

