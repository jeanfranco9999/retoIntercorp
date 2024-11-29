class HomeMercadoLibrePage{
    elementos = {
        inputBusqueda: () => cy.get('input#cb1-edit'),
        btnBuscar: () => cy.get('div[class="nav-icon-search"]')
    }

    escribirBusqueda(producto){
        this.elementos.inputBusqueda().type(producto);
    }
    clickBuscar(){
        this.elementos.btnBuscar().click();
    }
}
export default new HomeMercadoLibrePage();