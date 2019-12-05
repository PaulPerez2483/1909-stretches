class Calculator {
	constructor() {
		this.value = 0;
	}
	add(num) {
		this.value = num + this.value;
		return this;
	}

	subtract(num) {
		this.value = this.value - num;
		return this;
	}
	divide(num) {
		this.value = this.value / num;
		return this;
	}
	multiply(num) {
		this.value = this.value * num;
		return this;
	}
	clear(num) {
		this.value = 0;
		return this;
	}
}

module.exports = { Calculator };
