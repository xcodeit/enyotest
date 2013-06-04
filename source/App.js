enyo.kind({
	name: "App",
	kind: "FittableRows",
	fit: true,
	components:[
		{kind: "Header", onBtnNextTap: "handleBtnNext", onBtnBackTap: "handleBtnBack"},
		{kind: "enyo.Scroller", fit: true, touch: true, components: [
				{name: "main", classes: "nice-padding", allowHtml: true, content: "First page", tag: "H1"},
				{kind: "enyo.Image", src: "assets/img/icon.png", style: "width:128px;height:128px"}
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

  handleBtnNext: function(inSender,inEvent){
      new Page2().renderInto(document.body);
  },
  handleBtnBack: function(inSender,inEvent){
      alert("Can't go back");
  }
});
