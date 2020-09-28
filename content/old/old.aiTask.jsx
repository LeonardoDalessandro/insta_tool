
    
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

    
/*************************************************************
* 1) Start Adobe Illustrator (deprecated)
**************************************************************/
//(deprecated)

    
/*************************************************************
* 2.1) Create all artboards
**************************************************************/
var docRef = app.documents.add(DocumentColorSpace.RGB, 1080.0, 1080.0, 9, DocumentArtboardLayout.GridByRow, 20.0, 3);

    
/*************************************************************
* 2.2) Settign colors palette
**************************************************************/
var newFillColor = new RGBColor();
newFillColor.red = 65;
newFillColor.green = 184;
newFillColor.blue = 131;

var colorBlack = new RGBColor();
colorBlack.red = 0;
colorBlack.green = 0;
colorBlack.blue = 0;

var colorWhite = new RGBColor();
colorWhite.red = 255;
colorWhite.green = 255;
colorWhite.blue = 255;

var colorGrayDark = new RGBColor();
colorGrayDark.red = 30;
colorGrayDark.green = 30;
colorGrayDark.blue = 30;

var colorGrayMedium = new RGBColor();
colorGrayMedium.red = 90;
colorGrayMedium.green = 90;
colorGrayMedium.blue = 90;

var colorGrayLight = new RGBColor();
colorGrayLight.red = 150;
colorGrayLight.green = 150;
colorGrayLight.blue = 150;

    
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
var bgBoxC = docRef.pathItems.rectangle (thisArtboardY, thisArtboardX, 1080.0, 1080.0, false); // 5.2)
bgBoxC.fillColor = newFillColor; // 5.3)

/*
Dim logoHeight, logoPosY, logoSizeRatio
Set artboardRef = docRef.Artboards(1)
Set logoImage = docRef.PlacedItems.Add()
logoSizeRatio = logoImage.width / logoImage.height
logoHeight = 500.0 * logoSizeRatio
logoPosY = 400.0 - (logoHeight /2)
logoImage.File = "D:/www/TOOLS/insta/insta_tool/content/logo-0-original.png"
logoImage.Height = logoHeight
logoImage.Width = 500.0
logoImage.Position = Array(290.0,logoPosY)
logoImage.Embed()

Set titleBox = docRef.PathItems.Rectangle(900.0, 1080.0, 90.0, 750.0)
Set titleText = docRef.TextFrames.AreaText(titleBox)
titleText.Contents = "Vue.js"
titleText.CharacterAttributes.Alignment = 3
titleText.CharacterAttributes.Size = 100
titleText.CharacterAttributes.FillColor = colorGrayDark

Set subtitleBox = docRef.PathItems.Rectangle(900.0, 1080.0, 90.0, 860.0)
Set subtitleText = docRef.TextFrames.AreaText(subtitleBox)
subtitleText.Contents = "Who is"
subtitleText.CharacterAttributes.Alignment = 3
subtitleText.CharacterAttributes.Size = 40
subtitleText.CharacterAttributes.FillColor = colorGrayMedium

Set creditCoverBox = docRef.PathItems.Rectangle(900.0, 1080.0, 90.0, 1010.0)
Set creditCoverText = docRef.TextFrames.AreaText(creditCoverBox)
creditCoverText.Contents = "1010.0"
creditCoverText.CharacterAttributes.Alignment = 3
creditCoverText.CharacterAttributes.Size = 24
creditCoverText.CharacterAttributes.FillColor = colorGrayLight
*/


    
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
var bgBox = docRef.pathItems.rectangle (thisArtboardY, thisArtboardX, 1080.0, 1080.0, false); // 5.2)
bgBox.fillColor = newFillColor; // 5.3)


// Call to action text box - 1
var cta1Box = docRef.pathItems.rectangle (thisArtboardY - 460.0, thisArtboardX + 90.0, 900.0, 1080.0, false);
var cta1Text = docRef.textFrames.areaText(cta1Box);
var cta1Props = cta1Text.textRange.characterAttributes;

cta1Text.paragraphs.add("Gostou do conteúdo?");
cta1Text.paragraphs[0].paragraphAttributes.justification = Justification.CENTER;
cta1Props.size = 70;
cta1Props.fillColor = colorWhite;
cta1Props.textFont = app.textFonts.getByName("Verdana");


// Call to action text box - 2
var cta2Box = docRef.pathItems.rectangle (thisArtboardY - 530.0, thisArtboardX + 90.0, 900.0, 1080.0, false);
var cta2Text = docRef.textFrames.areaText(cta2Box);
var cta2Props = cta2Text.textRange.characterAttributes;

cta2Text.paragraphs.add("Compartilhe e deixe um comentario!");
cta2Text.paragraphs[0].paragraphAttributes.justification = Justification.CENTER;
cta2Props.size = 40;
cta2Props.fillColor = colorWhite;
cta2Props.textFont = app.textFonts.getByName("Verdana");


// Credit text box
var creditLastBox = docRef.pathItems.rectangle (thisArtboardY - 1010.0, thisArtboardX + 90.0, 900.0, 1080.0, false);
var creditLastText = docRef.textFrames.areaText(creditLastBox);
var creditLastProps = creditLastText.textRange.characterAttributes;

creditLastText.paragraphs.add("by Leonardo D'Alessandro's IA");
creditLastText.paragraphs[0].paragraphAttributes.justification = Justification.CENTER;
creditLastProps.size = 24;
creditLastProps.fillColor = colorWhite;
creditLastProps.textFont = app.textFonts.getByName("Verdana");


  