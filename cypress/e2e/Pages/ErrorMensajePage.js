class ErrorMensajePage {
    

    validarMensajeError(mensaje) {
        cy.contains(mensaje).should('be.visible');
    }
}

export default new ErrorMensajePage();