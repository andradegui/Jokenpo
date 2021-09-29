let player = {
    escolhaPlayer:"",       
    buscaEscolhaJokenpo:function(){
        let select = document.getElementById('escolhaJokenpo');
        this.escolhaPlayer = select.options[select.selectedIndex].value;
       
    },
    imprimir:function(){
        this.escescolhaPlayer = document.getElementById('escolhaPlayer').value;
        
    },


}

let computer = {

}

let jokenpo = {

}

console.log(this.escolhaPlayer);
