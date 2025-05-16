function logado(){
    const email = document.querySelector('.input-email').value
    const user = document.querySelector('.input-password').value

    if(email && user){
        alert('Seja Bem Vindo ao MDS')
    } else {
        alert('Preencha os Campos vazios')
    }
    
}
