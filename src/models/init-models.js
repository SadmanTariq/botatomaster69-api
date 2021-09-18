var DataTypes = require("sequelize").DataTypes;
var _Response = require("./response");
var _Trigger = require("./trigger");
var _UserAccount = require("./user-account");

function initModels(sequelize) {
    var Response = _Response(sequelize, DataTypes);
    var Trigger = _Trigger(sequelize, DataTypes);
    var UserAccount = _UserAccount(sequelize, DataTypes);

    Response.belongsTo(Trigger, { as: "triggerTrigger", foreignKey: "trigger" });
    Trigger.hasMany(Response, { as: "responses", foreignKey: "trigger" });
    Trigger.belongsTo(UserAccount, { as: "authorUserAccount", foreignKey: "author" });
    UserAccount.hasMany(Trigger, { as: "triggers", foreignKey: "author" });

    return {
        Response,
        Trigger,
        UserAccount,
    };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
