
    
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

' 1) Init Illustrator
' 2) Make artboards
' 3) Make cover
' 4) For each slide make jpg
' 5) Make lastest slide with thanks & contact info
' 6) Export artboards to .jpg
'*************************************************************

    
'*************************************************************
' 1) Start Adobe Illustrator
'*************************************************************
Set appRef = CreateObject("Illustrator.Application")

    
'*************************************************************
' 2) Create all artboards
'*************************************************************
Set docRef = appRef.Documents.Add(1, 1080.0, 1080.0, 9, 1, 20.0, 3)

    
Set newFillColor = CreateObject("Illustrator.RGBColor")
newFillColor.Red = 65
newFillColor.Green = 184
newFillColor.Blue = 131

Set colorBlack = CreateObject("Illustrator.RGBColor")
colorBlack.Red = 0
colorBlack.Green = 0
colorBlack.Blue = 0

Set colorWhite = CreateObject("Illustrator.RGBColor")
colorWhite.Red = 255
colorWhite.Green = 255
colorWhite.Blue = 255

Set colorGrayDark = CreateObject("Illustrator.RGBColor")
colorGrayDark.Red = 30
colorGrayDark.Green = 30
colorGrayDark.Blue = 30

Set colorGrayMedium = CreateObject("Illustrator.RGBColor")
colorGrayMedium.Red = 90
colorGrayMedium.Green = 90
colorGrayMedium.Blue = 90

Set colorGrayLight = CreateObject("Illustrator.RGBColor")
colorGrayLight.Red = 150
colorGrayLight.Green = 150
colorGrayLight.Blue = 150

    
    
'*************************************************************
' 5.1) Create text box
' 5.2) Difine size and position
' 5.3) Assign content: Title thanks
' 5.4) Create text box
' 5.5) Difine size and position
' 5.6) Assign content: Contacts
'*************************************************************

Set artboardRef = docRef.Artboards(8)
rect = artboardRef.ArtboardRect

Set rectPath = docRef.PathItems.Rectangle(rect(0),rect(0),1080.0,1080.0, false)

rectPath.Filled = True
rectPath.FillColor = newFillColor

Set cta1Box = docRef.PathItems.Rectangle(900.0, 1080.0, 90.0, 460.0)
Set cta1Text = docRef.TextFrames.AreaText(cta1Box)
cta1Text.Contents = "Gostou do conteúdo?"
cta1Text.TextRange.CharacterAttributes.Alignment = 3
cta1Text.TextRange.CharacterAttributes.Size = 70
cta1Text.TextRange.CharacterAttributes.FillColor = colorWhite
'cta1Text.TextRange.CharacterAttributes.TextFont = "Verdana"

Set cta2Box = docRef.PathItems.Rectangle(900.0, 1080.0, 90.0, 530.0)
Set cta2Text = docRef.TextFrames.AreaText(cta2Box)
cta2Text.Contents = "Compartilhe e deixe um comentario!"
cta2Text.TextRange.CharacterAttributes.Alignment = 3
cta2Text.TextRange.CharacterAttributes.Size = 40
cta2Text.TextRange.CharacterAttributes.FillColor = colorWhite
'cta2Text.TextRange.CharacterAttributes.TextFont = "Verdana"

Set creditLastBox = docRef.PathItems.Rectangle(900.0, 1080.0, 90.0, 1010.0)
Set creditLastText = docRef.TextFrames.AreaText(creditLastBox)
creditLastText.Contents = "by Leonardo D'Alessandro's IA"
creditLastText.TextRange.CharacterAttributes.Alignment = 3
creditLastText.TextRange.CharacterAttributes.Size = 24
creditLastText.TextRange.CharacterAttributes.FillColor = colorWhite
'creditLastText.TextRange.CharacterAttributes.TextFont = "Verdana"


  