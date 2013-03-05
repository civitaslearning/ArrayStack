function ArrayStack () {
	this._data = [];
}

ArrayStack.prototype.configure = function (config) {
	if (config instanceof Array) {
		return this.setData(config);
	}
	else if (typeof(config) != 'object') {
		throw new TypeError("Invalid configuration object received.");
		return false;
	}
	else {
		if (config.data instanceof Array) {
			return this.setData(config.data);
		}
	}
	return true;
};

ArrayStack.prototype.setData = function (newData) {
	if (newData instanceof Array) {
		this._data = newData.slice(0);
	}
	else {
		throw new TypeError("Invalid data sent to setData().");
		return false;
	}
	return true;
};

ArrayStack.prototype.push = function (newData) {
	return this._data.push(newData);
};

ArrayStack.prototype.pop = function () {
	if (this._data.length > 0) {
		return this._data.pop();
	}
	return false;
};

ArrayStack.prototype.last = function () {
	if (this._data.length > 0) {
		return this._data[this._data.length-1];
	}
	return false;
};

ArrayStack.prototype.first = function () {
	if (this._data.length > 0) {
		return this._data[0];
	}
	return false;
};

ArrayStack.prototype.toArray = function () {
	return this._data.slice(0);
};

// aliases
ArrayStack.prototype.add    = ArrayStack.prototype.push;
ArrayStack.prototype.remove = ArrayStack.prototype.pop;
ArrayStack.prototype.back   = ArrayStack.prototype.last;


exports.init = function (input, callback) {
	var arraystack = new ArrayStack();
	var config = {
		data : []
	};

	try {
		if (input) {
			arraystack.configure(input);
		}
		else {
			arraystack.configure(config);
		}
	}
	catch (err) {
		return callback(err, arraystack);
	}
	return callback(null, arraystack);
};
