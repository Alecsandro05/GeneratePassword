import { useState } from "react"

function App() {
  const [password, setPassword] = useState("")
  const [copyPassword, setCopyPassword] = useState("Copiar")

  function generatePassword() {
    const characters =
      "1234567890@!#$%&*()_-'abcdefghijklmnopqrstuvwxyz.,:/?'ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const passwordLenght = 15
    let newPassword = ""
    for (let i = 0; i < passwordLenght; i++) {
      const position = Math.floor(Math.random() * characters.length)
      newPassword += characters[position]
      console.log(newPassword)
    }
    setPassword(newPassword)
  }

  return (
    <div className="w-screen h-screen bg-zinc-900">
      <main className="flex justify-center items-center h-screen flex-col">
        <h1 className="text-zinc-100 font-bold text-6xl ">GERADOR DE SENHAS</h1>
        <div className="flex gap-6 py-10">
          <button
            onClick={() => generatePassword()}
            className="border-2 rounded-md text-lg py-2 px-4 text-zinc-50 font-semibold  duration-500 hover:border-cyan-800"
          >
            Gerar!
          </button>
          <button className="border-2 rounded-md text-lg py-2 px-4 text-zinc-50 font-semibold duration-500 hover:border-green-700">
            {copyPassword}
          </button>
        </div>
        <div>
          <span className="text-zinc-50 text-lg cursor-pointer">
            {password}
          </span>
        </div>
      </main>
    </div>
  )
}

export default App
