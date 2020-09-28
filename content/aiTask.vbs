
    
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
appRef.Open("D:/www/TOOLS/insta/insta_tool/robots/adobe/template/minimal/AITemplate.ai")
Set docRef = appRef.ActiveDocument

    
'*************************************************************
' 2) Setting main color
'*************************************************************

Set inputColor = CreateObject("Illustrator.RGBColor")
inputColor.Red = 65
inputColor.Green = 184
inputColor.Blue = 131

For Each pathArt in docRef.PathItems
  pathArt.Selected = True
  pathArt.fillColor = inputColor
Next

    
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
myPlacedItem.File = "D:/www/TOOLS/insta/insta_tool/content/logo-0-original.png"

myPlacedItem.Position = Array (rect(0) + 290.0, rect(0) - 150.0)
myPlacedItem.Width = 500.0
myPlacedItem.Height = 500.0
myPlacedItem.Embed()

    
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
  destFile = "D:/www/TOOLS/insta/insta_tool/content//img/ExportedArtboard" & (I+1)
  docRef.Artboards.SetActiveArtboardIndex(I)
  Set objExportOptions = CreateObject("Illustrator.ExportOptionsJPEG")
  objExportOptions.AntiAliasing = False
  objExportOptions.QualitySetting = 70
  objExportOptions.ArtBoardClipping = true
  docRef.Export destFile, 1, objExportOptions
Next	

  