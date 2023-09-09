'use strict';
const timestamps = {
  created_at: new Date(),
  updated_at: new Date(),
};

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    queryInterface.bulkInsert(
      'goods',
      [
        { id: 1, name: '商品 1', thumb_url: '1.png', shop_id: 1, ...timestamps },
        { id: 2, name: '商品 2', thumb_url: '2.png', shop_id: 1, ...timestamps },
        { id: 3, name: '商品 3', thumb_url: '3.png', shop_id: 1, ...timestamps },
        { id: 4, name: '商品 4', thumb_url: '4.png', shop_id: 1, ...timestamps },
      ],
      {},
    )
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
