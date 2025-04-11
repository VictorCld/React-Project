import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./AtividadePage.css";

function AtividadePage() {
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
    <div>
      <div className="containerPrinc">
        <nav className="navbaratvd">
          <div className="imgLogoAma"></div>
          <Link to="/" className="nav-linkatvd">
            Home
          </Link>
          <Link to="/sobre" className="nav-linkatvd">
            Sobre
          </Link>
          <Link to="/voluntariado" className="nav-linkatvd">
            Voluntariado
          </Link>
          <Link to="/cadastro" className="nav-linkatvd">
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
          <Link to="/sobre" className="nav-linkatvd2">
            Sobre
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
        <h1 className="tituloprinc01">ATIVIDADES</h1>
        <div className="containerAtvd01">
          <div className="content1">
            <h2 className="tituloAtvd1">Psicologia</h2>
            <p className="textAtvd1">
              A psicologia ajuda no desenvolvimento de habilidades sociais,
              gerenciar emoções e melhorar a comunicação.
            </p>
            <div className="imgAtvd1"></div>
          </div>
          <div className="content2">
            <h2 className="tituloAtvd2">Fisioterapia</h2>
            <p className="textAtvd2">
              A fisioterapia auxilia na melhorara da coordenação motora, no
              equilíbrio e também nas habilidades motoras finas.
            </p>
            <div className="imgAtvd2"></div>
          </div>
          <div className="content3">
            <h2 className="tituloAtvd3">Neurologia</h2>
            <p className="textAtvd3">
              Oferece suporte médico especializado para gerenciar condições
              neurológicas associadas ao autismo.
            </p>
            <div className="imgAtvd3"></div>
          </div>
          <div className="content4">
            <h2 className="tituloAtvd4">Fonoaudiologia</h2>
            <p className="textAtvd4">
              A fonoaudiologia melhora habilidades de comunicação, facilitando a
              expressão de necessidades e a interação social.
            </p>
            <div className="imgAtvd4"></div>
          </div>
        </div>
      </div>
      <div className="containerPrinc02">
        <h1 className="tituloprinc02">ATIVIDADES</h1>
        <div className="containerAtvd02">
          <div className="content5">
            <h2 className="tituloAtvd5">Serviço Social</h2>
            <p className="textAtvd5">
              O serviço social oferece apoio e recursos, ajudando famílias e
              indivíduos autistas a navegar pelos sistemas de saúde e educação.
            </p>
            <div className="imgAtvd5"></div>
          </div>
          <div className="content6">
            <h2 className="tituloAtvd6">Música</h2>
            <p className="textAtvd6">
              A musicoterapia promove comunicação e expressão emocional,
              reduzindo o estresse e melhorando o humor através da música.
            </p>
            <div className="imgAtvd6"></div>
          </div>
          <div className="content7">
            <h2 className="tituloAtvd7">Artes</h2>
            <p className="textAtvd7">
              As atividades artísticas oferecem uma forma de expressão criativa,
              ajudando a comunicar sentimentos e promovendo a autoestima.
            </p>
            <div className="imgAtvd7"></div>
          </div>
          <div className="content8">
            <h2 className="tituloAtvd8">Educação Física</h2>
            <p className="textAtvd8">
              A educação física adaptada melhora a coordenação, força e saúde
              geral, proporcionando uma saída para a energia acumulada.
            </p>
            <div className="imgAtvd8"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AtividadePage;
