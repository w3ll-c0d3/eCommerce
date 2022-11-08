import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { ecommerceAPI } from "../../Services";


const CadastrarProduto = props => {
    const [nome, setNome] = useState(null)
    const [qtdEstoque, setEstoque] = useState(null)
    const [dataCadastro, setDataCadastro] = useState(null)
    const [valorUnitario, setValorUnitario] = useState(null)
    const [descricao, setDescricao] = useState(null)
    const [imagemUrl, setImagem] = useState(null)
    const [idCategoria, setIdCategoria] = useState(null)
    
    function getNome(val) {
      setNome(val.target.value)
      console.warn(val.target.value)
    }

    function getDescricao(val) {
      setDescricao(val.target.value)
      console.warn(val.target.value)
    }

    function getQtdEstoque(val) {
      setEstoque(val.target.value)
      console.warn(val.target.value)
    }

    function getValorUnitario(val) {
      setValorUnitario(val.target.value)
      console.warn(val.target.value)
    }

    function getDataCadastro(val) {
      setDataCadastro(val.target.value)
      console.warn(val.target.value)
    }

    function getImagem(val) {
      setImagem(val.target.value)
      console.warn(val.target.value)
    }

    function getIdCategoria(val) {
      setIdCategoria(val.target.value)
      console.warn(val.target.value);
    }
 
    const novoProduto = {nome: nome, qtdEstoque: qtdEstoque, dataCadastro: dataCadastro, valorUnitario: valorUnitario, descricao: descricao, imagemUrl: imagemUrl, categoria: {id: idCategoria}};
    const postProduto = (e) => {
      e.preventDefault();
      ecommerceAPI.post("/produtos", novoProduto).then(res => console.log("Posting...", res)).catch(err => console.log(err))
    }

    // const [categorias, setCategorias] = useState([])
    // const getCategorias = async () => {
    //     var response = await ecommerceAPI.get(`/categoria`);
    //     setCategorias(response?.data.contente)
    //   }
      
    //   useEffect(() => {
    //     getCategorias();
    //   }, [])
      
    //   console.log(categorias)

  return (
    <>
    <Form>
      <Row className="mb-3">
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
        <Form.Control placeholder="Descrição do produto" onChange={getDescricao}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridDescription">
        <Form.Label >Data Cadastro</Form.Label>
        <Form.Control type="text" value={dataCadastro} placeholder="AAAA/MM/DD" onChange={(e) => setDataCadastro(e.target.value)} />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCategoria">
          <Form.Label>Categoria</Form.Label>
          <Form.Select defaultValue="Categoria..." onChange={getIdCategoria}>
            <option>Categoria...</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
          </Form.Select>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formGridDescription">
          <Form.Label>Imagem</Form.Label>
          <Form.Control placeholder="Imagem do produto" onChange={getImagem} />
        </Form.Group>
        {/* <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Imagem do produto</Form.Label>
        <Form.Control type="file" /> */}
      {/* </Form.Group> */}
     </Row>

      <Button variant="primary" type="submit" onClick={postProduto}>
        Cadastrar
      </Button>
    </Form>
    </>
  );
}

export default CadastrarProduto;