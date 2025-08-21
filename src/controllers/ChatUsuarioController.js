const MasterController = require("./MasterController");

class ChatUsuarioController extends MasterController {
    constructor() {
        super('Chat_Usuario');
    }
}

module.exports = new ChatUsuarioController();
