class OrderedStream {
	constructor(n) {
		this.pointer = 0;
		this.list = [];
	}

	insert(id, val) {
		let chunk = [];
		this.list[id - 1] = val;
		while (this.list[this.pointer]) {
			chunk.push(this.list[this.pointer]);
			this.pointer++;
		}
		return chunk;
	}
}
//["OrderedStream", "insert", "insert", "insert", "insert", "insert"]
//[[5], [3, "ccccc"], [1, "aaaaa"], [2, "bbbbb"], [5, "eeeee"], [4, "ddddd"]]

let os = new OrderedStream(5);
console.log(os.insert(3, "ccccc"));
console.log(os.insert(1, "aaaaa"));
console.log(os.insert(2, "bbbbb"));
console.log(os.insert(5, "eeeee"));
console.log(os.insert(4, "ddddd"));



