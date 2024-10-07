import React from 'react';

const Dashboard = () => {
  return (
    <section>
      <article>
        <h3>Plataforma em Desenvolvimento</h3>
        <h3>Aguarde o Lançamento!</h3>
        <p> </p>
        <img 
          src="assets/desenvolvimento.png" 
          alt="Plataforma em Desenvolvimento" 
          className="development-image" 
          style={{ width: '100%', maxWidth: '600px', height: 'auto' }} 
        />
        <p> </p>
        <p>A plataforma está em fase de desenvolvimento, sendo construida da melhor forma possível para proporcionar a melhor experiência às participantes, aguarde o lançamento! 🔥 </p>
      </article>
      <div className="btn-container">
        <a href="/">
          <button className="btn-know">
            Voltar ao início
          </button>
        </a>
      </div>
      <div className="btn-container">
        <a href="slim">
          <button className="btn-next">
            Saiba Mais
          </button>
        </a>
      </div>
      <div className="btn-container">
        <a href="https://t.me/projetosuperslimbot">
          <button className="btn-know">
            Conversar com a Slim IA no Telegram
          </button>
        </a>
      </div>
    </section>
  );
};

export default Dashboard;