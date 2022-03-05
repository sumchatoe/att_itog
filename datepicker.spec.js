describe("select box", () => {
  it("should load website with selectbox", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false;
    });
    cy.visit("https://horo.mail.ru/horoscope/druid");
  });
  it("should select an option from the first select box", () => {
    //choose first dropdown by index (eq(0))
cy.get('select').eq(0)
  .select('02', {force: true}).should('have.value', '02')
  });
  it("should select an option from the second select box", () => {
    //choose second dropdown by index (eq(1))
cy.get('select').eq(1)
  .select('февраля', {force: true}).should('have.value', '02')
  });
  it("should select an option from the third select box", () => {
    //choose first dropdown by index (eq(2))
cy.get('select').eq(2)
  .select('1990', {force: true}).should('have.value', '1990')
  });
});

/*Because you have more than one select element in your page, 
cypress don't know to which one of the this elements you want to apply the action, 
therefore throwing an error instead.

You should add eq to your code
for example if you want to check the first select element write:
cy.get('select').eq(0).select('1');*/