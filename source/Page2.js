// Copyright 2013, $ORGANIZATION
// All rights reserved.
enyo.kind({
	name: "Page2",
	kind: "FittableRows",
	fit: true,
	components:[
		{kind: "WebService", name:"yql", url: "http://things.192.168.0.15.xip.io/things", onResponse:"processResponse", callbackName: "callback"},
		{kind: "Header", onBtnNextTap: "handleBtnNextBubble", onBtnBackTap: "handleBtnBackBubble"},
		{kind: "enyo.Scroller", fit: true, touch: true, components: [
				{name: "main", classes: "nice-padding", allowHtml: true, content: "Page 2 has changed!", tag: "H1"},
				{kind: "enyo.Image", src: "assets/img/icon.png", style: "width:128px;height:128px"}
			]},
		{kind: "Footer", onBtnNextPageTap: "handleBtnNextPageBubble",}
	],
 
 handleBtnNextBubble: function(inSender,inEvent){
      alert("Can't go forward");
  },
  handleBtnNextPageBubble: function(inSender,inEvent){
      this.$.yql.send()
  },
  processResponse: function(inSender, inEvent) {
		// do something with it
		//this.$.textArea.setValue(JSON.stringify(inEvent.data, null, 2));
		this.$.main.setContent(JSON.stringify(inEvent.data, null, 2));
		alert(JSON.stringify(inEvent.data, null, 2));
	},
  handleBtnBackBubble: function(inSender,inEvent){
      new App().renderInto(document.body);
  }
});
