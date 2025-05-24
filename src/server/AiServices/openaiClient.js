const OpenAI = require("openai");

class OpenAIClient {
  /**
   * @param {string} apiKey - Ta clé API OpenAI
   * @param {string|null} baseUrl - URL personnalisée (optionnelle)
   */
  constructor(apiKey, baseUrl = null) {
    this.apiKey = apiKey;
    this.baseUrl = baseUrl;
    this.model = "gpt-4o-mini"; // modèle par défaut

    this._initClient();
  }

  _initClient() {
    const config = { apiKey: this.apiKey };
    if (this.baseUrl) {
      config.baseURL = this.baseUrl; // note : la clé est baseURL, pas basePath
    }
    this.client = new OpenAI(config);
  }

  /**
   * Change le modèle et éventuellement l’URL de base
   * @param {string} modelName 
   * @param {string|null} baseUrl 
   */
  setModel(modelName, baseUrl = null) {
    this.model = modelName;
    if (baseUrl !== null && baseUrl !== this.baseUrl) {
      this.baseUrl = baseUrl;
      this._initClient(); // réinitialise le client avec la nouvelle URL
    }
  }

  /**
   * Crée une completion chat
   * @param {Array} messages 
   * @param {Object} options 
   * @returns {Promise}
   */
  async createChatCompletion(messages, options = {}) {
    return this.client.chat.completions.create({
      model: this.model,
      messages,
      ...options,
    });
  }
}

module.exports = new OpenAIClient(process.env.MODEL_API_KEY || '');
