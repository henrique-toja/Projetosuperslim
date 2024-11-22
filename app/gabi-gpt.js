import ModelClient from "@azure-rest/ai-inference";
import { AzureKeyCredential } from "@azure/core-auth";
import dotenv from 'dotenv';

// Carrega variáveis de ambiente
dotenv.config();

// Token configurado no ambiente
const token = process.env["API_GITHUB_TOKEN"]; 
const endpoint = "https://models.inference.ai.azure.com"; // Endpoint da Azure
const modelName = "gpt-4o-mini"; // Modelo utilizado

export async function main() {
    try {
        // Inicializa o cliente com o endpoint e a chave de acesso
        const client = new ModelClient(endpoint, new AzureKeyCredential(token));

        // Faz uma chamada à API para obter a resposta
        const response = await client.path("/chat/completions").post({
            body: {
                messages: [
                    { role: "system", content: "Você é Gabi-GPT, uma assistente útil e motivadora." },
                    { role: "user", content: "Quais são os melhores exercícios para perder peso?" }
                ],
                temperature: 1.0,
                top_p: 1.0,
                max_tokens: 1000,
                model: modelName
            }
        });

        // Verifica o status da resposta
        if (response.status !== "200") {
            throw response.body.error;
        }

        // Exibe o conteúdo retornado pela API
        console.log("Resposta da Gabi-GPT:", response.body.choices[0].message.content);
    } catch (err) {
        console.error("Erro ao executar o exemplo:", err);
    }
}

// Executa a função principal
main().catch(console.error);