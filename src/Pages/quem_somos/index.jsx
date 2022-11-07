import React, { useState , useEffect} from "react";
import { gitApi } from "../../Services";
import { Navigation, Footer } from "../../Components";
import { Container, ContainerContent, Card, Foto } from "./style";


export const QuemSomos = () => {

    const [usuarios, setUsuarios] = useState ([])

    const nomes = ["YasminDCarvalho", "CSindorf", "vtThomaz", "w3ll-c0d3", "arthurGiangiarulo", "BrunoAndrad"]

    const getName = () => {
        //variável que auxilia a passagem - pega a informação
        var data = []
        //forEach passa por cada elemento e faz a requisição
        nomes.forEach(element => {
            // res é a resposta depois da requisição
            gitApi.get(`/${element}`).then((res) => {
                data.push(res.data)
                handleUsuarios(data)
            })
        });
    }

    //função para setar - espera receber props (informação de fora)
    const handleUsuarios = (props) => {
        setUsuarios(props)
    }

    useEffect(() => {
        getName()
    }, [])

    console.log(usuarios);

    // return (
    //     <>
    //         <Navigation />
    //         <h1>Quem Somos</h1>
    //         {usuarios.map((res) => (
    //             <div>
    //                  <img src={res?.avatar_url} width="150px" height="150px"/>
    //                 <div style={{fontSize: "1.3rem"}}>{ res?.name}</div>
    //                 <div>{res?.location}</div>
    //             </div>
    //         ))}
    //     </>
    // )

    return (
        <>
        <Container>
        <Navigation />
         <ContainerContent>
                {usuarios.map((res) => {
                    return (
                        <Card>
                            <Foto src={res.avatar_url} />
                            <div style={{ fontSize: "1.3rem" }}>{res.name}</div>
                            <a href={res.html_url} target="_blank"> <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png"width="45px" height="45px"></img></a>
                            <a href={res.blog} target="_blank"> <img src="https://blog.waalaxy.com/wp-content/uploads/2021/01/logo-linkedin-2003.jpg"width="140px" height="60px"></img></a>
                        </Card>
                    )
                })}
            </ContainerContent>
            <Footer></Footer>   
        </Container>      
    
        </>
    )

}

