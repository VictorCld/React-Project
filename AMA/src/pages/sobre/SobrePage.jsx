import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./SobrePage.css";

function SobrePage() {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const showSideBar = () => {
    setSidebarVisible(true);
  };

  const hideSideBar = () => {
    setSidebarVisible(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="containerPrincipal">
      <nav className="navbar">
        <div className="imgLogoAma"></div>
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/atividades" className="nav-link">
          Atividades
        </Link>
        <Link to="/voluntariado" className="nav-link">
          Voluntariado
        </Link>
        <Link to="/cadastro" className="nav-link">
          Cadastre-se
        </Link>
      </nav>
      <nav
        className="navbaratvd2"
        style={{ display: sidebarVisible ? "flex" : "none" }}
      >
        <Link to="/" className="nav-linkatvd2">
          Home
        </Link>
        <Link to="/atividades" className="nav-linkatvd2">
          Atividades
        </Link>
        <Link to="/voluntariado" className="nav-linkatvd2">
          Voluntariado
        </Link>
        <Link to="/cadastro" className="nav-linkatvd2">
          Cadastre-se
        </Link>
        <div onClick={hideSideBar} className="close-icon-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48px"
            viewBox="0 -960 960 960"
            width="48px"
            fill="#e8eaed"
          >
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
        </div>
      </nav>
      <div onClick={showSideBar} className="svg-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="48px"
          viewBox="0 -960 960 960"
          width="48px"
          fill="#e8eaed"
        >
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
      </div>
      <h1 className="titulosobre">Sobre a AMA</h1>
      <div className="contImgSobre">
        <div className="imgsobre2"></div>
        <div className="imgsobre1"></div>
      </div>
      <div className="ContTextSobre">
        <p className="textsobre1">
          A AMA-PI desenvolve projetos como o AMACast e a Padaria para angariar
          recursos e oferecer suporte a pessoas com Transtorno do Espectro
          Autista (TEA) e suas famílias. A instituição conta com profissionais
          cedidos pela Secretaria de Educação do Estado do Piauí (SEDUC/PI) e
          contratados por meio de parcerias com a Fundação Municipal de Saúde de
          Teresina e a Secretaria Municipal de Cidadania, Assistência Social e
          Políticas Integradas de Teresina (SEMCASPI). Esses profissionais são
          essenciais para a realização das atividades da instituição.
        </p>
        <p className="textsobre2">
          A AMA-PI é uma entidade sem fins lucrativos, reconhecida como de
          utilidade pública Estadual e Municipal, com registros em diversos
          conselhos e certificações. Sua missão é informar, estudar, pesquisar e
          atender pessoas com Transtorno do Espectro do Autismo (TEA) e suas
          famílias. Apesar de sua importância, a instituição enfrenta desafios
          para atender a uma grande demanda devido à limitação de recursos
          financeiros e humanos, tornando essencial o apoio de voluntários e
          ações contínuas.
        </p>
      </div>
      <div className="linha"></div>
      <p className="textMais">Veja mais sobre a AMA:</p>
      <a
        href="https://amapiaui.com.br/
"
        className="link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Site: https://amapiaui.com.br/
      </a>
      <a
        href="https://www.instagram.com/amateresina/
"
        className="link2"
        target="_blank"
        rel="noopener noreferrer"
      >
        Instagram: https://www.instagram.com/amateresina/
      </a>
    </div>
  );
}

export default SobrePage;
