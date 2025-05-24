exports.availableTools = [
    {
      type: "function",
      function: {
        name: "calculator",
        description: "Effectue des calculs mathématiques",
        parameters: {
          type: "object",
          properties: {
            expression: {
              type: "string",
              description: "Expression mathématique à calculer (ex: '2 + 3 * 4')"
            }
          },
          required: ["expression"]
        }
      }
    },
    {
      type: "function", 
      function: {
        name: "get_weather",
        description: "Obtient la météo pour une ville donnée",
        parameters: {
          type: "object",
          properties: {
            city: {
              type: "string",
              description: "Nom de la ville"
            },
            unit: {
              type: "string",
              enum: ["celsius", "fahrenheit"],
              description: "Unité de température"
            }
          },
          required: ["city"]
        }
      }
    }
  ];
