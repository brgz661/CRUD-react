import React, { useRef, useState } from 'react';
import { Form, Button, Table, Modal } from 'react-bootstrap';
import './index.scss';

const List = prop => {
  const { registry } = prop;
  if (registry.length < 0) return;

  const listValues = registry.map(item => (
    <tr key={item?.id}>
      <td>{item.id}</td>
      <td>{item.productName}</td>
      <td>{item.brand}</td>
      <td>{item.type}</td>
      <td>{item.value}</td>
      <td>{item.email}</td>
      <td>{item.seller}</td>
    </tr>
  ));
  return listValues;
};

export const Q3 = () => {
  const [registry, setRegistry] = useState([]);

  const [showSuccess, setShowSuccess] = useState(false);
  const handleCloseSuccess = () => setShowSuccess(false);
  const handleShowSuccess = () => setShowSuccess(true);

  const [showFailure, setShowFailure] = useState(false);
  const handleCloseFailure = () => setShowFailure(false);
  const handleShowFailure = () => setShowFailure(true);

  const inputID = useRef('');
  const inputProduct = useRef('');
  const inputBrand = useRef('');
  const inputType = useRef('');
  const inputValue = useRef('');
  const inputEmail = useRef('');
  const inputSeller = useRef('');

  const onClick = () => {
    const registryValue = [
      {
        id: inputID.current.value,
        productName: inputProduct.current.value,
        brand: inputBrand.current.value,
        type: inputType.current.value,
        value: inputValue.current.value,
        email: inputEmail.current.value,
        seller: inputSeller.current.value,
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
            <Form.Label>ID</Form.Label>
            <Form.Control
              ref={inputID}
              type="text"
              placeholder="Id do produto"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicProduct">
            <Form.Label>Produto</Form.Label>
            <Form.Control
              ref={inputProduct}
              type="text"
              placeholder="Adicione o produto"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicBrand">
            <Form.Label>Marca</Form.Label>
            <Form.Control
              ref={inputBrand}
              type="text"
              placeholder="Adicione a marca"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicType">
            <Form.Label>Modelo</Form.Label>
            <Form.Control
              ref={inputType}
              type="text"
              placeholder="Adicione um modelo"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicValue">
            <Form.Label>Valor total</Form.Label>
            <Form.Control
              ref={inputValue}
              type="text"
              placeholder="Adicione o valor"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicClient">
            <Form.Label>Email do cliente</Form.Label>
            <Form.Control
              ref={inputEmail}
              type="email"
              placeholder="Email do Cliente"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicSeller">
            <Form.Label>Vendedor</Form.Label>
            <Form.Control
              ref={inputSeller}
              type="text"
              placeholder="Vendedor"
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
                <th>ID</th>
                <th>Produto</th>
                <th>Marca</th>
                <th>Modelo</th>
                <th>Valor total</th>
                <th>Email do cliente</th>
                <th>Vendedor</th>
              </tr>
            </thead>
            <tbody>
              <List registry={registry} />
            </tbody>
          </Table>
        </div>

        <Modal show={showSuccess} onHide={handleCloseSuccess}>
          <Modal.Header closeButton>
            <Modal.Title>Painel de gestão</Modal.Title>
          </Modal.Header>
          <Modal.Body>Sua venda foi registrada com sucesso!</Modal.Body>
        </Modal>

        <Modal show={showFailure} onHide={handleCloseFailure}>
          <Modal.Header closeButton>
            <Modal.Title>Painel de gestão</Modal.Title>
          </Modal.Header>
          <Modal.Body>Ocorreu um erro na sua venda!</Modal.Body>
        </Modal>
      </div>
    </>
  );
};
