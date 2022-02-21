class SampleClass {
	constructor(name, value, values) {
		this.name = name;
		this.value = value;
		this.values = values;
		this.show = function(start, end) {
			let samplePrint = new Array();

			for (let i = start; i <= end; i++) {
				if (this.values.length > i) {
					samplePrint.push(this.values[i]);
				}
			}

			console.log(`Show values: [${samplePrint}]`);
		};
	}
}

let sampleObject = new SampleClass("sampleName", "sampleValue", [1,2,3]);
sampleObject.show(1,2);