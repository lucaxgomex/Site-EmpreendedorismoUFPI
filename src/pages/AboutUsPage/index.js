import React from 'react';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import TitleSection from '../../components/TitleSection'
import TextCard from '../../components/TextCard';

import logo from '../../imgs/logo.png';
import equipeLiga from '../../imgs/equipe-liga.png';
import premio from '../../imgs/premio.png';

import './styles.css';

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
        <img src={logo} className="logo-about-liga"/>
      </div>

      <div className="section-a-liga" >
        <div id="second-part-section-a-liga">

          <div id="first-img-equipe">
            <img src={equipeLiga} />
            <h4>Reunião para o desafio Constellation Challenge 2020</h4>
          </div>

          <div id="second-img-premio">
            <img src={premio}/>
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
      <TitleSection title="O CONSELHO"/>
      <TitleSection title="O QUE ESPERAR"/>
      <Footer/>
    </div>
  );
}

export default AboutUsPage;