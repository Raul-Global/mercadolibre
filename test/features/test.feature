Feature:   Pruebas automatizadas con Cucumber y Gherkin
  
         Scenario: Prueba 1: Test de prueba
            Given Enter the website
                When Select Mexico as a country
                Then Search for the term playstation 5
                Then Filter by condition Nuevos
                Then Filter by location Cdmx 
                #Then Order by mayor a menor precio
                Then Obtain the name and the price of the first 5 products
                Then Print these products in the console