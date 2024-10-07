import React from 'react';

const ProvaDedicacao = () => {
  return (
    <section>
      <article>
        <h3>O que é a Prova de Dedicação?</h3>
        <p>A Prova de Dedicação é a primeira etapa para se tornar oficialmente uma participante do Projeto Super Slim. Ela não mede apenas o conhecimento sobre a plataforma, mas também a disposição em embarcar nessa transformação pessoal.</p>
        <p>Antes de iniciar, você passará por um breve tutorial que explica como o projeto funciona, seus pilares e a importância de cada um deles. Após essa introdução, a Prova de Dedicação avalia sua compreensão do conteúdo e seu comprometimento em seguir as orientações, garantindo que você está preparada e motivada para alcançar seus objetivos de forma consistente e consciente.</p>
        <p>Concluir a Prova de Dedicação demonstra que você está pronta para se engajar de verdade, dedicando tempo e energia a cada etapa do processo. Com isso, você inicia a jornada com o pé direito, já com uma mentalidade positiva e um entendimento claro de como a plataforma pode ajudar você a conquistar suas metas com sucesso e determinação!</p>
      </article>
      <div className="btn-container">
        <a href="metas-objetivos">
          <button className="btn-next">Metas e Objetivos</button>
        </a>
      </div>
    </section>
  );
};

export default ProvaDedicacao;