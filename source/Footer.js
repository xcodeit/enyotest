// Copyright 2013, $ORGANIZATION
// All rights reserved.
enyo.kind({
	name: "Footer",
	kind: "Control",
	published: {
	},
	events: {
	},
	components: [
		{kind: "onyx.Toolbar", layoutKind: "FittableColumnsLayout", components: [
				{kind: "onyx.Button", content: "Get Things", ontap: "handleBtnGetThings", fit: true}
			]}
	],
	create: function() {
		this.inherited(arguments);
		// initialization code goes here
	},
   handleBtnGetThings:function(inSender,inEvent) {
      this.bubble("onBtnGetThingsTap",inSender);
        inEvent.preventDefault();
   }
});
