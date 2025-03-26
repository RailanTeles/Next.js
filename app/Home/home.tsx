"use client"

import { useAuth } from "../Context/AuthContext"

export default function HomeNoError(){
    const { user } = useAuth();

    return(
        <div>
            <p>Bem vindo, {user}</p>
        </div>
    )
}