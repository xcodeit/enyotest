// Copyright 2013, $ORGANIZATION
// All rights reserved.
enyo.kind({
	name: "Header",
	kind: "Control",
	published: {
	},
	events: {
	},
	components: [
		{kind: "onyx.Toolbar", layoutKind: "FittableColumnsLayout", components: [
				{name: "Back", kind: "onyx.Button", style: "width:80px;background:green", content: "Back", ontap: "handleBtnBack"},
				{fit: true},
				{kind: "onyx.Button", style: "width:80px;background:red", content: "Next", ontap: "handleBtnNext"}
			]}
	],
	create: function() {
		this.inherited(arguments);
		// initialization code goes here
	},
	handleBtnNext: function(inSender,inEvent){
        // It's a good practice to also send the inSender/inEvent back to the parent as identification. 
        // Parent control can know which control is sending.
        this.bubble("onBtnNextTap",inSender);
        inEvent.preventDefault();
        // Sometimes to stop clicking through, we use inEvent.preventDefault(); to stop events from
        // transferring over.
    },
    handleBtnBack: function(inSender,inEvent){
        // Alternatively you can send with only one parameter which is the "custom event name".
        this.bubble("onBtnBackTap",inSender);
        inEvent.preventDefault();
    }
});
