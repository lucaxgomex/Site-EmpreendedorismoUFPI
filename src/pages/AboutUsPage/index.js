import React from 'react';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import TitleSection from '../../components/TitleSection'
import TextCard from '../../components/TextCard';

import logo from '../../imgs/logo.png';
import equipeLiga from '../../imgs/equipe-liga.png';
import premio from '../../imgs/premio.png';
import notebook from '../../imgs/notebook.png';
import instagram from '../../imgs/instagram.png';
import chefe from '../../imgs/chefe.png';
import rightArrow from '../../imgs/icons/right-arrow.png';

import './styles.css';
import ConselhoCard from '../../components/ConselhoCard';

function AboutUsPage() {
  return (
    <div>
      <Header/>
      <TitleSection title="A LIGA"/>
      <div className="section-a-liga">
        <TextCard>
          <p>A Liga de empreendedorismo da UFPI nasceu no segundo semestre de 2018 com o objetivo de disseminar o conhecimento sobre mercado financeiro e unir uma rede de investidores em torno da proposta.</p>
          
          <p>Formada por alunos e professores da Universidade Federal do Piauí, o projeto ganhou cada vez mais adesão de piauienses, especialmente entre os 18 e 34 anos, que formam 83% do público.
            Com isso, novas oportunidades de expansão se abriram. Hoje, o projeto pretende montar uma infraestrutura de produção de conteúdo e inovação em investimentos,
            expandindo para outras faixas etárias e estratos sociais.</p>

          <p>Além disso, criar uma marca forte que cresça para além do vínculo a uma instituição
            acadêmica, fornecendo serviços financeiros para toda a comunidade, não só do
            estado do Piauí, mas para o Nordeste e também as demais regiões do país.</p>

          <p className="finalP">Nesse contexto, uma das principais barreiras para a entrada de novos investidores na bolsa
            é justamente a falta de conhecimento e orientação. Assim, o projeto nasceu motivado a fazer um trabalho de prospecção de mais pessoas físicas usando a educação como
            ferramenta.</p>
        </TextCard>
        <img src={logo} alt="logo-liga" className="logo-about-liga"/>
      </div>

      <div className="section-a-liga" >
        <div id="second-part-section-a-liga">

          <div id="first-img-equipe">
            <img src={equipeLiga} alt="equipe"/>
            <h4>Reunião para o desafio Constellation Challenge 2020</h4>
          </div>

          <div id="second-img-premio">
            <img src={premio} alt="premio"/>
            <h4>Participação no 12º CFA Research Challenge</h4>
          </div>
        </div>
        <TextCard>
          <p>Para isso, alunos da Universidade Federal montaram a Liga para preparar outros alunos e
            profissionais que fizerem parte da equipe de mercado financeiro. Desse modo, estes
            membros tornam-se capacitados a desenvolver pesquisas e produzir materiais para
            disponibilização de conteúdos ao acesso de qualquer um.</p>

          <p>Obviamente, para que isso aconteça é necessário adquirir recursos que tornem o
            funcionamento possível. Como aquilo que é desenvolvido pelos membros do projeto é um
            serviço, pode-se unir a produção de conhecimento com a oferta de serviços pagos.</p>

          <p>Além disso, a formação de parcerias também ajuda na manutenção de um caixa gerido pela equipe, conforme sua organização interna.
            Há a pretensão de que, por meio da educação, crie-se uma rede de investidores
            interessado em manter recursos inicialmente dentro de um clube de investimentos, com
            pessoas capacitadas, cumprindo os requisitos da lei e as orientações da Comissão de
            Valores Mobiliários (CVM).</p>

          <p className="finalP">A principal ferramenta da liga, hoje, é o Instagram, através do qual produz-se conteúdos em
            vídeo e postagens no feed e nos stories. Além disso, está em curso o desenvolvimento de
            um site, um podcast e um aplicativo. Ademais, por meio do site será possível assinar uma
            Newsletter produzida pela equipe da Liga que consiste em um boletim informativo com a
            curadoria de notícias e conceitos necessários ao investidor.</p>
        </TextCard>
      </div>

      <TitleSection title="INSTAGRAM E NEWSLETTER"/>
      <div id="instagram-newsletter">
        <img src={instagram} />
        <div className="text-area">
        <p>
          O instagram hoje representa o maior meio de alcance da liga, 
          grande parte do público reconhece o trabalho através dessa ferramenta. 
          Dentro da página, dispõem diferentes canais interativos com o intuito de atrair tanto o público mais leigo 
          quanto o mais avançado. Fazem parte hoje os quadros de Explicando, CineLiga e o DailyNews. 
          Além disso, existe o plano para lançamento de MorningCalls todas as manhãs atraves do IGTV, 
          com o intuito de informar o seguidor das noticias mais relevantes para o mercado naquele dia. 
          Todo o processo de elaboração de conteúdo, desenvolvimento das artes e execução da postagens é feito por 
          membros da própria liga, que dispõem do seu tempo estudando design e marketing.
        </p>
        <p>
          O newsletter funciona como um boletim
          informativo completo, com curadoria de notícias e algumas teses que podem orientar o
          investidor nas suas decisões diárias.
          O intuito é que ele tenha autonomia para tomar suas decisões de investimentos 
          filtrando as notícias mais relevantes para o mercado naquele período.
        </p>
        </div>
      </div>
      <TitleSection title="O CONSELHO"/>
      <div id="conselho-card-area">
          <ConselhoCard >
            <img src={chefe} className="image-profile"/>
                <div className="text-conselho-card">
                    <h1> André Oliveira - CIO </h1>
                    <p>
                        Chief Information Officer, Full stack developer
                        responsável pelo desenvolvimento de sistemas e ferramentas para a Liga.
                    </p>
                    <h2> andreluisoliveira013@gmail.com </h2>
                </div>
                <button>
                    <img src={rightArrow} />
                </button>
          </ConselhoCard>
      </div>
      <TitleSection title="O QUE ESPERAR?"/>
      <div id="o-que-esperar">
        <TextCard>
          <p>
            O que se espera do projeto é que ele extrapole os limites universitários. Sabemos que ao redor do planeta inúmeras empresas e Start Ups nascem no seio das
            universidades através de seus principais projetos de extensão, que servem de
            estímulo para inovar e criar soluções para diversos problemas sociais.
          </p>
          <p>
            Somos pioneiros na Universidade e no Piauí. Transformar a realidade do estado,
            resolver problemas relacionados à vida financeira do País e criar riqueza é o nosso
            propósito maior.
          </p>
          <p className="finalP">
            O que hoje é um projeto de extensão que almeja virar um Clube de Investimentos,
            posteriormente se tornará uma gestora que administra fundos de sucesso e de
            referência nacional e que consiga transformar vidas e a realidade local gerando
            emprego, mais renda, mais oportunidades de crescimento patrimonial ao acesso do
            maior número de pessoas possível.
          </p> 
        </TextCard>
        <img src={notebook} />
      </div>
      <Footer/>
    </div>
  );
}

export default AboutUsPage;