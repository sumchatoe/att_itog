describe("select box", () => {
  it("should load website with selectbox", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false;
    });
    cy.visit("https://horo.mail.ru/horoscope/druid");
  });
  
  it('.click() - click on a DOM element', () => {
    // https://on.cypress.io/click
cy.get('.button').contains('Определить знак гороскопа').click()
  })  
})