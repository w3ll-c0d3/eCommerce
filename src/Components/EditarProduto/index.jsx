import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { ecommerceAPI } from "../../Services";

function EditarProduto() {
    const [nome, setNome] = useState(null)
    const [descricao, setDescricao] = useState(null)
    const [id, setId] = useState(null)
    const [valorUnitario, setValorUnitario] = useState(null)
    const [qtdEstoque, setEstoque] = useState(null)
    const [imagemUrl, setImagem] = useState(null)

    function getId(val) {
      setId(val.target.value)
    }

    function getImagem(val) {
      setImagem(val.target.value)
      console.warn(val.target.value)
    }

    function getNome(val) {
      setNome(val.target.value)
    }

    function getDescricao(val) {
      setDescricao(val.target.value)
    }
    
    function getQtdEstoque(val) {
      setEstoque(val.target.value)
      console.warn(val.target.value)
    }

    function getValorUnitario(val) {
      setValorUnitario(val.target.value)
      console.warn(val.target.value)
    }

    const novoProduto = {nome: nome, qtdEstoque: qtdEstoque, valorUnitario: valorUnitario, descricao: descricao, imagemUrl: imagemUrl};
    const updateProduto = (e) => {
      e.preventDefault();
      ecommerceAPI.put(`/produtos/${id}`, novoProduto).then(res => console.log("Updating...", res)).catch(err => console.log(err))
    }

  return (
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Id do produto</Form.Label>
          <Form.Control type="number" placeholder="digite o id do produto..." onChange={getId}/>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Nome do produto</Form.Label>
          <Form.Control type="text" placeholder="digite o nome do produto..." onChange={getNome}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridQuantidadeEstoque">
          <Form.Label>Quantidade em estoque</Form.Label>
          <Form.Control type="number" placeholder="Quantidade em estoque" onChange={getQtdEstoque}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridQuantidadeEstoque">
          <Form.Label>Valor unitário</Form.Label>
          <Form.Control type="number" placeholder="Quantidade em estoque" onChange={getValorUnitario}/>
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
        <Form.Group className="mb-3" controlId="formGridDescription">
          <Form.Label>Imagem</Form.Label>
          <Form.Control placeholder="Imagem do produto" onChange={getImagem} />
        </Form.Group>
     </Row>

      <Button variant="primary" type="submit" onClick={updateProduto}>
        Atualizar
      </Button>
    </Form>
  );
}

export default EditarProduto;