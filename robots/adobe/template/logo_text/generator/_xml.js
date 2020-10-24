function build(slides, slideLength, searchTerm, prefix) {

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

// COVER
const title = searchTerm
const subTitle = prefix

// INTERNAL
const fullTitle = `${title} - ${subTitle}`

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
        <variable  category="http://ns.adobe.com/Flows/1.0/" trait="textcontent" varName="prefix"></variable>
        <variable  category="http://ns.adobe.com/Flows/1.0/" trait="textcontent" varName="searchTerm"></variable>
        <variable  category="http://ns.adobe.com/Flows/1.0/" trait="textcontent" varName="titlePost1"></variable>
        <variable  category="http://ns.adobe.com/Flows/1.0/" trait="textcontent" varName="titlePost2"></variable>
        <variable  category="http://ns.adobe.com/Flows/1.0/" trait="textcontent" varName="titlePost3"></variable>
        <variable  category="http://ns.adobe.com/Flows/1.0/" trait="textcontent" varName="titlePost4"></variable>
        <variable  category="http://ns.adobe.com/Flows/1.0/" trait="textcontent" varName="titlePost5"></variable>
        <variable  category="http://ns.adobe.com/Flows/1.0/" trait="textcontent" varName="titlePost6"></variable>
        <variable  category="http://ns.adobe.com/Flows/1.0/" trait="textcontent" varName="titlePost7"></variable>
        <variable  category="http://ns.adobe.com/Flows/1.0/" trait="textcontent" varName="text1"></variable>
        <variable  category="http://ns.adobe.com/Flows/1.0/" trait="textcontent" varName="text2"></variable>
        <variable  category="http://ns.adobe.com/Flows/1.0/" trait="textcontent" varName="text3"></variable>
        <variable  category="http://ns.adobe.com/Flows/1.0/" trait="textcontent" varName="text4"></variable>
        <variable  category="http://ns.adobe.com/Flows/1.0/" trait="textcontent" varName="text5"></variable>
        <variable  category="http://ns.adobe.com/Flows/1.0/" trait="textcontent" varName="text6"></variable>
        <variable  category="http://ns.adobe.com/Flows/1.0/" trait="textcontent" varName="test7"></variable>
      </variables>
      <v:sampleDataSets  xmlns="http://ns.adobe.com/GenericCustomNamespace/1.0/" xmlns:v="http://ns.adobe.com/Variables/1.0/">
        <v:sampleDataSet  dataSetName="templateMinimalInsta">
          <prefix>
            <p>${subTitle}</p>
          </prefix>
          <searchTerm>
            <p>${title}</p>
          </searchTerm>
          <text1>
            <p>${slideTemp[0]}</p>
          </text1>    
          <text2>
            <p>${slideTemp[1]}</p>
          </text2>
          <text3>
            <p>${slideTemp[2]}</p>
          </text3>
          <text4>
            <p>${slideTemp[3]}</p>
          </text4>
          <text5>
            <p>${slideTemp[4]}</p>
          </text5>
          <text6>
            <p>${slideTemp[5]}</p>
          </text6>
          <test7>
            <p>${slideTemp[6]}</p>
          </test7>
          <titlePost1>
					  <p>${fullTitle}</p>
          </titlePost1>
          <titlePost2>
            <p>${fullTitle}</p>
          </titlePost2>
          <titlePost3>
            <p>${fullTitle}</p>
          </titlePost3>
          <titlePost4>
            <p>${fullTitle}</p>
          </titlePost4>
          <titlePost5>
            <p>${fullTitle}</p>
          </titlePost5>
          <titlePost6>
            <p>${fullTitle}</p>
          </titlePost6>
          <titlePost7>
            <p>${fullTitle}</p>
          </titlePost7>
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