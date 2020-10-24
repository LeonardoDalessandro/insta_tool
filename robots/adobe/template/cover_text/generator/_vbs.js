function build(slideLength, template) {

const localToolPath = "D:/www/TOOLS/insta/insta_tool"

const AIfileName = template
const AIfileDir = '/robots/adobe/template/cover_text/'
const AIFullPath = localToolPath+AIfileDir+AIfileName

// GENERAL
const slidesLengthInternal = slideLength
const slidesLength = slidesLengthInternal + 2

// COVER
const logoDirPath = '/content/'

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
    ${VBSLoadData}
    ${VBSexport}
  `

  return VBSfile
}

module.exports = {
  build
}