// Copyright 2013, $ORGANIZATION
// All rights reserved.
enyo.kind({
	name: "Page2",
	kind: "FittableRows",
	fit: true,
	components:[
		{kind: "Header", onBtnNextTap:"handleBtnNextBubble", onBtnBackTap:"handleBtnBackBubble"},
		{kind: "enyo.Scroller", fit: true, touch: true, components: [
				{name: "main", classes: "nice-padding", allowHtml: true, content: "This is page 2!", tag: "H1"},
				{kind: "enyo.Image", src: "assets/img/icon.png", style: "width:128px;height:128px"}
			]},
		{kind: "Footer"}
	],
 
 handleBtnNextBubble: function(inSender,inEvent){
      alert("Can't go forward");
  },
  handleBtnBackBubble: function(inSender,inEvent){
      new App().renderInto(document.body);
  }
});
