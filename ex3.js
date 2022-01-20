"use strict";
exports.__esModule = true;
var School = /** @class */ (function () {
    function School(name, location, annualFee) {
        this.name = name;
        this.location = location;
        this.annualFee = annualFee;
    }
    School.prototype.printDetails = function () {
        console.log("School name: " + this.name);
        console.log("location: " + this.location);
        console.log("annualFee: " + this.annualFee);
    };
    return School;
}());
var kit = new School("Kirirom", "Kompong spue", "$40,000");
kit.printDetails();
var paragon = new School("Paragon", "Phnom Penh", "$80,000");
paragon.printDetails();
