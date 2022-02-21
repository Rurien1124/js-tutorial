// Parent phone class
class Phone {
	constructor(name, value, hasCamera, hasPay, isGalaxy) {
		console.log("Init Phone ...");
		
		this.name = name;
		this.value = value;
		this.hasCamera = hasCamera;
		this.hasPay = hasPay;
		this.isGalaxy = isGalaxy;
	}
}

let phone = new Phone("Phone", 0, false, false, false);

console.log(phone);

// Child S20 phone class
class S20Phone extends Phone {
	constructor(name, value, hasCamera, hasPay, isGalaxy) {
		super(name, value, hasCamera, hasPay, isGalaxy);
		
		console.log("Init S20 ...");
	}
	
	pay() {
		console.log(`paid`);
	}
}

let s20Phone = new S20Phone("S20", 1000000, true, true, true);

console.log(s20Phone);

s20Phone.pay();