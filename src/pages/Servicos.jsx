import React, { useState, useEffect } from 'react';
import Card from '../components/Card'; // Importa o componente Card
import Button from '../components/Button'; // Importa o componente Button
import api from '../utils/api'; // Importa a API

const Servicos = () => {
  // Estados para armazenar a lista de serviços e o termo de busca
  const [servicos, setServicos] = useState([]); 
  const [filtro, setFiltro] = useState(''); 

  // Efeito para buscar os serviços da API quando o componente é montado
  useEffect(() => {
    api.getServicos().then(response => {
      setServicos(response.data);
    });
  }, []);

  // Função para buscar os serviços com base no termo de busca
  const handleBuscar = () => {
    // Implemente a lógica para buscar serviços pela API
    // utilizando o termo de busca 'filtro'
  };

  return (
    <div className="container mx-auto">
      <h1>Serviços Públicos Disponíveis</h1>
      {/* Campo de busca */}
      <input
        type="text"
        placeholder="Buscar por nome, categoria..."
        value={filtro}
        onChange={e => setFiltro(e.target.value)}
      />
      {/* Botão de busca */}
      <Button label="Buscar" onClick={handleBuscar} />
      {/* Exibição dos serviços em cards */}
      <div className="grid grid-cols-3 gap-4 mt-4">
        {servicos.map(servico => (
          <Card key={servico.id} title={servico.nome} description={servico.descricao} />
        ))}
      </div>
    </div>
  );
};

export default Servicos;