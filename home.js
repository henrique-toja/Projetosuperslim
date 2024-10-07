import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = (page) => {
    navigate(page);
  };

  return (
    <div>
      <section>
        <h3>Projeto Super Slim</h3>
        <p>O Projeto Super Slim não se resume apenas à perda de peso, mas sim à construção de uma mentalidade forte e resiliente para a adoção de hábitos saudáveis que permanecem ao longo da vida.</p>
      </section>

      <section>
        <h3>Plataforma de Emagrecimento Feminino</h3>
        <p>Ao alcançar o peso ideal, espera-se que a participante NUNCA MAIS precise participar do Projeto Super Slim. Portanto, após concluir sua jornada de emagrecimento, o acesso ao projeto é bloqueado, podendo ser restaurado apenas mediante solicitação. As conquistas e pontuações, no entanto, permanecem no ranking, servindo de inspiração para outras participantes que ainda estão na jornada.</p>
      </section>

      <div className="btn-container">
        <button className="btn-know" onClick={() => handleButtonClick('/slim')}>Saiba Mais</button>
        <button className="btn-next" onClick={() => handleButtonClick('/login')}>🔥 Entrar 🔥</button>
        <button className="btn-know" onClick={() => window.open('https://t.me/projetosuperslimbot', '_blank')}>Conversar com a Slim IA no Telegram</button>
      </div>
    </div>
  );
};

export default Home;
