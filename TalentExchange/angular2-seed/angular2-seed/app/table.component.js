System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var TableComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TableComponent = (function () {
                function TableComponent() {
                }
                TableComponent = __decorate([
                    core_1.Component({
                        selector: 'table',
                        template: '<table><tr><th>Enter your information</th></tr><tr><td>FirstName</td><td>FIRSTNAMEINFO</td></tr><tr><td>Candidate information</td><td>CANINFO</td></tr><tr><td>Contact Info<td><td>CONTACTINFO</td></tr></table>'
                    }), 
                    __metadata('design:paramtypes', [])
                ], TableComponent);
                return TableComponent;
            }());
            exports_1("TableComponent", TableComponent);
        }
    }
});
//# sourceMappingURL=table.component.js.map