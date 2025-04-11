import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./VoluntariadoPage.css";

const VoluntariadoPage = () => {
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

  const navigate = useNavigate();

  const handleClickCadastro = () => {
    navigate("/cadastro");
  };

  return (
    <div className="ContPrincVolun">
      <nav className="navBaraVolun">
        <div className="imgLogoAma"></div>
        <Link to="/" className="nav-linkaVolun">
          Home
        </Link>
        <Link to="/sobre" className="nav-linkaVolun">
          Sobre
        </Link>
        <Link to="/atividades" className="nav-linkaVolun">
          Atividades
        </Link>
        <Link to="/cadastro" className="nav-linkaVolun">
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
        <Link to="/atividades" className="nav-linkatvd2">
          Atividades
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
      <h1 className="tituloPrincVolun">
        Programa de Voluntariado - Conexão AMA
      </h1>
      <div className="imgVolun"></div>
      <div className="ContTxtVolun">
        <p className="txtVolun">
          O Sistema de Agendamento de Voluntariado da AMA-PI é uma plataforma
          desenvolvida para facilitar a organização e gestão de voluntários que
          desejam contribuir com as atividades da associação. Através do
          sistema, os voluntários podem se cadastrar, informando seus dados
          pessoais, interesses e horários disponíveis, além de escolher as
          atividades nas quais gostariam de participar, como aulas de natação,
          musicoterapia ou eventos de conscientização. A AMA poderá, de forma
          prática, gerenciar essas atividades e alocar os voluntários de acordo
          com a necessidade e disponibilidade, garantindo que todos os eventos
          tenham a ajuda necessária. O sistema também enviará confirmações
          automáticas por e-mail, informando sobre as datas e horários das
          atividades escolhidas, além de avisar em caso de mudanças na
          programação, proporcionando uma experiência mais organizada e
          eficiente para todos os envolvidos.
        </p>
      </div>
      <button className="btnCadVolun" onClick={handleClickCadastro}>
        CADASTRE-SE
      </button>
    </div>
  );
};

export default VoluntariadoPage;
