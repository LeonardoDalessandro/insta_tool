const state = require('../../robots/state')

const content = state.load()
const localToolPath = "D:/www/TOOLS/insta/insta_tool"

const AIfileName = 'AITemplate.ai'
const AIfileDir = '/robots/adobe/template/minimal/'
const AIFullPath = localToolPath+AIfileDir+AIfileName


// GENERAL
const instaFrame = (1080.0).toFixed(1)
let color, slidesLenghtInternal
color = [1,2,3]
if(content.colorThemeRGB){
  color = content.colorThemeRGB
  slidesLenghtInternal = content.maximumSentence
}

const slidesLenght = slidesLenghtInternal + 2


// COVER
let logoImageName
if(content.downloadedImages){logoImageName = content.downloadedImages.logo.selectedImage.link}

const logoDirPath = '/content/'
const logoFullPath = localToolPath+logoDirPath+logoImageName
const logoWidth = (500.0).toFixed(1)
const logoHeightCenter = (400.0).toFixed(1)
const logoPositionX = ( (instaFrame - logoWidth) / 2 ).toFixed(1)



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
' 4) Export artboards to .jpg
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


dim fs, myImg, iWidth, iHeight, iRatio
Set fs= CreateObject("Scripting.FileSystemObject")
set myImg = "${logoFullPath}"
iWidth = myImg.width
iHight = myImg.height
iRatio = iWidth / iHight

Set artboardRef = docRef.Artboards(1)
rect = artboardRef.ArtboardRect

Set myPlacedItem = docRef.PlacedItems.Add()
myPlacedItem.File = "${logoFullPath}"

myPlacedItem.Position = Array (rect(0) + ${logoPositionX}, rect(0) - 150)


myPlacedItem.Width = ${logoWidth}
myPlacedItem.Height = ${logoWidth} * iRatio
myPlacedItem.Embed()
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

async function build() {
  const VBSfile = `
    ${VBSinfo}
    ${VBSinit}
    ${VBScolor}
    ${VBSlogo}
  `

  return VBSfile
}

/*
${VBSinfo}
${VBSinit}
${VBScolor}
${VBSlogo}
${VBSexport}
*/

module.exports = {
  build
}