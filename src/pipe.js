class Pipe {
	constructor (x, y, width, height) {
		this._x = x;
		this._y = y;
		this._width = width;
		this._height = height;
	}

	onUpdate() {
		this._x += FLAPIO.flapper.x;
	}

	onRender() {
		FLAPIO.ctx.save();
		FLAPIO.ctx.fillRect(this._x, this._y, this._width, this._height);
		FLAPIO.ctx.restore();
	}

	get x() {
		return this._x;
	}
}
