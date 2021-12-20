/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
	"use strict";

	sap.ui.require([
		"za/co/spar/orders/display/splitscreenapp/test/integration/AllJourneys"
	], function() {
		QUnit.start();
	});
});