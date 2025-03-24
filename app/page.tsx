"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const [pessoas, setPessoas] = useState([
    {
      nome: "Railan",
      usuario: "railin",
      senha: "railan123",
      foto: "https://wallpapers.com/images/hd/rimuru-pfp-at-festival-37l2v6n0dp2j27dx.jpg",
    },
    { nome: "Julia", 
      usuario: "jualinha", 
      senha: "julia123", 
      foto: "" },
    {
      nome: "Luiz",
      usuario: "luizin",
      senha: "luiz123",
      foto: "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2025/01/santos-neymar_ce226e-e1738361128243.jpg?w=1200&h=1200&crop=1",
    },
  ]);

  const [userSenha, setUserSenha] = useState("");
  const [userNome, setUserNome] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const verify = () => {
    if (userNome == "" || userSenha == "") {
      setError("Preencha todos os campos!");
    } else {
      pessoas.find((item) => item.nome === userNome) &&
      pessoas.find((item) => item.senha === userSenha)
        ? router.push("/Home")
        : setError("Usuário não encontrado");
    }
  };
  return (
    <div className="w-full bg-blue-700 min-h-screen flex flex-col relative justify-center items-center">
      <div className="bg-amber-50 w-1/2 h-80 flex flex-col justify-center items-center">
        <input
          type="text"
          name=""
          id=""
          placeholder="Digite seu usuário"
          className="border-2 w-1/2"
          onChange={(e) => setUserNome(e.target.value)}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Digite sua senha"
          className="border-2 w-1/2"
          onChange={(e) => setUserSenha(e.target.value)}
        />
        <br />
        {error && (
          <div>
            <br />
            <p className="text-red-700 text-center">{error}</p>
          </div>
        )}
        <br />
        <input
          type="button"
          value="Entrar"
          className="border-2 px-2 bg-green-700 w-1/2 cursor-pointer"
          onClick={() => verify()}
        />
      </div>
    </div>
  );
}
