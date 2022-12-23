"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */ await queryInterface.bulkInsert(
      "Users",
      [
        {firstname:"kwan" ,
        lastname:"1234",
        address: "assadasfas",
        tel:"123456789",
        is_admin:false,
        username: "1",
        password: "1"
      }],{});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */ await queryInterface.bulkDelete("Users", null, {});
  },
};
