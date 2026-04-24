const fs = require("node:fs")

fs.unlink("arquivo.html", (error) => {
  if (error) {
    console.log("Erro ao excluir o arquivo:", error.message)
    return
  }

  console.log("Arquivo excluído com sucesso!")
})