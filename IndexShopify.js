'use strict'
const NumetricCon = require("./DataConnectorApi/NumetricDataConnectorApi/NumetricDataConnectorApi")
const ShopifyCon = require("./DataConnectorLogic/ShopifyDataConnectorLogic")
const ShopifyData = require("./DataConnectorApi/ShopifyDataConnectorApi/ShopifyDataDataConnectorApi")
const inputsMixPanel = require("./SampleData/exampleDataMixPanel")
const inputsShopify = require("./SampleData/exampleDataShopify")
const config = require("./Config/Config")

var conf = new config();


var lastUpdated = {
  created_at_min : conf.parameters().initialDateTimeShopify,
  timezone : 'GMT-11:00'
}

/*
ShopifyData.getTimeZone(function(result){	
		  console.log(result);
});
*/
ShopifyData.getOrders(lastUpdated,function(result){	
		  console.log(result);
});



/*
MixPanelData.getEvents(lastUpdated,function(result){
			console.log(result);
		});
*/


//delete rows
//NumetricCon.deleteRowsDataSetNumetric("374bdb59-c2ce-49c6-b181-bfd8f6a36c8c",{rows:[1,2,3,4,5,6,7,8,9,10,11,12,13,14],});


//var iMp = new inputsMixPanel()
//grabar datos en dataset mix panel
//updateRowsMixPanel(iMp.datamp);
//updateRowsMixPanel(iMp.inputMixPanel);

//var iS = new inputsShopify(); 
//Grabar datos en datasetEvent
//getRowsShopifyEvent(iS.inputEvent.events);
//Grabar datos en datasetCustomCollection
//getRowsShopifyCustomCollection(iS.inputCustomCollection.custom_collections);
//Grabar datos en datasetComment
//getRowsShopifyComment(iS.inputComment.comments);
//Grabar datos en datasetProduct
//getRowsShopifyProduct(iS.inputProduct.products);

//generar data set
//MixPanel
/*
var conf = new config();
var finalFormatMixPanel = NumetricMixPanelFormat(inputsMixPanel.inputMixPanel)
var datasetmixpanel = utils.GenerateDataSetsNumetricFromMixPanel(finalFormatMixPanel);
//console.log(datasetmixpanel.DataSetList[0])
generateDataSetNumetric(datasetmixpanel.DataSetList[0]);
*/
//Shopify
//var datasetshopify = utils.GenerateDataSetsNumetricFromShopify(iS.inputOrder.orders[0],"id");
//utils.WriteFileTxt(JSON.stringify(datasetshopify));
//console.log(datasetshopify);
//generateDataSetNumetric(datasetsShopify.datasetOrderRefundsTransaction);

//MixPanelCon.generateDataSetMixPanel();
//MixPanelCon.testPreserveValue();
