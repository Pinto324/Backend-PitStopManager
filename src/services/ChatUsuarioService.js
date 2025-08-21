const ModelService = require("./ModelService");

class ChatUsuarioService extends ModelService {
  constructor() {
    super('Chat_Usuario');
  }
}

module.exports = new ChatUsuarioService();
