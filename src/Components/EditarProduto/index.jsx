import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function EditarProduto() {
  return (
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Id do produto</Form.Label>
          <Form.Control type="number" placeholder="digite o id do produto..." />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Nome do produto</Form.Label>
          <Form.Control type="text" placeholder="digite o nome do produto..." />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridQuantidadeEstoque">
          <Form.Label>Quantidade em estoque</Form.Label>
          <Form.Control type="number" placeholder="Quantidade em estoque" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridDescription">
        <Form.Label>Descrição</Form.Label>
        <Form.Control placeholder="Descrição do produto" readOnly="readOnly"/>
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCategoria">
          <Form.Label>Categoria</Form.Label>
          <Form.Select defaultValue="Categoria...">
            <option>Categoria...</option>
            <option>...</option>  {/*Get all categorias from API*/}
          </Form.Select>
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Imagem do produto</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
     </Row>

      <Button variant="primary" type="submit">
        Atualizar
      </Button>
    </Form>
  );
}

export default EditarProduto;