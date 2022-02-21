let sampleObject = {
	name: 'Sample object',
	value: 'Sample value',
	values: [
		'Sample value01', 'Sample value02', 'Sample value03'
	],
	show: function(start, end) {
		let samplePrint = new Array();
		
		for(let i=start; i<=end; i++) {
			if(this.values.length > i) {
				samplePrint.push(this.values[i]);
			}
		}
		
		console.log(`Show values: [${samplePrint}]`);
	}
}

sampleObject.show(1,1);