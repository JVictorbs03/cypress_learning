

describe("Registrar-se corretamente", () =>{

    beforeEach(() =>{
        cy.visit("https://alura-fotos.herokuapp.com");       
    })
    it('verifica mensagens validacao', () =>{
        cy.contains('a', 'Register now').click();
        cy.get('input[formcontrolname="email"]').type('johnnycoke1@gmail.com');
        cy.get('input[formcontrolname="fullName"]').type('João V B Santana')
        cy.get('input[formcontrolname="userName"]').type('ujao')
        cy.get('input[formcontrolname="password"]').type('joao062442');
        cy.contains('button', 'Register').click();
    })
    it('Faz login',() =>{
        cy.contains('a', 'Please, login!').click();
        cy.get('input[formcontrolname="userName"]').type('ujao');
        cy.get('input[formcontrolname="password"]').type('joao062442');
        cy.contains('button', 'login').click();

    })
    it('Após Login', () =>{
        cy.get('input[rounded="search..."]').type('johnnycoke1@gmail.com');
    })
})