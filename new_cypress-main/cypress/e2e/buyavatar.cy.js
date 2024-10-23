describe('Покупка аватара', function () {

    describe('Покупка аватара', function () {                                // название набора тестов
        it('e2e тест на покупку нового аватара для тренера', function () {   // название теста
             cy.visit('https://pokemonbattle.ru/');                          // переходим на сайт https://pokemonbattle.ru/
             cy.get('input[type="email"]').type('USER_LOGIN');               // вводим логин
             cy.get('input[type="password"]').type('USER_PASSWORD');         // вводим пароль
             cy.get('button[type="submit"]').click();                        // нажимаем кнопку Подтвердить
             cy.wait(2000);
             cy.get('.header__container > .header__id').click({ force: true }); // Клик в шапке на аву тренера
             cy.wait(2000);
             cy.get('[href="/shop"]').click();                               // нажимаем кнопку Магазин
             cy.wait(2000);
             cy.get('.available > button').first().click({ force: true });   // кликаем Купить у первого доступного аватара
             cy.wait(2000);
             cy.get('.credit').type('cartnumber');                     // вводим номер карты
             cy.get('.k_input_ccv').type('code');                             // вводим CVV карты
             cy.get('.k_input_date').type('exp_date');                           // вводим срок действия карты
             cy.get('.k_input_name').type('Cardholder');                           // вводим имя владельца действия карты
             cy.get('.pay-btn').click();                                     // нажимаем кнопку Оплатить
             cy.wait(2000);
             cy.get('#cardnumber').type('code');                            // вводим код подтверждения СМС
             cy.wait(2000);
             cy.get('.payment__submit-button').click();                      // нажимаем кнопку Отправить
             cy.wait(2000);
             cy.contains('Покупка прошла успешно').should('be.visible');     // проверяем наличие и видимость сообщения о успешной покупке
         });
     });
    
 }) 
 //Убрал все данные владельца карты, а так-же логин и пароль пользователя. Если ввести их то все работает, честное слово=)