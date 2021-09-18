const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    return Trigger.init(sequelize, DataTypes);
};

class Trigger extends Sequelize.Model {
    static init(sequelize, DataTypes) {
        super.init({
            id: {
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            triggerHumanReadable: {
                type: DataTypes.TEXT,
                allowNull: false,
                field: "trigger_human_readable"
            },
            triggerRpn: {
                type: DataTypes.TEXT,
                allowNull: false,
                field: "trigger_rpn"
            },
            author: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: "user_account",
                    key: "id"
                }
            },
            createdOn: {
                type: DataTypes.DATE,
                allowNull: true,
                field: "created_on"
            },
            approved: {
                type: DataTypes.BOOLEAN,
                allowNull: true,
                defaultValue: false
            }
        }, {
            sequelize,
            tableName: "trigger",
            schema: "public",
            timestamps: false,
            indexes: [
                {
                    name: "trigger_pkey",
                    unique: true,
                    fields: [
                        { name: "id" },
                    ]
                },
            ]
        });
        return Trigger;
    }
}
