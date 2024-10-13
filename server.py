from flask import Flask, request, jsonify
import os
import requests
from dotenv import load_dotenv

# Carregar variáveis de ambiente do .env
load_dotenv()

app = Flask(__name__)
port = 3000

@app.route('/api/chat', methods=['POST'])
def chat():
    user_message = request.json.get('userMessage')

    api_key = os.getenv("API_GITHUB_TOKEN")  # Carrega o token do ambiente
    endpoint = "https://models.inference.ai.azure.com/v1/chat/completions"
    model_name = "gpt-4o-mini"

    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {api_key}"
    }

    body = {
        "model": model_name,
        "messages": [
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": user_message}
        ],
        "max_tokens": 1000,
        "temperature": 1.0
    }

    try:
        response = requests.post(endpoint, headers=headers, json=body)
        response.raise_for_status()  # Lança um erro para respostas de erro
        data = response.json()
        return jsonify({"response": data['choices'][0]['message']['content']})  # Envia a resposta de volta para o frontend
    except Exception as e:
        print(f'Erro ao processar a requisição: {e}')
        return jsonify({"error": "Erro interno ao processar a requisição."}), 500

if __name__ == '__main__':
    app.run(port=port)
