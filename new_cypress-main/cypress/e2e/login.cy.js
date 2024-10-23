describe('Проверка авторизации', function () {


   it('Верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/');// зайти на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');//проверить цвет кнопки "забыли пароль"
        cy.get('#mail').type('german@dolnikov.ru');// выбрать прицелом поле логин, ввести значение правильный логин
        cy.get('#pass').type('iLoveqastudio1');// выбрать прицелом поле пароля ввести правильный пароль
        cy.get('#loginButton').click();// выбрать поле кнопку войти, добавить команду нажать
        cy.get('#messageHeader').contains('Авторизация прошла успешно');// проверить,что после авторизации виден текст соотв. тесту
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');// текст про авторизацию виден пользователю
        cy.get('#messageHeader').should('be.visible');// найти элемент прицелом крестик, значение чтобы был виден пользователю
    })
    it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/');// зайти на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');//проверить цвет кнопки "забыли пароль"
        cy.get('#mail').type('german@dolnikov.ru');// выбрать прицелом поле логин, ввести значение правильный логин
        cy.get('#pass').type('iLoveqastudio7');// выбрать прицелом поле пароля ввести неправильный пароль
        cy.get('#loginButton').click();// выбрать поле кнопку войти, добавить команду нажать
        cy.get('#messageHeader').contains('Такого логина или пароля нет');// проверить,что после авторизации виден текст соотв. тесту
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');// текст про авторизацию виден пользователю
        cy.get('#messageHeader').should('be.visible');// найти элемент прицелом крестик, значение чтобы был виден пользователю
    })

it('Верный логин без собачки и верный пароль', function () {
    cy.visit('https://login.qa.studio/');// зайти на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');//проверить цвет кнопки "забыли пароль"
    cy.get('#mail').type('germandolnikov.ru');// выбрать прицелом поле логин, ввести значение без собачки
    cy.get('#pass').type('iLoveqastudio1');// выбрать прицелом поле пароля ввести правильный пароль
    cy.get('#loginButton').click();// выбрать поле кнопку войти, добавить команду нажать
    cy.get('#messageHeader').contains('Нужно исправить проблему валидации');// проверить,что после авторизации виден текст соотв. тесту
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');// текст про авторизацию виден пользователю
    cy.get('#messageHeader').should('be.visible');
})
    
it('проверка восстановления пароля', function () {
    cy.visit('https://login.qa.studio/');// зайти на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');//проверить цвет кнопки "забыли пароль"
    cy.get('#forgotEmailButton').click();// выбрать кнопку восстановления, нажать на неё
    cy.get('#mailForgot').type('german@dolnikov.ru');    // выбрать поле ввести почту для восс ввести почту
    cy.get('#restoreEmailButton').click();// нажать на кнопку "отправить код"
    cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
    cy.get('#messageHeader').should('be.visible');// поле пароль отправлен
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');// крестик виден
})
})    


       //План
       //+Найти поле логин и ввести верный логин
       //+Найти поле пароль и ввести верный пароль
       //+Найти кнопку Войти и нажать её
       //+Проверить, что авторизация прошла успешно
