/// <reference types="cypress" />

let Chance = require('chance')
let chance = new Chance()


describe('Cadastro', () => {
    it('Cadastro efetuado com sucesso', () => {

        cy.visit("/")

        // Clicar btn "Sign In"
        cy.get('a[class="login"]').click()

        //Informar um e-mail para cadastro 
        cy.get('input#email_create').type(chance.email())


        //Clicar btn "Create an account"
        cy.get('#SubmitCreate').click()

        /*************************************
         *      YOUR PERSONAL INFORMATION
         *************************************/
        cy.wait(2000)

        cy.get('#id_gender2').check() // Mrs 
        cy.get('input[name="customer_firstname"]').type(chance.first()) //First name 
        cy.get('input[name="customer_lastname"]').type(chance.last()) // Last name
     //   cy.get('input#email').type(chance.email()) // email  
        cy.get('input#passwd').type("Teste@123") // Password 
        cy.get('select#days').select('16') // Days
        cy.get('select#months').select('January') // Months
        cy.get('select#years').select('1997') // Years
        cy.get('input#newsletter').check() // Newsletter 

        /*************************************
         *      YOUR ADDRESS
         *************************************/

        cy.get('input#firstname').type(chance.first())  // First Name 
        cy.get('input#lastname').type(chance.last())// Last Name
        cy.get('input#company').type(chance.company()) // Company 
        cy.get('input#address1').type(chance.address()) // Adress 
        cy.get('input#address2').type(chance.address()) // Adress 2
        cy.get('input#city').type(chance.city()) // City
        cy.get('select#id_state').select('Louisiana') // State
        cy.get('input#postcode').type(chance.zip()) // PostCode
        cy.get('textArea#other').type("Informação adicional Teste") // Additional Information
        cy.get('input#phone').type(chance.phone())
        cy.get('input#phone_mobile').type(chance.phone())
        cy.get('input#alias').type(chance.address())
        cy.get('button#submitAccount').click()


        /**********************
         *      Asserts
        ***********************/

        cy.url().should('to.equal','http://automationpractice.com/index.php?controller=my-account')
        cy.get('div#center_column').should('contain', 'Welcome to your account')


        
    });
});