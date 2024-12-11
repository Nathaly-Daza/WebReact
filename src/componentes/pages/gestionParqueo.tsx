import React, { useState } from 'react';
import { useTable, Column } from 'react-table';
import { Button, Container, Row, Col, Modal, Form } from 'react-bootstrap';

const GestionParqueo: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModalVehiculo, setShowModalVehiculo] = useState(false); // Estado para el modal de vehículos
  const [showModalReserva, setShowModalReserva] = useState(false); // Estado para el modal de reservas


  // Manejo del modal para parqueaderos
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  // Manejo del modal para tipos de vehículos
  const handleOpenModalVehiculo = () => setShowModalVehiculo(true);
  const handleCloseModalVehiculo = () => setShowModalVehiculo(false);


  // Manejo del modal para reservas
  const handleOpenModalReserva = () => setShowModalReserva(true);
  const handleCloseModalReserva = () => setShowModalReserva(false);

  // Datos de ejemplo
  const parqueaderosData = React.useMemo(
    () => [
      { id: 1, nombre: 'Parqueadero A', capacidad: 50, ocupados: 20 },
      { id: 2, nombre: 'Parqueadero B', capacidad: 30, ocupados: 15 },
      { id: 3, nombre: 'Parqueadero C', capacidad: 40, ocupados: 30 },
    ],
    []
  );

  const vehiculosData = React.useMemo(
    () => [
      { id: 1, tipo: 'Sedán' },
      { id: 2, tipo: 'SUV' },
      { id: 3, tipo: 'Camioneta' },
      { id: 4, tipo: 'Motocicleta' },
    ],
    []
  );

  const reservasData = React.useMemo(
    () => [
      { id: 1, parqueadero: 'Parqueadero A', vehiculo: 'Sedán', fecha: '2024-12-10' },
      { id: 2, parqueadero: 'Parqueadero B', vehiculo: 'SUV', fecha: '2024-12-11' },
      { id: 3, parqueadero: 'Parqueadero C', vehiculo: 'Motocicleta', fecha: '2024-12-12' },
    ],
    []
  );

  // Columnas de las tablas
  const parqueaderosColumns: Column<{ id: number; nombre: string; capacidad: number; ocupados: number; }>[] = React.useMemo(
    () => [
      { Header: 'Nombre', accessor: 'nombre' },
      { Header: 'Capacidad', accessor: 'capacidad' },
      { Header: 'Ocupados', accessor: 'ocupados' },
    ],
    []
  );

  const vehiculosColumns: Column<{ id: number; tipo: string; }>[] = React.useMemo(
    () => [
      { Header: 'Tipo de Vehículo', accessor: 'tipo' },
    ],
    []
  );

  const reservasColumns: Column<{ id: number; parqueadero: string; vehiculo: string; fecha: string; }>[] = React.useMemo(
    () => [
      { Header: 'Parqueadero', accessor: 'parqueadero' },
      { Header: 'Vehículo', accessor: 'vehiculo' },
      { Header: 'Fecha', accessor: 'fecha' },
    ],
    []
  );

  // Crear tablas con react-table
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns: parqueaderosColumns, data: parqueaderosData });
  const { getTableProps: getTablePropsVehiculos, getTableBodyProps: getTableBodyPropsVehiculos, headerGroups: headerGroupsVehiculos, rows: rowsVehiculos, prepareRow: prepareRowVehiculos } = useTable({ columns: vehiculosColumns, data: vehiculosData });
  const { getTableProps: getTablePropsReservas, getTableBodyProps: getTableBodyPropsReservas, headerGroups: headerGroupsReservas, rows: rowsReservas, prepareRow: prepareRowReservas } = useTable({ columns: reservasColumns, data: reservasData });

  return (
    <Container fluid className="my-4">
      <Row>
        <Col md={8}>
          <h3>Parqueaderos</h3>
          <table {...getTableProps()} className="table table-striped">
            <thead>
              {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map(row => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map(cell => {
                      return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Col>

        <Col md={4}>
          <div className="d-flex flex-column">
            <Button variant="primary" className="mb-3" onClick={handleOpenModal}>
              Crear Parqueadero
            </Button>
            <Button variant="secondary" className="mb-3" onClick={handleOpenModalVehiculo}>
              Crear Tipo de Vehículo
            </Button>
            <Button variant="success" className="mb-3" onClick={handleOpenModalReserva}>
        Crear Reserva
      </Button>
          </div>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col md={6}>
          <h3>Tipos de Vehículos</h3>
          <table {...getTablePropsVehiculos()} className="table table-striped">
            <thead>
              {headerGroupsVehiculos.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyPropsVehiculos()}>
              {rowsVehiculos.map(row => {
                prepareRowVehiculos(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map(cell => {
                      return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Col>

        <Col md={6}>
          <h3>Reservas</h3>
          <table {...getTablePropsReservas()} className="table table-striped">
            <thead>
              {headerGroupsReservas.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyPropsReservas()}>
              {rowsReservas.map(row => {
                prepareRowReservas(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map(cell => {
                      return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Col>
      </Row>
            
            
      {/* Modal del formulario para Parqueadero */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Registrar Parqueadero</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="nombreParqueadero">
              <Form.Label>Nombre del Parqueadero</Form.Label>
              <Form.Control type="text" placeholder="Ingresa el nombre" />
            </Form.Group>
            <Form.Group controlId="ubicacion" className="mt-3">
              <Form.Label>Ubicación Geográfica</Form.Label>
              <Form.Control type="text" placeholder="Ejemplo: -12.3456, 45.6789" />
            </Form.Group>
            <Form.Group controlId="direccion" className="mt-3">
              <Form.Label>Dirección</Form.Label>
              <Form.Control type="text" placeholder="Ingresa la dirección" />
            </Form.Group>
            <Form.Group controlId="capacidad" className="mt-3">
              <Form.Label>Capacidad</Form.Label>
              <Form.Control type="number" placeholder="Capacidad máxima" />
            </Form.Group>
            <Form.Group controlId="horario" className="mt-3">
              <Form.Label>Horario</Form.Label>
              <Form.Control type="text" placeholder="Ejemplo: 8:00 AM - 8:00 PM" />
            </Form.Group>
            <Form.Group controlId="tarifa" className="mt-3">
              <Form.Label>Tarifa</Form.Label>
              <Form.Control type="text" placeholder="Ejemplo: $10/hora" />
            </Form.Group>
            <Form.Group controlId="idAdministrador" className="mt-3">
              <Form.Label>ID Administrador</Form.Label>
              <Form.Control type="number" placeholder="ID del administrador" />
            </Form.Group>
            <Button variant="primary" className="mt-3" onClick={handleCloseModal}>
              Guardar
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Modal del formulario para Tipo de Vehículo */}
      <Modal show={showModalVehiculo} onHide={handleCloseModalVehiculo} centered>
        <Modal.Header closeButton>
          <Modal.Title>Registrar Tipo de Vehículo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="tipoVehiculo">
              <Form.Label>Tipo de Vehículo</Form.Label>
              <Form.Control type="text" placeholder="Ejemplo: Sedan, SUV" />
            </Form.Group>
            <Button variant="primary" className="mt-3" onClick={handleCloseModalVehiculo}>
              Guardar
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
      

      {/* Modal del formulario para Reserva */}
      <Modal show={showModalReserva} onHide={handleCloseModalReserva} centered>
        <Modal.Header closeButton>
          <Modal.Title>Registrar Reserva</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="parqueadero">
              <Form.Label>Parqueadero</Form.Label>
              <Form.Control type="text" placeholder="Nombre del parqueadero" />
            </Form.Group>
            <Form.Group controlId="vehiculo" className="mt-3">
              <Form.Label>Vehículo</Form.Label>
              <Form.Control type="text" placeholder="Tipo de vehículo" />
            </Form.Group>
            <Form.Group controlId="fecha" className="mt-3">
              <Form.Label>Fecha</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
            <Button variant="primary" className="mt-3" onClick={handleCloseModalReserva}>
              Guardar
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default GestionParqueo;
