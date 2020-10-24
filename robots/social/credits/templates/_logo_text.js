async function build(logoUrl) {
  const setText = `
[IA start - CREDITS]
- Fonte de conteúdo: Wikipedia
- Imagem do logotipo: ${logoUrl}
- Processamento de conteúdo: insta_tool BETA (https://github.com/LeonardoDalessandro/insta_tool)
- Arquivos .jpg: Adobe Illustrator

Essa ferramenta é baseada em
"video-maker" bot project
(https://github.com/LeonardoDalessandro/video-maker)
de @filipedeschamps
[IA finish - CREDITS]

@leonardo_d_alessandro 
`
  return setText
}


module.exports = {build}