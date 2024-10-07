import React from 'react';

const ComoParticipar = () => {
  return (
    <section>
      <article>
        <h3>Como participar?</h3>
        <p>Para participar do Projeto Super Slim, o processo é simples e rápido. é necessário preencher as seguintes informações:</p>
        <ul>
          <li>Entrar com Google/Microsoft/Apple/Telegram</li>
          <li>Criar um Nome de usuário</li>
          <li>Criar uma Senha</li>
          <li>Idade</li>
          <li>Altura</li>
          <li>Peso atual</li>
        </ul>
        <p>Após a inscrição concluída, será liberado o acesso à prova de dedicação.</p>
      </article>
      <div className="btn-container">
        <a href="prova-dedicacao">
          <button className="btn-next">O que é a prova de dedicação?</button>
        </a>
      </div>
    </section>
  );
};

export default ComoParticipar;