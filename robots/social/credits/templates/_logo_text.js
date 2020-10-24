async function build(logoUrl) {
  const setText = `
[IA start - CREDITS]
- Fonte de conteúdo: Wikipedia
- Imagem do logotipo: ${logoUrl}
- Processamento de conteúdo: insta_tool BETA (https://github.com/LeonardoDalessandro/insta_tool)
- Arquivos .jpg: Adobe Illustrator

This project is based on
"video-maker" bot project by @filipedeschamps (https://github.com/LeonardoDalessandro/video-maker)
[IA finish - CREDITS]

[IA start - CREDITS]
#leonardo_d_alessandro #automacao #bot #javascript #jquery #frontend #js #ajax
[IA start - CREDITS]

@leonardo_d_alessandro 
  `
  return setText
}


module.exports = {build}