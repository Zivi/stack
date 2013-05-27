function Stack() {
	this.head = null;

	this.push = function(val) {
		var node = {
			val: val,
			next: this.head
		}
		this.head = node;
	};
	this.pop = function() {
		var popVal = this.head.val;
		this.head = this.head.next;
		return popVal;
	};

	this.isEmpty = function() {
		return this.head === null;
	}

	this.peek = function() {
		var peekVal = this.head.val;
		return peekVal;
	}

	this.size = function() {
		node = this.head;
		var counter = 0;
		while (node != null) {
			counter ++;
			node = node.next;
		} return counter;
	}
}
