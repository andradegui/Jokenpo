let player = {
    escolha:"",       
    buscaEscolhaJokenpo:function(){
        let select = document.getElementById('escolhaJokenpo');
        this.escolha = select.options[select.selectedIndex].value;
        this.imprimir();
       
    },
    imprimir:function(){
        document.getElementById('escolhaPlayer').innerText = this.escolha;
    }
}

let computer = {
    escolha:['Pedra', 'Papel', 'Tesoura'],       
    buscaEscolhaJokenpo:function(){
        this.escolha.sort();
        this.imprimir();
       
    },
    imprimir:function(){
        document.getElementById('escolhaComputer').innerText = this.escolha;
    }
}

let jokenpo = {
    jogar:function(){
        player.buscaEscolhaJokenpo();
        computer.buscaEscolhaJokenpo();
    }

}

