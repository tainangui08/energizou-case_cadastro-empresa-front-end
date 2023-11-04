import React from 'react';
import { Route, Routes as RoutesDom } from 'react-router-dom';

import ListCompanies from './pages/listar/listar';
import ConsultCNPJ from './pages/consultar/consultar';
import CreateCompany from './pages/criar/criar';
import EditCompany from './pages/editar/editar';
import DeleteCompany from './pages/excluir/excluir';

function Routes() {
  return (
    <RoutesDom>
      <Route index element={ <ListCompanies /> } />
      <Route path="/consulta" element={ <ConsultCNPJ /> } />
      <Route path="/criar" element={ <CreateCompany /> } />
      <Route path="/editar" element={ <EditCompany /> } />
      <Route path="/excluir" element={ <DeleteCompany /> } />
    </RoutesDom>
  );
}

export default Routes;
