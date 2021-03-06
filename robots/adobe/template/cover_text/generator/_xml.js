function build(slides, slideLength, mainTitle, author) {

// GENERAL
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


  const XMLfile = `<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd" [
	<!ENTITY ns_flows "http://ns.adobe.com/Flows/1.0/">
	<!ENTITY ns_extend "http://ns.adobe.com/Extensibility/1.0/">
	<!ENTITY ns_graphs "http://ns.adobe.com/Graphs/1.0/">
	<!ENTITY ns_vars "http://ns.adobe.com/Variables/1.0/">
	<!ENTITY ns_custom "http://ns.adobe.com/GenericCustomNamespace/1.0/">
	<!ENTITY ns_flows "http://ns.adobe.com/Flows/1.0/">
	<!ENTITY ns_svg "http://www.w3.org/2000/svg">
	<!ENTITY ns_ai "http://ns.adobe.com/AdobeIllustrator/10.0/">
	<!ENTITY ns_sfw "http://ns.adobe.com/SaveForWeb/1.0/">
	<!ENTITY ns_adobe_xpath "http://ns.adobe.com/XPath/1.0/">
	<!ENTITY ns_imrep "http://ns.adobe.com/ImageReplacement/1.0/">
]>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" x="0px" y="0px" width="0px" height="0px" viewBox="0 0 0 0" style="overflow:visible;" xml:space="preserve">
  <variableSets  xmlns="&ns_vars;">
    <variableSet  locked="none" varSetName="binding1">
      <variables>
        <variable  category="http://ns.adobe.com/Flows/1.0/" trait="textcontent" varName="author"></variable>
        <variable  category="http://ns.adobe.com/Flows/1.0/" trait="textcontent" varName="titleMain"></variable>
        <variable  category="http://ns.adobe.com/Flows/1.0/" trait="textcontent" varName="titleSlide1"></variable>
        <variable  category="http://ns.adobe.com/Flows/1.0/" trait="textcontent" varName="titleSlide2"></variable>
        <variable  category="http://ns.adobe.com/Flows/1.0/" trait="textcontent" varName="titleSlide3"></variable>
        <variable  category="http://ns.adobe.com/Flows/1.0/" trait="textcontent" varName="titleSlide4"></variable>
        <variable  category="http://ns.adobe.com/Flows/1.0/" trait="textcontent" varName="sentenceSlide1"></variable>
        <variable  category="http://ns.adobe.com/Flows/1.0/" trait="textcontent" varName="sentenceSlide2"></variable>
        <variable  category="http://ns.adobe.com/Flows/1.0/" trait="textcontent" varName="sentenceSlide3"></variable>
        <variable  category="http://ns.adobe.com/Flows/1.0/" trait="textcontent" varName="sentenceSlide4"></variable>
      </variables>
      <v:sampleDataSets  xmlns="http://ns.adobe.com/GenericCustomNamespace/1.0/" xmlns:v="http://ns.adobe.com/Variables/1.0/">
        <v:sampleDataSet  dataSetName="templateMinimalInsta">
          <author>
						<p>${author}</p>
					</author>
					<titleMain>
						<p>${mainTitle}</p>
					</titleMain>
					<titleSlide1>
						<p>${mainTitle}</p>
					</titleSlide1>					
					<titleSlide2>
						<p>${mainTitle}</p>
					</titleSlide2>
					<titleSlide3>
						<p>${mainTitle}</p>
					</titleSlide3>
					<titleSlide4>
						<p>${mainTitle}</p>
					</titleSlide4>
					<sentenceSlide1>
						<p>${slideTemp[0]}</p>
					</sentenceSlide1>
					<sentenceSlide2>
						<p>${slideTemp[1]}</p>
					</sentenceSlide2>
					<sentenceSlide3>
						<p>${slideTemp[2]}</p>
					</sentenceSlide3>
					<sentenceSlide4>
						<p>${slideTemp[3]}</p>
					</sentenceSlide4>
        </v:sampleDataSet>
      </v:sampleDataSets>
    </variableSet>
  </variableSets>
</svg>
  `

  return XMLfile
}


module.exports = {
  build
}