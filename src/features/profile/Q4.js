import React, { useRef, useState } from 'react';
import { Form, Button, Table, Modal } from 'react-bootstrap';
import './index.scss';

const List = prop => {
  const { registry } = prop;
  if (registry.length < 0) return;

  const listValues = registry.map((item, index) => (
    <tr key={index}>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.phone}</td>
      <td>{item.adress}</td>
      <td>{item.xp}</td>
    </tr>
  ));
  return listValues;
};

export const Q4 = () => {
  const [registry, setRegistry] = useState([]);

  const [showSuccess, setShowSuccess] = useState(false);
  const handleCloseSuccess = () => setShowSuccess(false);
  const handleShowSuccess = () => setShowSuccess(true);

  const [showFailure, setShowFailure] = useState(false);
  const handleCloseFailure = () => setShowFailure(false);
  const handleShowFailure = () => setShowFailure(true);

  const inputName = useRef('');
  const inputEmail = useRef('');
  const inputPhone = useRef('');
  const inputAdress = useRef('');
  const inputXp = useRef('');

  const onClick = () => {
    const registryValue = [
      {
        name: inputName.current.value,
        email: inputEmail.current.value,
        phone: inputPhone.current.value,
        adress: inputAdress.current.value,
        xp: inputXp.current.value,
      },
    ];

    const validateValues = Object.values(registryValue[0]).map(
      item => item === ''
    );

    if (validateValues.includes(true)) {
      handleShowFailure();
      return;
    }

    if (registryValue.length < 0) return;

    setRegistry([...registry, ...registryValue]);
    handleShowSuccess();
  };

  const handleSubmit = event => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <>
      <div className="container">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicID">
            <Form.Label>Nome</Form.Label>
            <Form.Control ref={inputName} type="text" placeholder="Nome" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicClient">
            <Form.Label>Email</Form.Label>
            <Form.Control ref={inputEmail} type="email" placeholder="Email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicProduct">
            <Form.Label>Telefone</Form.Label>
            <Form.Control ref={inputPhone} type="tel" placeholder="Telefone" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicType">
            <Form.Label>Endereço</Form.Label>
            <Form.Control
              ref={inputAdress}
              type="text"
              placeholder="Endereço"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicType">
            <Form.Label>Experiências</Form.Label>
            <Form.Control
              ref={inputXp}
              as="textarea"
              placeholder="Adicione suas últimas experiências"
            />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={() => onClick()}>
            Enviar
          </Button>
        </Form>

        <div className="sales-table mt-5">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Email</th>
                <th>Telefone</th>
                <th>Endereço</th>
                <th>Experiências</th>
              </tr>
            </thead>
            <tbody>
              <List registry={registry} />
            </tbody>
          </Table>
        </div>

        <Modal show={showSuccess} onHide={handleCloseSuccess}>
          <Modal.Header closeButton>
            <Modal.Title>Painel de cadastro de currículos</Modal.Title>
          </Modal.Header>
          <Modal.Body>Seu currículo foi registrada com sucesso!</Modal.Body>
        </Modal>

        <Modal show={showFailure} onHide={handleCloseFailure}>
          <Modal.Header closeButton>
            <Modal.Title>Painel de gestão</Modal.Title>
          </Modal.Header>
          <Modal.Body>Ocorreu um erro no seu cadastro!</Modal.Body>
        </Modal>
      </div>
    </>
  );
};
