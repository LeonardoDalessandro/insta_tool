async function build(slides, slideLength) {

  const slideTemp = []
for (let i = 0; i < slideLength; i++) {
  if (slides[i] != undefined) {
    const slideSentence = slides[i].text
    slideTemp.push(slideSentence)
  } else {
    const placeholder = '[..]'
    slideTemp.push(placeholder)
  }
}

  const setText = `
[IA start - TAGS] [static generated]
#leonardo_d_alessandro #automacao #bot #developer #dev #code #coding
@leonardo_d_alessandro
[IA finish - TAGS] [static generated]

[IA start - TAGS] [dynamically generated]
. # ${slideTemp[0]},
. # ${slideTemp[1]},
. # ${slideTemp[2]},
. # ${slideTemp[3]},
. # ${slideTemp[4]},
. # ${slideTemp[5]},
. # ${slideTemp[6]}
[IA finish - TAGS] [dynamically generated]
`

  return setText
}


module.exports = build