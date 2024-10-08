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
    setCopyPassword("Copiar")
  }
  const copyClipPassword = () => {
    const teste = window.navigator.clipboard.writeText(password)
    teste.then(() => setCopyPassword("Copiado!"))
  }
  return (
    <div className="w-screen h-screen bg-zinc-900">
      <main className="flex justify-center items-center h-screen flex-col">
        <h1 className=" font-bold text-6xl bg-gradient-to-r from-red-500 to-orange-300 bg-clip-text text-transparent">
          GERADOR DE SENHAS
        </h1>
        <div className="flex gap-6 py-10">
          <button
            onClick={() => generatePassword()}
            className="border-2 rounded-md text-lg py-2 px-4 text-zinc-50 font-semibold  duration-500 hover:border-cyan-800"
          >
            Gerar !
          </button>
          <button
            onClick={() => copyClipPassword()}
            className="border-2 rounded-md text-lg py-2 px-4 text-zinc-50 font-semibold duration-500 hover:border-green-700"
          >
            {copyPassword}
          </button>
        </div>
        <div>
          <span
            onClick={() => copyClipPassword()}
            className="text-zinc-50 text-lg cursor-pointer relative duration-2000 hover:bottom-2 hover:text-green-400"
          >
            {password}
          </span>
        </div>
      </main>
    </div>
  )
}

export default App
