import React from "react";
import Button from "../components/Button"; 

const Solicitacoes = () => {
  return (
    <div className="container mx-auto">
      <h1>Página de Acompanhamento de Solicitações</h1>
      <p>Aqui você pode acompanhar o andamento das suas solicitações de serviços públicos.</p>
      <Button
        label="Ver Solicitações"
        onClick={() => {
          // Implemente a lógica para visualizar as solicitações
        }}
      />
    </div>
  );
};

export default Solicitacoes;