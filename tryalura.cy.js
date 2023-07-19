describe("Alura", () =>{

    beforeEach(() =>{
        cy.visit("https://www.alura.com.br");       
    })
   
    it('verifica que está no site correto',() =>{
        cy.get('.header__nav--logo > img').click();
    })

    it('faz login', () =>{
        cy.contains('a', 'Matricule-se').click();
        cy.contains('a', 'Entrar').click();
        cy.contains('h1',('Já estuda com a gente?'));
    })
})
