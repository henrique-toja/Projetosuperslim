import React from 'react';

const TermosDeUso = () => {
  return (
    <section>
      <h3>Termos de Uso - Projeto Super Slim</h3>
      <section className="info">
        <article>
          <p><strong>Data de Vigência:</strong> 25 de setembro de 2024</p>

          <h3>1. Aceitação dos Termos</h3>
          <p>Ao acessar ou utilizar a plataforma do Projeto Super Slim ("Plataforma"), você concorda em cumprir estes Termos de Uso. Caso não concorde com algum termo, por favor, não utilize a Plataforma.</p>

          <h3>2. Descrição do Serviço</h3>
          <p>O Projeto Super Slim é uma plataforma gratuita voltada ao emagrecimento feminino, que promove um processo saudável e definitivo de perda de peso, baseado em cinco pilares: Mentalidade, Alimentação, Movimentação, Suplementação e Comunicação. O objetivo é fornecer suporte contínuo e uma experiência agradável às participantes.</p>

          <h3>3. Cadastro e Uso da Plataforma</h3>
          <p>Para utilizar a Plataforma, é necessário realizar o cadastro, fornecendo informações verdadeiras, como nome, e-mail, idade, altura e peso. Você se compromete a manter os dados de registro atualizados e a não compartilhar sua conta com terceiros.</p>

          <h3>4. Responsabilidades do Usuário</h3>
          <p>Ao utilizar a Plataforma, você concorda em:</p>
          <p>Não utilizar a Plataforma para qualquer fim ilegal ou não autorizado.</p>
          <p>Não compartilhar conteúdo ofensivo, discriminatório, ou que viole os direitos de terceiros.</p>
          <p>Manter o ambiente da comunidade amigável e respeitoso, conforme os princípios de comunicação estabelecidos.</p>

          <h3>5. Responsabilidades da Plataforma</h3>
          <p>O Projeto Super Slim compromete-se a:</p>
          <p>Fornecer uma plataforma funcional e acessível, porém não garante que o serviço estará disponível ininterruptamente ou livre de erros.</p>
          <p>Preservar a privacidade dos dados dos usuários, conforme nossa <a href="politica-de-privacidade">Política de Privacidade</a>.</p>

          <h3>6. Propriedade Intelectual</h3>
          <p>Todo o conteúdo presente na Plataforma, incluindo textos, imagens, logotipos e design, é de propriedade do Projeto Super Slim e protegido por leis de direitos autorais. O uso indevido desses materiais é estritamente proibido.</p>

          <h3>7. Modificações na Plataforma e Termos</h3>
          <p>O Projeto Super Slim reserva-se o direito de modificar, suspender ou descontinuar qualquer parte da Plataforma a qualquer momento, sem aviso prévio. Alterações nos Termos de Uso podem ocorrer periodicamente, sendo responsabilidade do usuário revisá-los regularmente.</p>

          <h3>8. Limitação de Responsabilidade</h3>
          <p>O Projeto Super Slim não se responsabiliza por quaisquer danos, perdas ou consequências decorrentes do uso da Plataforma, incluindo, mas não se limitando, a danos causados por falhas técnicas, erros ou indisponibilidades temporárias.</p>

          <h3>9. Encerramento de Conta</h3>
          <p>O Projeto Super Slim reserva-se o direito de encerrar a conta de usuários que violem os Termos de Uso ou comprometam o ambiente seguro e respeitoso da comunidade.</p>

          <h3>10. Lei Aplicável e Foro</h3>
          <p>Estes Termos de Uso são regidos pelas leis brasileiras. Quaisquer disputas serão resolvidas no foro da cidade de [Cidade do Projeto], Brasil.</p>

          <h3>11. Contato</h3>
          <p>Em caso de dúvidas sobre estes Termos, entre em contato conosco pelo e-mail [email de suporte].</p>

          <h3>12. Aceitação Final</h3>
          <p>Ao continuar a utilizar a Plataforma, você confirma ter lido, compreendido e aceitado os Termos de Uso aqui descritos.</p>
        </article>

        <div className="btn-container">
          <a href="/">
            <button className="btn-back">Voltar para o início</button>
          </a>
        </div>
      </section>
    </section>
  );
};

export default TermosDeUso;