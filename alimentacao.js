import React from 'react';

const Alimentacao = () => {
  return (
    <section>
      <article>
        <h3>O que é o Pilar da Alimentação?</h3>
        <p>O Projeto Super Slim rejeita a ideia de dietas excessivamente restritivas. Ao invés disso, promove o equilíbrio nutricional como chave para o emagrecimento sustentável.</p>
        <p>A plataforma oferece orientações que incentivam as participantes a fazerem escolhas alimentares que se alinhem com suas preferências e necessidades, priorizando a ingestão de proteínas e a moderação no consumo de doces e gorduras.</p>
        <p>O objetivo é permitir que cada mulher construa habitos alimentares agradáveis e saudáveis que sejam viáveis a longo prazo.</p>
      </article>
      <div className="btn-container">
        <a href="movimentacao">
          <button className="btn-next">3° Pilar: Movimentação</button>
        </a>
      </div>
    </section>
  );
};

export default Alimentacao;