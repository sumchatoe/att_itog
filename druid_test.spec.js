describe('select box', () => {
  it('should load website with selectbox', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })

    cy.visit('https://horo.mail.ru/horoscope/druid')
  })

  it('should select an option from the first select box', () => {
    //choose first dropdown by index (eq(0))
    cy.get('select').eq(0)
  .select('02', { force: true }).should('have.value', '02')
  })

  it('should select an option from the second select box', () => {
    //choose second dropdown by index (eq(1))
    cy.get('select').eq(1)
  .select('февраля', { force: true }).should('have.value', '02')
  })

  it('should select an option from the third select box', () => {
    //choose first dropdown by index (eq(2))
    cy.get('select').eq(2)
  .select('1990', { force: true }).should('have.value', '1990')
  })

  it('.click() - click on a DOM element', () => {
    // https://on.cypress.io/click
    cy.get('.button').contains('Определить знак гороскопа').click()
  })

  it('should load page with url ending 347', () => {
    // https://on.cypress.io/url
    cy.url().should('contains', 'https://horo.mail.ru/horoscope/druid/347/')
  })

  it('should contain string', () => {
    // https://on.cypress.io/get
    cy.get('.hdr__inner').should('contain', 'Кипарис').and('contain', 'Общее описание знака')
  })

  it('will check back link', () => {
    // https://on.cypress.io/click
    cy.get('.link__text').contains('Гороскоп друидов').click()
  })

  it('will check we are back on main druid', () => {
    // https://on.cypress.io/url
    cy.url().should('eq', 'https://horo.mail.ru/horoscope/druid/')
  })
})