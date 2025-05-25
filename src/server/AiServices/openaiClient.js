const OpenAI = require("openai");

class OpenAIClient {
  constructor(apiKey, baseUrl = null) {
    this.apiKey = apiKey;
    this.baseUrl = "https://generativelanguage.googleapis.com/v1beta/";
    this.model = "gemini-2.5-flash"; // modèle par défaut

    this._initClient();
  }

  _initClient() {
    const config = { apiKey: this.apiKey };
    if (this.baseUrl) {
      config.baseURL = this.baseUrl; // note : la clé est baseURL, pas basePath
    }
    this.client = new OpenAI(config);
  }

  setModel(modelName, baseUrl = null) {
    this.model = modelName;
    if (baseUrl !== null && baseUrl !== this.baseUrl) {
      this.baseUrl = "https://generativelanguage.googleapis.com/v1beta/";
      this._initClient(); // réinitialise le client avec la nouvelle URL
    }
  }

  async createChatCompletion(messages, options = {}) {
    return this.client.chat.completions.create({
      model: this.model,
      messages,
      ...options,
    });
  }
}

module.exports = new OpenAIClient(process.env.MODEL_API_KEY || 'AIzaSyD0phHq4PckAy8vLYlzkAnaHy4tdwT7rxA');
