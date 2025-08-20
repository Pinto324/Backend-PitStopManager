const MasterController = require("./MasterController");

class RolController extends MasterController{
    constructor() {
        super('Rol');
      }
}

module.exports = new RolController();