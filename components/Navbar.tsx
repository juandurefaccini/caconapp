"use client"
import Link from "next/link"
import { signIn, signOut, useSession } from "next-auth/react"

export function Navbar() {
    const { data: session, status } = useSession()

    console.log(session)

    return (
        <div className="bg-slate-200 flex justify-between px-24 py-2 text-black">
            <Link href="/">CaconAPP</Link>
            <div className="flex gap-4">
                {!session ? <div onClick={() => signIn()}>Sign in</div> : <div onClick={() => signOut()}>Sign out</div>}
                <Link href="/cagada">Cagada</Link>
            </div>
        </div>
    )
}