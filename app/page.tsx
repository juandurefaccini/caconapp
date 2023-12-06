"use client";
import { useSession } from "next-auth/react"

export default function Home() {
  const { data: session } = useSession()

  console.log(session)

  return (
    <main className="container h-full">
      <div className="flex justify-center items-center h-full">
        <div className=" flex flex-col gap-4 justify-center items-center">
          <div className="text-9xl">
            💩
          </div>
          Apretá para registrar que hiciste caca
        </div>
      </div>
    </main>
  )
}
