import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function AtualizarPedido() {
  return (
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Id do pedido</Form.Label>
          <Form.Control type="number" placeholder="digite o id do pedido..." />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridQuantidadeEstoque">
          <Form.Label>Valor Total</Form.Label>
          <Form.Control type="number" placeholder="Valor total do pedido" disabled/>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCategoria">
          <Form.Label>Itens do Pedido</Form.Label>
          <Form.Select defaultValue="Itens...">
            <option>Itens...</option>
            <option>...</option>  {/*Get all itens do pedido from API*/}
          </Form.Select>
        </Form.Group>
        <a href="#">
            <Button variant="secondary" style={{ backgroundColor: "red"}} type="submit">
              Deletar Item
            </Button>
        </a>
     </Row>
      <Button variant="primary" type="submit">
        Atualizar
      </Button>

      <Button variant="primary" style={{ marginLeft: "10px"}}type="submit">
        Deletar Pedido
      </Button>
    </Form>
  );
}

export default AtualizarPedido;