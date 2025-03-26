"use client";

import { useAuth } from "../Context/AuthContext";
import HomeNoError from "./home";
import HomeErro from "./Error/error";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const { user, loading } = useAuth();
  const router = useRouter();

  const [pessoas] = useState([
    {
      nome: "Railan",
      usuario: "railin",
      senha: "railan123",
      foto: "https://wallpapers.com/images/hd/rimuru-pfp-at-festival-37l2v6n0dp2j27dx.jpg",
    },
    {
      nome: "Julia",
      usuario: "jualinha",
      senha: "julia123",
      foto: "",
    },
    {
      nome: "Luiz",
      usuario: "luizin",
      senha: "luiz123",
      foto: "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2025/01/santos-neymar_ce226e-e1738361128243.jpg?w=1200&h=1200&crop=1",
    },
  ]);

    const [valida, setValidade] = useState(true);

    useEffect(() => {
        const usuarioEncontrado = pessoas.find((item) => item.nome === user);
        if (usuarioEncontrado) {
            setValidade(true)
        } else {
            setValidade(false)
        }
    }, [user]);


    if(!valida){
        return(
            <div>Usuário Inválido</div>
        )
    }

    if (loading) {
            return (
            <div>Carregando...</div>
        );
    }

  return (
    <div>
      {user? <HomeNoError /> : <HomeErro />}
    </div>
  );
}
