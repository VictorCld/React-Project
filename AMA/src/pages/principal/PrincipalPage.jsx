import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./principal.css";

function PrincipalPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const handleClickSobre = () => {
    navigate("/sobre");
  };

  const handleClickAtividades = () => {
    navigate("/atividades");
  };

  const handleClickVoluntariado = () => {
    navigate("/voluntariado");
  };

  const handleClickCadastro = () => {
    navigate("/cadastro");
  };

  return (
    <div>
      <div className="container1"></div>
      <div className="container2">
        <button className="cad-but" onClick={handleClickCadastro}>
          Cadastre-se agora
        </button>
      </div>
      <div className="container3">
        <div className="interContent1">
          <p className="textContent1">Sobre a AMA</p>
          <button className="btnContent1" onClick={handleClickSobre}>
            ⭢
          </button>
        </div>
        <div className="interContent2">
          <p className="textContent2">Atividades</p>
          <button className="btnContent2" onClick={handleClickAtividades}>
            ⭢
          </button>
        </div>
        <div className="interContent3">
          <p className="textContent3">
            Programa de <br /> Voluntariado
          </p>
          <button className="btnContent3" onClick={handleClickVoluntariado}>
            ⭢
          </button>
        </div>
      </div>
    </div>
  );
}

export default PrincipalPage;
