export{}

class School {
    name: string;
    location: string;
    annualFee: string;

    constructor(name: string, location: string, annualFee: string) {
        this.name = name;
        this.location = location;
        this.annualFee = annualFee;
    }

    printDetails() {
        console.log("School name: " + this.name)
        console.log("location: " + this.location)
        console.log("annualFee: " + this.annualFee)
    }
}


let kit :School = new School("Kirirom", "Kompong spue", "$40,000");
kit.printDetails();

let paragon:School = new School("Paragon", "Phnom Penh", "$80,000");
paragon.printDetails();
