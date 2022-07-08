sap.ui.define(
    [
      "sap/ui/core/mvc/Controller"
    ],
    function (Controller) {
      "use strict";
      return Controller.extend("sap.ui.demo.walkthrough.contoller.Opportunity", {
        onInit: function() {
			this._data = {
				Rotations : [
				            
				            { Rotationbeteiligte : 'Engagement Partner' ,
                              Abschlussort : 'KAP',
                              Name :"Müller",
                              DatumRelevant: ,
                              RotationDatum:  ,
                              EndeCoolOff:
                            },

				            { Name : 'Pen' ,
                             size : '7X2X5'},

				            ]	
			};
			
			this.jModel = new sap.ui.model.json.JSONModel();
			this.jModel.setData(this._data);
	},

	onBeforeRendering: function() {
		this.byId('table2_copy').setModel(this.jModel);	
	},
    addRow : function(oArg){
		this._data.Products.push({Name : '', size : ''});
		this.jModel.refresh();//which will add the new record
	},
    fetchRecords : function(oArg){
		
		//data will be in this._data.Products
		console.log(this._data.Products);
		
	},
    deleteRow : function(oArg){
		var deleteRecord = oArg.getSource().getBindingContext().getObject();
		for(var i=0;i<this._data.Products.length;i++){
			if(this._data.Products[i] == deleteRecord )
					{
					//	pop this._data.Products[i] 
						this._data.Products.splice(i,1); //removing 1 record from i th index.
						this.jModel.refresh();
						break;//quit the loop
					}
		}
	},

      });
    });