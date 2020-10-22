
    
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

    
'*************************************************************
' 1) Get and open document
'*************************************************************
Set appRef = CreateObject("Illustrator.Application")
appRef.Open("D:/www/TOOLS/insta/insta_tool/robots/adobe/template/cover_text/AITemplateDicas.ai")
Set docRef = appRef.ActiveDocument

    
'*************************************************************
' 4) Import variables from .xml file
'*************************************************************
docRef.ImportVariables ("D:/www/TOOLS/insta/insta_tool/content/aiTask.xml")
Set thisDataset = docRef.DataSets.Item(1)
thisDataset.Display
docRef.SaveAs("D:/www/TOOLS/insta/insta_tool/content/ready.ai")

    
'*************************************************************
' 5) Export all artboards to jpg format
'*************************************************************
Set fileSystemObject = CreateObject("Scripting.FileSystemObject")

Dim I
For I = 0 To 9
  destFile = "D:/www/TOOLS/insta/insta_tool/content/img/ExportedArtboard" & (I+1)
  docRef.Artboards.SetActiveArtboardIndex(I)
  Set objExportOptions = CreateObject("Illustrator.ExportOptionsJPEG")
  objExportOptions.AntiAliasing = False
  objExportOptions.QualitySetting = 70
  objExportOptions.ArtBoardClipping = true
  docRef.Export destFile, 1, objExportOptions
Next	

  