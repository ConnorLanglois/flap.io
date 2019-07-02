class Flapper {
	constructor (x, y, r, dir, skin) {
		this._x = x;
		this._y = y;
		this._r = r;
		this._dir = dir;
		this._skin = skin;

		this._velY = 0;

		EVENT_MANAGER.add(this, EVENT.KEYDOWN);
	}

	fly() {
		this._velY = Math.max(-10, this._velY - 20);
	}

	onKeydown(e) {
		const keyCode = e.keyCode;

		switch (keyCode) {
			case 32:
				this.fly();

				break;
		}
	}

	onUpdate() {
		const accelY = 0.4;

		this._x++;
		this._y = Math.min(height - this._r, this._y + this._velY);

		this._velY = this._y !== height - this._r ? this._velY + accelY : 0;
	}

	onRender() {
		FLAPIO.ctx.save();
		FLAPIO.ctx.beginPath();
		FLAPIO.ctx.arc(0, this._y, this._r, 0, 2 * Math.PI);
		FLAPIO.ctx.fill();
		FLAPIO.ctx.stroke();
		FLAPIO.ctx.closePath();
		FLAPIO.ctx.restore();
	}
}
