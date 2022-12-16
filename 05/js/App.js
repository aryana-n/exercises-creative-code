class App {
  constructor() {
    this.pixelRatio = window.devicePixelRatio || 1;
    this.canvas = document.createElement("canvas");
    this.canvas.width = window.innerWidth * this.pixelRatio;
    this.canvas.height = window.innerHeight * this.pixelRatio;
    this.canvas.style.width = window.innerWidth;
    this.canvas.style.height = window.innerHeight;
    document.body.appendChild(this.canvas);
    this.ctx = this.canvas.getContext("2d");
    this.img_file = "./asset/andy.jpg";
    this.setup();
  }

  initWebcam() {
    this.video = document.createElement("video");

    navigator.getMedia =
      navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia ||
      navigator.msGetUserMedia;

    navigator.getMedia(
      {
        video: { width: 640, height: 480 },
        audio: false,
      },
      (stream) => {
        this.video.srcObject = stream;
        this.video.play();
      },
      (err) => {
        console.log("An error occured! " + err);
      }
    );
  }

  setup() {
    this.initWebcam();
    this.grid = [];
    this.scale = 4;
    this.stepX = Math.floor(640 / 70);
    this.stepY = Math.floor(480 / 70);

    this.offsetX =
      (window.innerWidth / 2) * this.pixelRatio -
      (this.stepX * 70 * this.scale) / 2
    ;
    this.offsetY =
      (window.innerHeight / 2) * this.pixelRatio -
      (this.stepY * 70 * this.scale) / 2
    ;

    for (let j = 0; j < 480; j += this.stepY) {
      for (let i = 0; i < 640; i += this.stepX) {
        this.grid.push(
          new Circle(
            this.offsetX + i * this.scale,
            this.offsetY + j * this.scale,
            15,
            this.ctx
          )
        );
      }
    }

    document.addEventListener("mousemove", (event) => {
			this.mouse = {
				x: event.clientX * this.pixelRatio,
				y: event.clientY * this.pixelRatio,
			};

			for (let i = 0; i < this.grid.length; i++) {
				this.grid[i].move(this.mouse);
			}
		});
    
    this.draw();
  }

  detectPixels() {
    if (this.video) {
      this.ctx.drawImage(this.video, 0, 0, 640, 480);
    }

    this.imgData = this.ctx.getImageData(0, 0, 640, 480);

    this.pixels = this.imgData.data;

    this.rgb = [];
    for (let j = 0; j < 480; j += this.stepY) {
      for (let i = 0; i < 640; i += this.stepX) {
        let index = (j * 640 + i) * 4;
        this.rgb.push({
          r: this.pixels[index],
          g: this.pixels[index + 1],
          b: this.pixels[index + 2],
          a: this.pixels[index + 3],
        });
      }
    }

  }

  draw() {
    this.detectPixels();
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.grid.forEach((circle, index) => {
      const color = this.rgb[index];
      circle.color = `rgba(${color.r}, ${color.g}, ${color.b})`;
      circle.draw();
    });

    requestAnimationFrame(this.draw.bind(this));
  }

}

window.onload = function () {
  new App();
};
