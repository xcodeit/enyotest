// Copyright 2013, $ORGANIZATION
// All rights reserved.
enyo.kind({
	name: "Page2",
	kind: "FittableRows",
	fit: true,
	components:[
		{kind: "WebService", name:"yql", url: "http://things.192.168.1.54.xip.io/things", onResponse:"processResponse", callbackName: "callback"},
		{kind: "Header", onBtnNextTap: "handleBtnNext", onBtnBackTap: "handleBtnBack"},
		{kind: "enyo.Scroller", fit: true, touch: true, components: [
				{name: "main", classes: "nice-padding", allowHtml: true, content: "Page 2 has changed!"},
			]},
		{kind: "Footer", onBtnGetThingsTap: "handleBtnGetThings"}
	],
 
 handleBtnNext: function(inSender,inEvent){
	alert("Can't go forward")
  },
  handleBtnGetThings: function(inSender,inEvent){
      this.$.yql.send();
  },
  processResponse: function(inSender, inEvent) {
		this.$.main.setContent(JSON.stringify(inEvent.data, null, 2));
	},
  handleBtnBack: function(inSender,inEvent){
      new App().renderInto(document.body);
  }
});
