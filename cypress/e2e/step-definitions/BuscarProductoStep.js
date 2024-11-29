import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import HomeMercadoLibrePage from "../Pages/HomeMercadoLibrePage";
import ErrorMensajePage from "../Pages/ErrorMensajePage";
import CatalogoProductoPage from "../Pages/CatalogoProductoPage";

Given('Usuario abre la web de mercado Libre', () => {
  cy.visit("https://www.mercadolibre.com.pe/");
});
When('Usuario ingresa el producto {string} en el buscador', (producto) => {
  HomeMercadoLibrePage.escribirBusqueda(producto);
  HomeMercadoLibrePage.clickBuscar();
});
Then('Usuario visualiza todas las zapatillas marca puma', () => {
  CatalogoProductoPage.ValidarTituloExistente('Zapatillas puma');
});

Then('Usuario visualiza mensaje que no hay productos relacionados a la busqueda', () => {
  ErrorMensajePage.validarMensajeError('No hay publicaciones que coincidan con tu búsqueda.');
  ErrorMensajePage.validarMensajeError('Revisa la ortografía de la palabra.');
  ErrorMensajePage.validarMensajeError('Utiliza palabras más genéricas o menos palabras.');
  ErrorMensajePage.validarMensajeError('Navega por las categorías para encontrar un producto similar');

});