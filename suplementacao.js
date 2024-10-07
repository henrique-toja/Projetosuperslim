import React from 'react';

const Suplementacao = () => {
  return (
    <section>
      <article>
        <h3>O que é o Pilar da Suplementação?</h3>
        <p>O Projeto Super Slim adota uma abordagem de apoio, não de dependência. A plataforma destaca a importância da suplementação, mostrando suas vantagens, mas sempre com a conscientização de que ela é opcional e complementar.</p>
        <p>Suplementos não substituem uma alimentação balanceada ou a prática de atividades físicas e não devem ser confundidos com medicamentos.</p>
        <p>A suplementação é apresentada de forma consciente, enfatizando a harmonia entre todos os elementos essenciais para a saúde e o bem-estar.</p>
      </article>
      <div className="btn-container">
        <a href="comunicacao">
          <button className="btn-next">4° Pilar: Comunicação</button>
        </a>
      </div>
    </section>
  );
};

export default Suplementacao;