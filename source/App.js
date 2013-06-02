enyo.kind({
	name: "App",
	kind: "FittableRows",
	fit: true,
	components:[
		{kind: "Header", onBtnNextTap:"handleBtnNextBubble", onBtnBackTap:"handleBtnBackBubble"},
		{kind: "enyo.Scroller", fit: true, touch: true, components: [
				{name: "main", classes: "nice-padding", allowHtml: true}
			]},
		{kind: "Footer"}
	],
		create: function(){
		this.inherited(arguments);
		console.log("App is created in memory");
	},
	rendered : function(){
		this.inherited(arguments);
		console.log("App is created in rendered into DOM");
	},

  handleBtnNextBubble: function(inSender,inEvent){
      new Page2().renderInto(document.body);
  },
  handleBtnBackBubble: function(inSender,inEvent){
      alert("Can't go back");
  }
});
