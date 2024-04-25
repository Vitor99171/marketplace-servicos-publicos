import React from "react";
import Button from "../components/Button"; 

const Agendamento = () => {
  return (
    <div className="container mx-auto">
      <h1>Página de Agendamento de Serviços</h1>
      <p>Aqui você pode agendar os serviços públicos desejados.</p>
      <Button
        label="Agendar"
        onClick={() => {
          // Implemente a lógica para agendar o serviço
        }}
      />
    </div>
  );
};

export default Agendamento;