import React from "react";
import Button from "../components/Button"; 

const Pagamento = () => {
  return (
    <div className="container mx-auto">
      <h1>Página de Pagamento de Serviços</h1>
      <p>Aqui você pode efetuar o pagamento dos serviços públicos.</p>
      <Button
        label="Efetuar Pagamento"
        onClick={() => {
          // Implemente a lógica para efetuar o pagamento
        }}
      />
    </div>
  );
};

export default Pagamento;  