import { useState } from "react"

function App() {
  const [password, setPassword] = useState("")
  const [copyPassword, setCopyPassword] = useState("Copiar")
  const [passwordSize, setPasswordSize] = useState(12)

  function generatePassword() {
    const characters =
      "1234567890@!#$%&*()_-'abcdefghijklmnopqrstuvwxyz.,:/?'ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const passwordLenght = passwordSize
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
        <div className="mt-6 space-x-3">
          <label className="text-zinc-50 text-lg font-semibold">
            Tamanho da senha:
          </label>
          <input
            type="number"
            name=""
            value={passwordSize}
            id="passwordSize"
            min={1}
            className="rounded-md py-1 px-2 outline-none bg-zinc-950 text-zinc-50 font-semibold"
            onChange={(ev) => setPasswordSize(ev.target.value)}
          />
        </div>
        <div className="flex gap-10 py-10">
          <button
            onClick={() => generatePassword()}
            className="border-2 rounded-md text-lg py-2 px-4 text-zinc-50 font-semibold  duration-500 hover:border-cyan-800"
          >
            {`Gerar senha de ${passwordSize} caracteres`}
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
            className="text-zinc-50 text-lg cursor-pointer relative  hover:text-green-400"
          >
            {password}
          </span>
        </div>
      </main>
    </div>
  )
}

export default App
