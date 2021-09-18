const Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    return UserAccount.init(sequelize, DataTypes);
};

class UserAccount extends Sequelize.Model {
    static init(sequelize, DataTypes) {
        super.init({
            id: {
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            name: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            discordUid: {
                type: DataTypes.BIGINT,
                allowNull: true,
                field: "discord_uid"
            },
            admin: {
                type: DataTypes.BOOLEAN,
                allowNull: true,
                defaultValue: false
            }
        }, {
            sequelize,
            tableName: "user_account",
            schema: "public",
            timestamps: false,
            indexes: [
                {
                    name: "user_account_pkey",
                    unique: true,
                    fields: [
                        { name: "id" },
                    ]
                },
            ]
        });
        return UserAccount;
    }
}
