"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var router_deprecated_1 = require('@angular/router-deprecated');
var app_component_1 = require('./app.component');
// enableProdMode();
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent)
    .then(function (success) { return console.log("Bootstrap success"); })
    .catch(function (error) { return console.log(error); });
router_deprecated_1.ROUTER_PROVIDERS;
//# sourceMappingURL=main.js.map