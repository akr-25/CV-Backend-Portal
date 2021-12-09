const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const AdminToGroup = sequelize.define('group_to_perm', {
  s_id: {
    type: DataTypes.BIGINT(9),
    primaryKey: true,
    references: { model: 'admin', key: 's_id' }
  },
  org_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: { model: 'organizations', key: 'org_id' }
  },
  group_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: { model: 'groups', key: 'group_id' }
  }
}, {
  tableName: 'admin_to_group'
});

module.exports = AdminToGroup;