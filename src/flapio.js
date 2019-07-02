class Flapio {
	constructor () {
		this._canvas = createCanvas(width, height, true);
		this._ctx = this._canvas.getContext('2d');

		this._flapper = null;
		this._scene = null;

		this._ticks = 0;
		this._tticks = 0;
		this._tps = 0;
		this._lastTime = 0;
	}

	run() {
		const r = randomInt(5, 10);
		const x = 0;
		const y = height / 2;
		const dir = 0;
		const skin = randomColor();

		const updateInterval = 1000 / 60;

		this._flapper = new Flapper(x, y, r, dir, skin);
		this._scene = new Scene();

		window.setInterval(this.onTick.bind(this), updateInterval);
	}

	onTick() {
		this.onUpdate();
		this.onRender();

		if (Date.now() - this._lastTime >= 1000) {
			this._tps = this._tticks;
			this._tticks = 0;
			this._lastTime = Date.now();
		}

		this._tticks++;
		this._ticks++;
	}

	onUpdate() {
		this._flapper.onUpdate();
	}

	onRender() {
		this._ctx.save();
		this._ctx.clearRect(0, 0, width, height);
		this._ctx.translate(width / 2, 0);

		this._flapper.onRender();

		this._ctx.restore();
	}

	get flapper() {
		return this._flapper;
	}

	get ctx() {
		return this._ctx;
	}

	get canvas() {
		return this._canvas;
	}
}
