function build(logo, slideLenght, colorTheme) {

const localToolPath = "D:/www/TOOLS/insta/insta_tool"

const AIfileName = 'AITemplate.ai'
const AIfileDir = '/robots/adobe/template/logo_text/'
const AIFullPath = localToolPath+AIfileDir+AIfileName

// GENERAL
const instaFrame = (1080.0).toFixed(1)
const color = colorTheme
const slidesLenghtInternal = slideLenght
const slidesLenght = slidesLenghtInternal + 2

// COVER
const logoImageName = 'logo-1-original.png'
const logoDirPath = '/content/'
const logoFullPath = localToolPath+logoDirPath+logoImageName
const downloadedImageWidth = logo.width
const downloadedImageHeight = logo.height
const downloadedImageRatio = downloadedImageWidth / downloadedImageHeight
const logoWidth = (500.0).toFixed(1)
const logoHeight = (logoWidth / downloadedImageRatio).toFixed(1)
const logoPositionY = (400.0 - (logoHeight/2)).toFixed(1)
const logoPositionX = ( (instaFrame - logoWidth) / 2 ).toFixed(1)

// XML
const XMLfileName = 'aiTask.xml'
const XMLFullPath = localToolPath+logoDirPath+XMLfileName

// NEW AI FILE
const newAIfileName = 'ready.ai'
const newAIFullPath = localToolPath+logoDirPath+newAIfileName

// EXPORT
const exportFullPath = localToolPath+logoDirPath+'img'

const VBSinfo = `
'*************************************************************
'
' AUTOGENERATE FILE 
' License MIT
' Author: Leonardo D'Alessandro

' NOTICE:  works only on Win OS 
' 
'*************************************************************

' aiTask.vbs

' DESCRIPTION

' 1) Get and open document
' 2) Change main color
' 3) Set cover image
' 4) Import .xml
' 5) Export artboards to .jpg
'**************************************************************
`

const VBSinit = `
'*************************************************************
' 1) Get and open document
'*************************************************************
Set appRef = CreateObject("Illustrator.Application")
appRef.Open("${AIFullPath}")
Set docRef = appRef.ActiveDocument
`

const VBScolor = `
'*************************************************************
' 2) Setting main color
'*************************************************************

Set inputColor = CreateObject("Illustrator.RGBColor")
inputColor.Red = ${color[0]}
inputColor.Green = ${color[1]}
inputColor.Blue = ${color[2]}

For Each pathArt in docRef.PathItems
  pathArt.Selected = True
  pathArt.fillColor = inputColor
Next
`

const VBSlogo = `
'*************************************************************
' 3.1) Get logo
' 3.2) Load logo
' 3.3) Difine size and position
' 3.4) Create text box
' 3.5) Difine size and position
' 3.6) Assign content
'*************************************************************

Set artboardRef = docRef.Artboards(1)
rect = artboardRef.ArtboardRect

Set myPlacedItem = docRef.PlacedItems.Add()
myPlacedItem.File = "${logoFullPath}"

myPlacedItem.Position = Array (rect(0) + ${logoPositionX}, rect(0) - ${logoPositionY})
myPlacedItem.Width = ${logoWidth}
myPlacedItem.Height = ${logoHeight}
myPlacedItem.Embed()
`

const VBSLoadData = `
'*************************************************************
' 4) Import variables from .xml file
'*************************************************************
docRef.ImportVariables ("${XMLFullPath}")
Set thisDataset = docRef.DataSets.Item(1)
thisDataset.Display
docRef.SaveAs("${newAIFullPath}")
`

const VBSexport = `
'*************************************************************
' 5) Export all artboards to jpg format
'*************************************************************
Set fileSystemObject = CreateObject("Scripting.FileSystemObject")

Dim I
For I = 0 To 9
  destFile = "${exportFullPath}/ExportedArtboard" & (I+1)
  docRef.Artboards.SetActiveArtboardIndex(I)
  Set objExportOptions = CreateObject("Illustrator.ExportOptionsJPEG")
  objExportOptions.AntiAliasing = False
  objExportOptions.QualitySetting = 70
  objExportOptions.ArtBoardClipping = true
  docRef.Export destFile, 1, objExportOptions
Next	
`
  const VBSfile = `
    ${VBSinfo}
    ${VBSinit}
    ${VBScolor}
    ${VBSlogo}
    ${VBSLoadData}
    ${VBSexport}
  `

  return VBSfile
}

module.exports = {
  build
}