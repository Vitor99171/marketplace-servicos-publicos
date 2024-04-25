import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Importa os componentes necessários do React Router
import Home from './pages/Home'; // Importa a página Home
import Servicos from './pages/Servicos'; // Importa a página de Serviços
import Agendamento from './pages/Agendamento'; // Importa a página de Agendamento
import Pagamento from './pages/Pagamento'; // Importa a página de Pagamento
import Solicitacoes from './pages/Solicitacoes'; // Importa a página de Solicitações

const App = () => {
  return (
    <Router>
      <Switch>
        {/* Define as rotas para cada página */}
        <Route exact path="/" component={Home} />
        <Route exact path="/servicos" component={Servicos} />
        <Route exact path="/agendamento" component={Agendamento} />
        <Route exact path="/pagamento" component={Pagamento} />
        <Route exact path="/solicitacoes" component={Solicitacoes} />
      </Switch>
    </Router>
  );
};

export default App;