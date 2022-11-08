import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { ecommerceAPI } from "../../Services";

function CadastroCliente() {
  const [email, setEmail] = useState("");
  const [nomeCompleto,setNomeCompleto] = useState("")
  const [cpf,setCpf] = useState("")
  const [dataNascimento,setDataNascimento] = useState("")
  const [numero,setNumero] = useState("")
  const [complemento,setComplemento] = useState("")
  const [cep,setCep] = useState("")

    
    const postCliente = () => {
      ecommerceAPI.post("/clientes", {
        "email": email,
        "nomeCompleto": nomeCompleto,
        "cpf": cpf,
        "dataNascimento": dataNascimento,
        "endereco": {
        "numero": numero,
        "complemento": complemento,
        "cep": cep
        }
      }).then(res => {
        console.log(res)     
     }).catch((err) => {
      console.log(err)
     })
     }
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formGridNome">
        <Form.Label>Nome</Form.Label>
        <Form.Control type="text" value={nomeCompleto} placeholder="Digite seu nome" onChange={(e) => setNomeCompleto(e.target.value)}/>
      </Form.Group>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={email} placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Data de Nascimento</Form.Label>
          <Form.Control type="text" value={dataNascimento} placeholder="AAAA/MM/DD" onChange={(e) => setDataNascimento(e.target.value)} />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridCPF">
        <Form.Label>CPF</Form.Label>
        <Form.Control type="text" value={cpf} placeholder="CPF" onChange={(e) => setCpf(e.target.value)} />
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formGridNome">
        <Form.Label>Endereço</Form.Label>
        <Form.Control type="text" placeholder="Digite seu endereço" onChange={getEndereco}/>
      </Form.Group> */}

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity" value={numero} onChange={(e) => setNumero(e.target.value)}>
          <Form.Label>Numero</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity" value={complemento} onChange={(e) => setComplemento(e.target.value)}>
          <Form.Label>Complemento</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip" value={cep} onChange={(e) => setCep(e.target.value)}>
          <Form.Label>CEP</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Button variant="primary" onClick={postCliente}>
        Cadastrar
      </Button>
    </Form>
  );
}

export default CadastroCliente;