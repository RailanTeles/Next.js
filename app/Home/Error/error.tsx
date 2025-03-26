"use client";

import { useRouter } from "next/navigation";

export default function errorUser(){

    const router = useRouter();

    return(
        <div className="bg-amber-100 text-center w-100 h-50">
            <p>Sem cadastro. Volte para o login!</p>
            <button onClick={() => router.push('/')}> Página de Login</button>
        </div>
    )
}