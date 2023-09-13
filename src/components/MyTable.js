import React from "react";
import { Container, Table } from "react-bootstrap";

export const MyTable = () => {
  return (
    <>
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Anos</th>
              <th>Janeiro</th>
              <th>Fevereiro</th>
              <th>Março</th>
              <th>Abril</th>
              <th>Maio</th>
              <th>Junho</th>
              <th>Julho</th>
              <th>Agosto</th>
              <th>Setembro</th>
              <th>Outubro</th>
              <th>Novembro</th>
              <th>Dezembro</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2020</td>
              <td>10</td>
              <td>30</td>
              <td>40</td>
              <td>45</td>
              <td>80</td>
              <td>85</td>
              <td>100</td>
              <td>120</td>
              <td>130</td>
              <td>140</td>
              <td>150</td>
              <td>160</td>
            </tr>
            <tr>
              <td>2021</td>
              <td>150</td>
              <td>320</td>
              <td>350</td>
              <td>100</td>
              <td>500</td>
              <td>550</td>
              <td>600</td>
              <td>800</td>
              <td>960</td>
              <td>1200</td>
              <td>1350</td>
              <td>1550</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
};
