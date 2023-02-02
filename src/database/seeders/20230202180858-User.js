'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => await queryInterface.bulkInsert('Users',
    [
      {
        id: 1,
        email: 'email@legal.com',
        firstName: 'Primeiro',
        secondName: 'Treinador',
        password: 'fhgfhwgiugigjkkfjkd'
      },
      {
        id: 2,
        email: 'segundo@legal2.com',
        firstName: 'Segundo',
        secondName: 'Treinador',
        password: 'fhgfhwgiugs6713kgk7'
      },
      {
        id: 3,
        email: 'terceiro@legal2.com',
        firstName: 'Terceiro',
        secondName: 'Treinador',
        password: 'fhgfhwgiugs67'
      },
      {
        id: 4,
        email: 'quarto@legal2.com',
        firstName: 'Quarto',
        secondName: 'Treinador',
        password: 'halkdç2928tqteqn'
      },
    ], { timestamps: false }),

  down: async (queryInterface, _Sequelize) => await queryInterface.bulkDelete('Users', null, {})
};
