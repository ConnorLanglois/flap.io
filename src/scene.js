class Scene {
	construtor () {
		this._pipes = [];

		this.addPipe();
	}

	addPipe(x, y, width, height) {
		this._pipes.push(new Pipe(x, y, width, height));
	}

	removePipe(pipe) {
		this._pipes.splice(this._pipes.indexOf(pipe), 1);
	}

	onUpdate() {
		this._pipes.forEach(function (pipe) {
			pipe.onUpdate();

			if (pipe.x <= width / 2) {
				this.addPipe();
			}
		});
	}

	onRender() {
		this._pipes.forEach(function (pipe) {
			pipe.onRender();
		});
	}
}
