from flask import Flask, request, jsonify
import os
from dotenv import load_dotenv
from openai import OpenAI

# Carregar variáveis de ambiente do .env
load_dotenv()

app = Flask(__name__)
port = 3000

@app.route('/api/chat', methods=['POST'])
def chat():
    user_message = request.json.get('userMessage')

    api_key = os.getenv("API_GITHUB_TOKEN")  # Carrega o token do ambiente
    endpoint = "https://models.inference.ai.azure.com"
    model_name = "gpt-4o-mini"

    client = OpenAI(
        base_url=endpoint,
        api_key=api_key,
    )

    try:
        response = client.chat.completions.create(
            messages=[
                {"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": user_message},
            ],
            temperature=1.0,
            max_tokens=1000,
            model=model_name
        )

        return jsonify({"response": response.choices[0].message.content})  # Envia a resposta de volta para o frontend
    except Exception as e:
        print(f'Erro ao processar a requisição: {e}')
        return jsonify({"error": "Erro interno ao processar a requisição."}), 500

if __name__ == '__main__':
    app.run(port=port)
