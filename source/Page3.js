// Copyright 2013, $ORGANIZATION
// All rights reserved.
enyo.kind({
	name: "Page3",
	kind: "FittableRows",
	fit: true,
	published: {
	},
	events: {
	},
	components: [
		{kind: "WebService", name:"yql", url: "http://things.192.168.1.54.xip.io/things", onResponse:"processResponse", callbackName: "callback"},
		{kind: "Header", onBtnNextTap: "handleBtnNext", onBtnBackTap: "handleBtnBack"},
		{kind: "enyo.Scroller", fit: true, touch: true, components: [
				{name: "main", classes: "nice-padding", allowHtml: true, content: "Page 3 has changed!"},
			]},
		{kind: "Footer", onBtnGetThingsTap: "handleBtnGetThings"}
	],
	create: function() {
		this.inherited(arguments);
		// initialization code goes here
	}
});
