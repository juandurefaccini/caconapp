"use client"
import Link from "next/link"
import { signIn, signOut, useSession } from "next-auth/react"

export function Navbar() {
    const { data: session } = useSession()

    return (
        <div className="bg-slate-900 py-2 text-white">
            <div className="container flex justify-between">
                <Link href="/">💩</Link>
                <div className="flex gap-4">
                    {!session ? <div onClick={() => signIn()}>Iniciar sesión</div> : <div onClick={() => signOut()}>Cerrar sesión</div>}
                    <Link href="/cagada">Ranking</Link>
                    <Link href="/cagada">Perfil</Link>
                </div>
            </div>
        </div>
    )
}