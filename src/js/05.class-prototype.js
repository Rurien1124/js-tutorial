class SampleClass {
	constructor(name, value, values) {
		this.name = name;
		this.value = value;
		this.values = values;
	}
	
	show(start, end) {
		let samplePrint = new Array();
	
		for (let i = start; i <= end; i++) {
			if (this.values.length > i) {
				samplePrint.push(this.values[i]);
			}
		}
		
		console.log(`Show values: [${samplePrint}]`);
	}
}

let sampleObject = new SampleClass("sample name", "sample value", [1,2,3]);
sampleObject.show(1, 3);

// Change prototype show defined in class
SampleClass.prototype.show = function(start, end) {
	console.log(`Modified show ${start} ${end}`);
};

sampleObject.show(1, 3);
