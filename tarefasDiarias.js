import React from 'react';

const TarefasDiarias = () => {
  return (
    <section>
      <article>
        <h3>Como Funcionam as Tarefas Diárias?</h3>
        <p>As tarefas diárias são planejadas para serem seu guia no caminho até o objetivo final. A partir das metas semanais definidas por você, a plataforma cria atividades personalizadas, levando em consideração sua rotina, preferências e nível de dificuldade desejado.</p>
        <p>Cada tarefa completada não é apenas um passo a mais na sua jornada, mas também uma conquista que gera pontos, ajudando a manter a motivação sempre em alta. Os pontos acumulados são um reflexo do seu esforço e progresso, e podem ser utilizados para desbloquear novos conteúdos e recompensas dentro da plataforma.</p>
        <p>As tarefas variam entre desafios físicos, reflexões sobre hábitos alimentares, e até mesmo momentos para cuidar do seu bem-estar mental, como meditações e práticas de autocuidado. Tudo para tornar sua experiência equilibrada e estimulante, sem deixar de lado a leveza e a diversão no processo.</p>
        <p>Com as tarefas diárias, você avança de maneira estruturada, respeitando seu próprio ritmo e sentindo-se mais confiante a cada dia. A plataforma está sempre pronta para ajustar e reavaliar suas metas, garantindo que o caminho até o seu objetivo final seja eficaz e prazeroso!</p>
      </article>
      <div className="btn-container">
        <a href="/">
          <button className="btn-know">Voltar ao Início</button>
        </a>
      </div>
      <div className="btn-container">
        <a href="login">
          <button className="btn-next">🔥 Entrar 🔥</button>
        </a>
      </div>
      <div className="btn-container">
        <a href="https://t.me/projetosuperslimbot">
          <button className="btn-know">Conversar com a Slim IA no Telegram</button>
        </a>
      </div>
    </section>
  );
};

export default TarefasDiarias;