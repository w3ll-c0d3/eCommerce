import React, { useState , useEffect} from "react";
import {useNavigate} from "react-router-dom";
import { gitApi } from "../../Services";
import { Navigation } from "../../Components";

export const QuemSomos = () => {

    const [usuarios, setUsuarios] = useState ([])

    const nomes = ["YasminDCarvalho", "CSindorf", "vtThomaz", "w3ll-c0d3", "arthurGiangiarulo", "BrunoAndrad"]

    let navigate = useNavigate()

    function handleClick(){
        navigate("/")
    }


    const getName = () => {
        
    }
    

    useEffect (() => {
        nomes.forEach(async element => {
            console.log(element);
            // gitApi.get(`/${element}`).then((response) => {
            //     console.log(response.data);
            //     usuarios.push(response.data);
            // })
            var response = await gitApi.get(`/${element}`)
    
            
            // setUsuarios(...usuarios,response.data)
            console.log(response.data); 
            usuarios.push([response.data]);
        });
        
    }, [])

    console.log(nomes);
    console.log("usuarios", usuarios);

    return (
        <>
            <Navigation />
            <h1>Quem Somos</h1>
            {/* <p>
                 Nome: {usuarios.name} <br/>
                 Localização: {usuarios.location}<br/>
                 <img src={usuarios.avatar_url} width="150px"/>
            </p> */}
            {usuarios.map((resposta) => (
                <p>
                    Nome: { resposta?.name} <br/>
                    Localização: {resposta?.location}<br/>
                    <img src={resposta?.avatar_url} width="150px"/>
                </p>
            ))}
        </>
    )
}

