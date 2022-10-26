const Model= require("../models")

exports.addUser=(data)=>{
    return Model.userModel.create(data)
}
exports.gets=()=>{
    return Model.userModel.findAndCountAll({
        attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
    });
}

 