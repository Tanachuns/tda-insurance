'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Packages",[
      {
        name: "tier 1 general",
        cost: 20000,
        descript: "test desp",
        picture: 'url',
        type: ["bus","truck","super_car"]
      }],{});
  
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Packages", null, {});
  }
};
