Feature: Buscar productos en Mercado Libre

  Scenario: Buscar un producto por el buscador de Mercado Libre
    Given Usuario abre la web de mercado Libre
    When Usuario ingresa el producto "zapatillas puma" en el buscador
    Then Usuario visualiza todas las zapatillas marca puma

  Scenario: Buscar producto con caracteres especiales
    Given Usuario abre la web de mercado Libre
    When Usuario ingresa el producto "$$%%&&" en el buscador
    Then Usuario visualiza mensaje que no hay productos relacionados a la busqueda