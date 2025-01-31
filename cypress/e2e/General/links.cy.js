describe('Tests if all Links are reachable and render properly', () => {
  it('Test if Home link works', () => {
    cy.visit('/')
    cy.get('[data-testid="main-section"]').should('exist')
    cy.get('.hero-container h1').should('have.text', 'Welcome to Toddler World')
    cy.get('.button-login').should('have.text', 'Find out more!')
  })

  it('Test if About link works', () => {
    cy.visit('/about-us')
    cy.get('[data-testid="about-container"]').should('exist')
    cy.get('.about-container .heading').should('have.text', 'About us')
    cy.get('.about-container .about-section-1 .about-text h1').should('have.text', 'Our Team')
    cy.get('.about-container').find('img').should('have.length', 3)
    cy.get('.about-container').find('button').should('have.length', 3)
  })

  it('Test if Activities link works', () => {
    cy.visit('/activities')
    cy.get('[data-testid="activities-container"]').should('exist')
    cy.get('.activities-container .heading').should('have.text', 'Our Activities')
    cy.get('.activities-container').find('img').should('have.length', 1)
    cy.get('.left-aligned-activities > p > ul > li').should('have.length', 11)
  })

  it('Test if Admissions link works', () => {
    cy.visit('/admissions')
    cy.get('[data-testid="admissions-container"]').should('exist')
    cy.get('.admissions-container .heading').should('have.text', 'Admissions')
    cy.get('.admissions-container').find('img').should('have.length', 1)
    cy.get('.left-aligned-admissions > p > ul > li').should('have.length', 3)
  })

  it('Test if Careers link works', () => {
    cy.visit('/careers')
    cy.get('.heading-careers').should('exist')
    cy.get('.heading-careers h1').should('have.text', 'CAREERS')
    cy.get('.heading-careers h2').should('have.text', 'SEND YOUR DETAILS')
    cy.get('.careers-form iframe').should('not.be.undefined')
    cy.get('.careers-form iframe').should('have.attr', 'src', 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSd5JQ_npNHs9jCVW4oVfrLS4qybFBK8vU6Op6Y70fm8qp7uGw/formResponse?embedded=true')
  })

  it('Test if Contact Us link works', () => {
    cy.visit('/contact-us')
    cy.get('.heading-contactus').should('exist')
    cy.get('.heading-contactus h1').should('have.text', 'Contact Us')
  })

  it('Test if Environment link works', () => {
    cy.visit('/our-environment')
    cy.get('.our-environment-container').should('exist')
    cy.get('.our-environment-container h1').should('have.text', 'Our Environment')
    cy.get('.our-environment-container').find('img').should('have.length', 1)
  })

  it('Test if the Not Found link works', () => {
    cy.visit('/sfajbs') // random link
    cy.get('.error-page-container h1').should('have.text', 'Lost your Way?')
    cy.get('.error-page-container').find('img').should('have.length', 1)
  })

  it('Test if the nursery link works', () => {
    cy.visit('/nursery')
    cy.get('.heading-nursery h1').should('have.text', 'NURSERY (3 - 4 YEARS)')
    cy.get('.heading-nursery').find('img').should('have.length', 1)
    cy.get('.right-aligned-nursery h1').should('have.text', 'Learn More')
  })

  it('Test if the parent partnership link works', () => {
    cy.visit('/parent-partnership')
    cy.get('.parent-partnership-container h1').should('have.text', 'Parent Partnership')
    cy.get('.parent-partnership-container').find('img').should('have.length', 1)
  })

  it('Test if the Play Equipment link works', () => {
    cy.visit('/play-equipment')
    cy.get('.play-equipment-container h1').should('have.text', 'Our Facilities include...')
    cy.get('.play-equipment-container .card ul').should('have.length', 2)
    cy.get('.play-equipment-container .card ul .item').should('have.length', 6)
  })

  it('Test if the Play Group link works', () => {
    cy.visit('/play-group')
    cy.get('.heading-playgroup h1').should('have.text', 'PLAY GROUP (18-24 MONTHS)')
    cy.get('.heading-playgroup').find('img').should('have.length', 1)
    cy.get('.right-aligned-playgroup h1').should('have.text', 'Learn More')
  })

  it('Test if the Policies and Procedures link works', () => {
    cy.visit('/policies-procedures')
    cy.get('.policies-procedures-container h1').should('have.text', 'Policies and Procedures')
    cy.get('.policies-procedures-container').find('img').should('have.length', 1)
  })

  it('Test if the Pre Nursery link works', () => {
    cy.visit('/pre-nursery')
    cy.get('.heading-prenursery h1').should('have.text', 'PRE NURSERY (2 - 3 YEARS)')
    cy.get('.heading-prenursery').find('img').should('have.length', 1)
  })

  it('Test if the Programmes link works', () => {
    cy.visit('/programmes')
    cy.get('.programmes-container h2').should('have.text', 'Our Programmes')
    cy.get('.programmes-cards-container ul').should('have.length', 1)
    cy.get('.programmes-cards-container ul li').should('have.length', 2)
  })

  it('Test if the School Transitions link works', () => {
    cy.visit('/school-transitions')
    cy.get('.heading-school-transitions h1').should('have.text', 'SCHOOL TRANSITIONS')
    cy.get('.right-aligned-school-transitions h1').should('have.text', 'Facts')
  })

  it('Test if the Team link works', () => {
    cy.visit('/our-team')
    cy.get('.our-team-container h1').should('have.text', 'Our Team')
    cy.get('.our-team-container').find('img').should('have.length', 1)
  })

  it('Test if the Welcome link works', () => {
    cy.visit('/welcome')
    cy.get('.welcome-container h1').should('have.text', 'Thank you for your interest in Toddler World.')
    cy.get('.welcome-container').find('img').should('have.length', 1)
  })
})
