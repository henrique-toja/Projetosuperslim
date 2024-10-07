import React from 'react';

const Slim = () => {
  return (
    <section>
      <article>
        <h3>O que é o Projeto Super Slim?</h3>
        <p>O Projeto Super Slim é uma plataforma e comunidade gratuita que transforma o emagrecimento feminino em uma experiência leve e prazerosa. Com uma abordagem focada em resultados sustentáveis, ajudamos você a alcançar seus objetivos sem sacrifícios, apenas com a mudança de hábitos saudáveis.</p>
        <p>Para isso, reunimos tudo o que você precisa em 5 pilares essenciais: Mentalidade, Alimentação, Movimentação, Suplementação e Comunicação. Para que o processo de emagrecimento seja saudável, eficiente e agradável.</p>
      </article>
      <div className="btn-container">
        <a href="pilares">
          <button className="btn-next">Importância dos 5 pilares</button>
        </a>
      </div>
    </section>
  );
};

export default Slim;