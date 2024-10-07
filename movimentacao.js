import React from 'react';

const Movimentacao = () => {
  return (
    <section>
      <article>
        <h3>O que é o Pilar da Movimentação?</h3>
        <p>A prática de atividades físicas é um componente essencial do Projeto Super Slim.</p>
        <p>A plataforma incentiva as participantes a evitarem o sedentarismo, integrando atividades físicas naturalmente no dia a dia, sem a pressão de "ter que se exercitar".</p>
        <p>O objetivo é reconhecer oportunidades nas tarefas cotidianas para movimentar o corpo, tornando o exercício uma parte natural e agradável do estilo de vida individual.</p>
      </article>
      <div className="btn-container">
        <a href="suplementacao">
          <button className="btn-next">Próximo: Suplementação</button>
        </a>
      </div>
    </section>
  );
};

export default Movimentacao;