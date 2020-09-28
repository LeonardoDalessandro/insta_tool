const state = require('../../robots/state')

const content = state.load()
const illustratorPath = "D:/programmi/Adobe Illustrator 2020/Support Files/Contents/Windows/Illustrator.exe"
const localToolPath = "D:/www/TOOLS/insta/insta_tool"


// GENERAL
const instaFrame = (1080.0).toFixed(1)

const font = "Verdana"
const color = content.colorThemeRGB
const colorBlack = 0
const colorGrayDark = 30
const colorGrayMedium = 90
const colorGrayLight = 150
const colorWhite = 255

const slidesLenghtInternal = content.maximumSentences
const slidesLenght = slidesLenghtInternal + 2
const slides = []

for (let i = 0; i < slidesLenghtInternal; i++) {
  let string, text, slideSentence

  string = content.slides[i].text
  text = string.replace(/"/g, '" & Chr(34) & "')
  slideSentence = `"${text}"`
  
  slides.push(slideSentence)
}

const textWidth = (900.0).toFixed(1)
const textHeight = instaFrame
const textPositionX = ( (instaFrame - textWidth) / 2 ).toFixed(1)

const creditTextPositionY = (1010.0).toFixed(1)
const creditTextContent = "by Leonardo D'Alessandro's IA"
const creditTextFontSize = 24


// COVER
const logoImageName = content.downloadedImages.logo.image
const logoDirPath = '/content/'
const logoFullPath = localToolPath+logoDirPath+logoImageName
const logoWidth = (500.0).toFixed(1)
const logoHeightCenter = (400.0).toFixed(1)
const logoPositionX = ( (instaFrame - logoWidth) / 2 ).toFixed(1)

const coverTitle = content.searchTerm
const coverSubTitle = content.prefix
const coverTitlePositionY = (750.0).toFixed(1)
const coverSubTitlePositionY = (860.0).toFixed(1)
const coverTitleFontSize = 100
const coverSubTitleFontSize = 40


// INTERNAL
const slideTextLineHeight = 72
const slideTextFontSize = 40
const slideTextWidth = (770.0).toFixed(1)
const slideTextPositionX = ( (instaFrame - slideTextWidth) / 2 ).toFixed(1)
const slideTextPositionY = (300.0).toFixed(1)

const slideRectHeight = (75.0).toFixed(1)
const slideRectPositionY = (840.0).toFixed(1)

const slideRectSXWidth = (175.0).toFixed(1)
const slideRectSXPositionX = (-1.0).toFixed(1)

const slideRectDXWidth = (100.0).toFixed(1)
const slideRectDXPositionX = (instaFrame - slideRectDXWidth + 1).toFixed(1)

const footerTextPositionX = (80.0).toFixed(1)
const footerTextPositionY = (800.0).toFixed(1)
const footerTextContent = `${coverTitle} - ${coverTitle}`
const footerTextFontSize = 30

// LAST
const cta1TextPositionY = (460.0).toFixed(1)
const cta2TextPositionY = (530.0).toFixed(1)
const cta1TextContent = 'Gostou do conteúdo?'
const cta2TextContent = "Compartilhe e deixe um comentario!"
const cta1TextFontSize = 70
const cta2TextFontSize = 40



const VBSinfo = `
/*************************************************************
* 
* AUTOGENERATE FILE 
* License MIT
* Author: Leonardo D'Alessandro

* NOTICE:  works only on Win OS 
* 
**************************************************************

* aiTask.vbs

* DESCRIPTION

* 1) Init Illustrator (deprecated)
* 2) Make artboards
* 3) Make cover
* 4) For each slide make jpg
* 5) Make lastest slide with thanks & contact info
* 6) Export artboards to .jpg
**************************************************************/
`

const VBSinitIllustrator = `
/*************************************************************
* 1) Start Adobe Illustrator (deprecated)
**************************************************************/
//(deprecated)
`

const VBScreateArtboards = `
/*************************************************************
* 2.1) Create all artboards
**************************************************************/
var docRef = app.documents.add(DocumentColorSpace.RGB, ${instaFrame}, ${instaFrame}, ${slidesLenght}, DocumentArtboardLayout.GridByRow, 20.0, 3);
`

const VBSsetColorPalette = `
/*************************************************************
* 2.2) Settign colors palette
**************************************************************/
var newFillColor = new RGBColor();
newFillColor.red = ${color[0]};
newFillColor.green = ${color[1]};
newFillColor.blue = ${color[2]};

var colorBlack = new RGBColor();
colorBlack.red = ${colorBlack};
colorBlack.green = ${colorBlack};
colorBlack.blue = ${colorBlack};

var colorWhite = new RGBColor();
colorWhite.red = ${colorWhite};
colorWhite.green = ${colorWhite};
colorWhite.blue = ${colorWhite};

var colorGrayDark = new RGBColor();
colorGrayDark.red = ${colorGrayDark};
colorGrayDark.green = ${colorGrayDark};
colorGrayDark.blue = ${colorGrayDark};

var colorGrayMedium = new RGBColor();
colorGrayMedium.red = ${colorGrayMedium};
colorGrayMedium.green = ${colorGrayMedium};
colorGrayMedium.blue = ${colorGrayMedium};

var colorGrayLight = new RGBColor();
colorGrayLight.red = ${colorGrayLight};
colorGrayLight.green = ${colorGrayLight};
colorGrayLight.blue = ${colorGrayLight};
`

const VBSmakeCover = `
/*************************************************************
* 3.1) Get logo
* 3.2) Load logo
* 3.3) Difine size and position
* 3.4) Create text box
* 3.5) Difine size and position
* 3.6) Assign content
**************************************************************/
var artboardRef = docRef.artboards[0]; // 5.1)
var thisArtboardY = artboardRef.artboardRect[1]; // 5.1)
var thisArtboardX = artboardRef.artboardRect[0]; // 5.1)


// BG box
var bgBoxC = docRef.pathItems.rectangle (thisArtboardY, thisArtboardX, ${instaFrame}, ${instaFrame}, false); // 5.2)
bgBoxC.fillColor = newFillColor; // 5.3)

/*
Dim logoHeight, logoPosY, logoSizeRatio
Set artboardRef = docRef.Artboards(1)
Set logoImage = docRef.PlacedItems.Add()
logoSizeRatio = logoImage.width / logoImage.height
logoHeight = ${logoWidth} * logoSizeRatio
logoPosY = ${logoHeightCenter} - (logoHeight /2)
logoImage.File = "${logoFullPath}"
logoImage.Height = logoHeight
logoImage.Width = ${logoWidth}
logoImage.Position = Array(${logoPositionX},logoPosY)
logoImage.Embed()

Set titleBox = docRef.PathItems.Rectangle(${textWidth}, ${textHeight}, ${textPositionX}, ${coverTitlePositionY})
Set titleText = docRef.TextFrames.AreaText(titleBox)
titleText.Contents = "${coverTitle}"
titleText.CharacterAttributes.Alignment = 3
titleText.CharacterAttributes.Size = ${coverTitleFontSize}
titleText.CharacterAttributes.FillColor = colorGrayDark

Set subtitleBox = docRef.PathItems.Rectangle(${textWidth}, ${textHeight}, ${textPositionX}, ${coverSubTitlePositionY})
Set subtitleText = docRef.TextFrames.AreaText(subtitleBox)
subtitleText.Contents = "${coverSubTitle}"
subtitleText.CharacterAttributes.Alignment = 3
subtitleText.CharacterAttributes.Size = ${coverSubTitleFontSize}
subtitleText.CharacterAttributes.FillColor = colorGrayMedium

Set creditCoverBox = docRef.PathItems.Rectangle(${textWidth}, ${textHeight}, ${textPositionX}, ${creditTextPositionY})
Set creditCoverText = docRef.TextFrames.AreaText(creditCoverBox)
creditCoverText.Contents = "${creditTextPositionY}"
creditCoverText.CharacterAttributes.Alignment = 3
creditCoverText.CharacterAttributes.Size = ${creditTextFontSize}
creditCoverText.CharacterAttributes.FillColor = colorGrayLight
*/
`

const VBSmakeInternalSlides = `
'*************************************************************
' 4.1) Start for loop
' 4.2) Create text box
' 4.3) Difine size and position
' 4.4) Assign content
'*************************************************************
Dim slideArray
slideArray = Array(${slides})

Dim i
i = 0
For each slide in slideArray
  Dim artboardIndex
  artboardIndex = i + 1

  Set artboardRef = docRef.Artboards(artboardIndex)

  Set slideBox = docRef.PathItems.Rectangle(${slideTextWidth}, ${textHeight}, ${slideTextPositionX}, ${slideTextPositionY})
  Set slideText = docRef.TextFrames.AreaText(slideBox)
  slideText.Contents = slide
  slideText.TextRange.CharacterAttributes.Size = ${slideTextFontSize}
  slideText.TextRange.CharacterAttributes.Leading = ${slideTextLineHeight}
  slideText.TextRange.CharacterAttributes.FillColor = colorGrayDark

  Set newSXRectangle = docRef.PathItems.Rectangle(${slideRectPositionY},${slideRectSXPositionX},${slideRectSXWidth},${slideRectHeight})
  Set newDXRectangle = docRef.PathItems.Rectangle(${slideRectPositionY},${slideRectDXPositionX},${slideRectDXWidth},${slideRectHeight})

  newSXRectangle.Filled = True
  newDXRectangle.Filled = True

  newSXRectangle.FillColor = newFillColor
  newDXRectangle.FillColor = newFillColor

  Set footerBox = docRef.PathItems.Rectangle(${textWidth}, ${textHeight}, ${footerTextPositionX}, ${footerTextPositionY})
  Set footerText = docRef.TextFrames.AreaText(footerBox)
  footerText.Contents = "${footerTextContent}"
  footerText.TextRange.CharacterAttributes.Size = ${footerTextFontSize}
  footerText.TextRange.CharacterAttributes.FillColor = newFillColor

  Set creditInternalBox = docRef.PathItems.Rectangle(${textWidth}, ${textHeight}, ${textPositionX}, ${creditTextPositionY})
  Set creditInternalText = docRef.TextFrames.AreaText(creditInternalBox)
  creditInternalText.Contents = "${creditTextContent}"
  creditInternalText.TextRange.CharacterAttributes.Alignment = 3
  creditInternalText.TextRange.CharacterAttributes.Size = ${creditTextFontSize}
  creditInternalText.TextRange.CharacterAttributes.FillColor = colorGrayLight

  i = i + 1
Next
`

const VBSmakeLastSlide = `
/*************************************************************
* 5.1) Get this Artboard
* 5.2) Create bg box e define size and position
* 5.3) Assign props
* 5.4) Create text cta1 box
* 5.5) Assign props
* 5.6) Create text cta2 box
* 5.7) Assign props
* 5.8) Create text credits box
* 5.9) Assign props
**************************************************************/

// Generic
var artboardRef = docRef.artboards[8]; // 5.1)
var thisArtboardY = artboardRef.artboardRect[1]; // 5.1)
var thisArtboardX = artboardRef.artboardRect[0]; // 5.1)


// BG box
var bgBox = docRef.pathItems.rectangle (thisArtboardY, thisArtboardX, ${instaFrame}, ${instaFrame}, false); // 5.2)
bgBox.fillColor = newFillColor; // 5.3)


// Call to action text box - 1
var cta1Box = docRef.pathItems.rectangle (thisArtboardY - ${cta1TextPositionY}, thisArtboardX + ${textPositionX}, ${textWidth}, ${textHeight}, false);
var cta1Text = docRef.textFrames.areaText(cta1Box);
var cta1Props = cta1Text.textRange.characterAttributes;

cta1Text.paragraphs.add("${cta1TextContent}");
cta1Text.paragraphs[0].paragraphAttributes.justification = Justification.CENTER;
cta1Props.size = ${cta1TextFontSize};
cta1Props.fillColor = colorWhite;
cta1Props.textFont = app.textFonts.getByName("${font}");


// Call to action text box - 2
var cta2Box = docRef.pathItems.rectangle (thisArtboardY - ${cta2TextPositionY}, thisArtboardX + ${textPositionX}, ${textWidth}, ${textHeight}, false);
var cta2Text = docRef.textFrames.areaText(cta2Box);
var cta2Props = cta2Text.textRange.characterAttributes;

cta2Text.paragraphs.add("${cta2TextContent}");
cta2Text.paragraphs[0].paragraphAttributes.justification = Justification.CENTER;
cta2Props.size = ${cta2TextFontSize};
cta2Props.fillColor = colorWhite;
cta2Props.textFont = app.textFonts.getByName("${font}");


// Credit text box
var creditLastBox = docRef.pathItems.rectangle (thisArtboardY - ${creditTextPositionY}, thisArtboardX + ${textPositionX}, ${textWidth}, ${textHeight}, false);
var creditLastText = docRef.textFrames.areaText(creditLastBox);
var creditLastProps = creditLastText.textRange.characterAttributes;

creditLastText.paragraphs.add("${creditTextContent}");
creditLastText.paragraphs[0].paragraphAttributes.justification = Justification.CENTER;
creditLastProps.size = ${creditTextFontSize};
creditLastProps.fillColor = colorWhite;
creditLastProps.textFont = app.textFonts.getByName("${font}");
`

const VBSexport = `
'*************************************************************
' 6) Export all artboards to jpg format
'*************************************************************
Set fileSystemObject = CreateObject("Scripting.FileSystemObject")

' Creating a folder browser in VBScript can be a problem (relying on either Windows API calls
' or use of ActiveX controls which may not be present on a given system). Instead, use
' Illustrator's built-in JavaScript to display a file browser. DoJavaScript can return a value,
' in this example it's the platform specific full path to the chosen export folder.
' Export the artboards to PSD
destFolder = appRef.DoJavaScript("var destFolder = Folder.selectDialog('Select the folder to export the SWF files to:'); if (destFolder) folderPath = destFolder.fsName;")

If (fileSystemObject.FolderExists(destFolder)) Then
	destFile = destFolder + "/ExportedArtboard"
	Set objExportOptions = CreateObject("Illustrator.ExportOptionsJPEG")
  objExportOptions.AntiAliasing = False
  objExportOptions.QualitySetting = 70
	objExportOptions.SaveMultipleArtboards = true
	objExportOptions.ArtboardRange = "1-9"
	docRef.Export destFile, 1, objExportOptions
End If
`

/*

export const minimalTemplate = `
Option Explicit

Dim appRef

Set appRef = CreateObject("Illustrator.Application.CC2020")
`
*/

/*
Option Explicit

Dim objShell

Set objShell = WScript.CreateObject( "WScript.Shell" )
objShell.Run("""${illustratorPath}""")
Set objShell = Nothing
*/

function build() {
  const minimalTemplate = `
    ${VBSinfo}
    ${VBSinitIllustrator}
    ${VBScreateArtboards}
    ${VBSsetColorPalette}
    ${VBSmakeCover}

    ${VBSmakeLastSlide}

  `

  return minimalTemplate
}
  /*
  ${VBSmakeCover}
  ${VBSmakeInternalSlides}
  ${VBSmakeLastSlide}
  ${VBSexport}
  */

module.exports = {
  build
}