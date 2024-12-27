const retornaHora = (data) => {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Espera uma instância de Date');
    }
    
    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pr-BR', {
        hour12: false
    })
}

try {
    const data = new Date('01-01-1970 12:58:12')
    const hora = retornaHora()
    console.log(hora)
} catch (err) {
    // Tratar erro
} finally {
    console.log('Tenha um bom dia')
}
