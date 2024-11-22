import express from 'express';
import ModelClient from '@azure-rest/ai-inference';
import { AzureKeyCredential } from '@azure/core-auth';
import dotenv from 'dotenv';

// Carrega as variáveis de ambiente
dotenv.config();

// Configurações do servidor
const app = express();
const port = process.env.PORT || 3000;

// Token da Azure e modelo
const token = process.env["API_GITHUB_TOKEN"];
const endpoint = "https://models.inference.ai.azure.com"; // Endpoint da Azure
const modelName = "gpt-4o-mini"; // Modelo utilizado

// Rota para receber o conteúdo do usuário e retornar a resposta da Gabi-GPT
app.use(express.json());

app.post('/chat', async (req, res) => {
    try {
        const userMessage = req.body.message;
        
        const client = new ModelClient(endpoint, new AzureKeyCredential(token));
        
        const response = await client.path("/chat/completions").post({
            body: {
                messages: [
                    { role: "system", content: "Você é Gabi-GPT, uma assistente útil e motivadora." },
                    { role: "user", content: userMessage }
                ],
                temperature: 1.0,
                top_p: 1.0,
                max_tokens: 1000,
                model: modelName
            }
        });

        if (response.status !== "200") {
            return res.status(500).send(response.body.error);
        }

        // Envia a resposta de volta ao cliente
        return res.json({
            response: response.body.choices[0].message.content
        });
    } catch (err) {
        console.error("Erro ao processar a mensagem:", err);
        return res.status(500).send("Erro ao processar a mensagem.");
    }
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});