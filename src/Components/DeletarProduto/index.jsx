import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function DeletarProduto() {
  return (
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Id do produto</Form.Label>
          <Form.Control type="number" placeholder="digite o id do produto..." />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Nome do produto</Form.Label>
          <Form.Control type="text" placeholder="digite o nome do produto..." disabled/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridQuantidadeEstoque">
          <Form.Label>Quantidade em estoque</Form.Label>
          <Form.Control type="number" placeholder="Quantidade em estoque" disabled/>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridDescription">
        <Form.Label>Descrição</Form.Label>
        <Form.Control placeholder="Descrição do produto" disabled/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Deletar
      </Button>
    </Form>
  );
}

export default DeletarProduto;