class CatologoProductoPage {
    elementos = {
        titulo : () => cy.get('h1.ui-search-breadcrumb__title'),
    }

    ValidarTituloExistente(nombreTitulo){ 
        this.elementos.titulo().contains(nombreTitulo).should('be.visible');
    }
}
export default new CatologoProductoPage();