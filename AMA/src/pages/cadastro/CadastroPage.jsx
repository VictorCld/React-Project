import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./CadastroPage.css";

const CadastroPage = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const showSideBar = () => {
    setSidebarVisible(true);
  };

  const hideSideBar = () => {
    setSidebarVisible(false);
  };

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [celular, setCelular] = useState("");
  const [atividade, setAtividade] = useState("");
  const [vinculo, setVinculo] = useState("");
  const [atividadeEspecifica, setAtividadeEspecifica] = useState("");
  const [isSimChecked2, setIsSimChecked2] = useState(false);
  const [isNaoChecked2, setIsNaoChecked2] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const navigate = useNavigate();

  const handleClickHome = () => {
    navigate("/");
  };

  const handleSimChange2 = () => {
    setIsSimChecked2(true);
    setIsNaoChecked2(false);
  };

  const handleNaoChange2 = () => {
    setIsSimChecked2(false);
    setIsNaoChecked2(true);
  };

  const handleSubmit = () => {
    setNome("");
    setEmail("");
    setCelular("");
    setAtividade("");
    setVinculo("");
    setAtividadeEspecifica("");
    setIsSimChecked2(false);
    setIsNaoChecked2(false);
    setShowSuccessMessage(true);
  };

  const handleCloseSuccessMessage = () => {
    setShowSuccessMessage(false);
  };

  return (
    <div className="ContPrincCad">
      <nav className="navBarCad">
        <div className="imgLogoAma"></div>
        <Link to="/" className="nav-linkaCad">
          Home
        </Link>
        <Link to="/sobre" className="nav-linkaCad">
          Sobre
        </Link>
        <Link to="/atividades" className="nav-linkaCad">
          Atividades
        </Link>
        <Link to="/voluntariado" className="nav-linkaCad">
          Voluntariado
        </Link>
      </nav>
      <nav
        className="navbarcad2"
        style={{ display: sidebarVisible ? "flex" : "none" }}
      >
        <Link to="/" className="nav-linkcad2">
          Home
        </Link>
        <Link to="/sobre" className="nav-linkcad2">
          Sobre
        </Link>
        <Link to="/atividades" className="nav-linkcad2">
          Atividades
        </Link>
        <Link to="/voluntariado" className="nav-linkcad2">
          Voluntariado
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
      <div className="ContForm">
        <h1 className="tituloPrincCad">CADASTRE-SE</h1>
        <div className="form-group">
          <label htmlFor="">Nome Completo:</label>
          <div className="input-container">
            <input
              type="text"
              className="form-control"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <svg
              className="input-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e8eaed"
            >
              <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" />
            </svg>
          </div>
        </div>
        <div className="form-lado">
          <div className="form-group">
            <label htmlFor="">E-mail:</label>
            <div className="input-container">
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <svg
                className="input-icon"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e8eaed"
              >
                <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
              </svg>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="">Celular:</label>
            <div className="input-container">
              <input
                type="text"
                className="form-control"
                value={celular}
                onChange={(e) => setCelular(e.target.value)}
              />
              <svg
                className="input-icon"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e8eaed"
              >
                <path d="M280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v720q0 33-23.5 56.5T680-40H280Zm0-120v40h400v-40H280Zm0-80h400v-480H280v480Zm0-560h400v-40H280v40Zm0 0v-40 40Zm0 640v40-40Z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="">Atividades:</label>
          <select
            name=""
            id=""
            className="comboBoxAtvd"
            value={atividade}
            onChange={(e) => setAtividade(e.target.value)}
          >
            <option value="">Selecione uma Atividade</option>
            <option value="Psicologia">Psicologia</option>
            <option value="Fisioterapia">Fisioterapia</option>
            <option value="Neurologia">Neurologia</option>
            <option value="Fonoaudiologia">Fonoaudiologia</option>
            <option value="Serviço Social">Serviço Social</option>
            <option value="Música">Música</option>
            <option value="Educação Física">Educação Física</option>
            <option value="Artes">Artes</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="">Outro:</label>
          <div className="input-checkbox-group">
            <div className="input-container">
              <div className="ContText">
                <input
                  type="text"
                  className="form-control"
                  value={vinculo}
                  onChange={(e) => setVinculo(e.target.value)}
                />
                <svg
                  className="input-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#e8eaed"
                >
                  <path d="M610-760q-21 0-35.5-14.5T560-810q0-21 14.5-35.5T610-860q21 0 35.5 14.5T660-810q0 21-14.5 35.5T610-760Zm0 660q-21 0-35.5-14.5T560-150q0-21 14.5-35.5T610-200q21 0 35.5 14.5T660-150q0 21-14.5 35.5T610-100Zm160-520q-21 0-35.5-14.5T720-670q0-21 14.5-35.5T770-720q21 0 35.5 14.5T820-670q0 21-14.5 35.5T770-620Zm0 380q-21 0-35.5-14.5T720-290q0-21 14.5-35.5T770-340q21 0 35.5 14.5T820-290q0 21-14.5 35.5T770-240Zm60-190q-21 0-35.5-14.5T780-480q0-21 14.5-35.5T830-530q21 0 35.5 14.5T880-480q0 21-14.5 35.5T830-430ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880v80q-134 0-227 93t-93 227q0 134 93 227t227 93v80Zm132-212L440-464v-216h80v184l148 148-56 56Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="" className="txtCadAtvd">
            Vínculo com Instituição de Ensino/Órgão Público:
          </label>
          <div className="input-checkbox-group">
            <div className="checkbox-group">
              <label className="input-checkbox">
                <input
                  type="checkbox"
                  checked={isSimChecked2}
                  onChange={handleSimChange2}
                />{" "}
                Sim
              </label>
              <label className="input-checkbox">
                <input
                  type="checkbox"
                  checked={isNaoChecked2}
                  onChange={handleNaoChange2}
                />{" "}
                Não
              </label>
            </div>
            <div className="input-container">
              <input
                type="text"
                className="form-control"
                value={atividadeEspecifica}
                onChange={(e) => setAtividadeEspecifica(e.target.value)}
                disabled={!isSimChecked2}
              />
              <svg
                className="input-icon"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e8eaed"
              >
                <path d="M200-120v-160h-80v-80h80v-166L88-440l-48-64 440-336 440 336-48 64-112-86v166h80v80h-80v160h-80v-160H520v160h-80v-160H280v160h-80Zm80-240h160v-349L280-587v227Zm240 0h160v-227L520-709v349Z" />
              </svg>
            </div>
          </div>
        </div>
        <button className="BtnFimCad" onClick={handleSubmit}>
          FINALIZAR CADASTRO
        </button>
      </div>
      {showSuccessMessage && (
        <>
          <div className="overlay"></div>
          <div className="success-message">
            <p>Cadastro realizado com sucesso!</p>
            <button onClick={handleClickHome}>
              Retornar para página inicial
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CadastroPage;
