
    
/*************************************************************
* 1) Get and open document
**************************************************************/
var docRef = app.activeDocument;

    
/*************************************************************
* 2) Setting main color
**************************************************************/

var newFillColor = new RGBColor();
newFillColor.red = 65;
newFillColor.green = 184;
newFillColor.blue = 131;

var swatch = docRef.swatches.add();
swatch.color = newFillColor;
swatch.name = "CreateSwatch";

//var coloredElements = docRef.groupItems.getByName("coloredElements")
//coloredElements.coloredElements = newFillColor

    
/*************************************************************
* 3.1) Get logo
* 3.2) Load logo
* 3.3) Difine size and position
* 3.4) Create text box
* 3.5) Difine size and position
* 3.6) Assign content
**************************************************************/
/*
var artboardRef = docRef.artboards[0]; // 5.1)
var thisArtboardY = artboardRef.artboardRect[1]; // 5.1)
var thisArtboardX = artboardRef.artboardRect[0]; // 5.1)

var logoFile = File("D:/www/TOOLS/insta/insta_tool/content/logo-0-original.png");
var myDoc = docRef.add();
var myPlacedItem = myDoc.placedItems.add();
myPlacedItem.file = logoFile;

var logoSizeRatio = myPlacedItem.width / myPlacedItem.height;
var logoHeight = 500.0 * logoSizeRatio;
var logoPosY = 400.0 - (logoHeight /2);


myPlacedItem.position = Array (290.0,logoPosY);
myPlacedItem.height = logoHeight;
myPlacedItem.width = 500.0;
myPlacedItem.embed();
*/

    
/*************************************************************
* 4) Export all artboards to jpg format
*************************************************************/
//Set fileSystemObject = CreateObject("Scripting.FileSystemObject")

/*
* Creating a folder browser in VBScript can be a problem (relying on either Windows API calls
* or use of ActiveX controls which may not be present on a given system). Instead, use
* Illustrator's built-in JavaScript to display a file browser. DoJavaScript can return a value,
* in this example it's the platform specific full path to the chosen export folder.
* Export the artboards to PSD
*/

/*
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
*/

  