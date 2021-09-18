const Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    return Response.init(sequelize, DataTypes);
};

class Response extends Sequelize.Model {
    static init(sequelize, DataTypes) {
        super.init({
            id: {
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            response: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            asReply: {
                type: DataTypes.BOOLEAN,
                allowNull: true,
                defaultValue: false,
                field: "as_reply"
            },
            bias: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 1
            },
            trigger: {
                type: DataTypes.INTEGER,
                allowNull: true,
                references: {
                    model: "trigger",
                    key: "id"
                }
            }
        }, {
            sequelize,
            tableName: "response",
            schema: "public",
            timestamps: false,
            indexes: [
                {
                    name: "response_pkey",
                    unique: true,
                    fields: [
                        { name: "id" },
                    ]
                },
            ]
        });
        return Response;
    }
}
