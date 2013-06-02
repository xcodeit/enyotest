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
				{kind: "onyx.Button", content: "Go Next Page2", ontap: "handleBtnNextPage", fit: true}
			]}
	],
	create: function() {
		this.inherited(arguments);
		// initialization code goes here
	},
   handleBtnNextPage:function(inSender,inEvent) {
      //Broadcast a global signal using enyo.Signal.
      alert("Should do something");
   }
});
