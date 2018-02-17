function figureArea(w, h, W, H) {
	let firstFigArea = w * h;
	let seconFigArea = W * H;
	return (firstFigArea + seconFigArea - Math.min(w, W) * Math.min(h, H));
}