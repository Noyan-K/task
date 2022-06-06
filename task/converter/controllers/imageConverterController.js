const sharp = require("sharp");
const fs = require("fs");

class imageConverterController {
	async webp(req, res) {
		try {
			const { image } = req.files;

			if (image.name.substr(-3) !== 'png') {
				return res.status(400).json('The file should be in png format');
			}

			const inputFilePath = `./static/${Date.now()}-input.png`;
			const outputFilePath = `./static/${Date.now()}-output.webp`;

			await image.mv(inputFilePath);
			await sharp(inputFilePath)
				.webp()
				.toFile(outputFilePath, () => {
					res.status(200).download(outputFilePath, () => {
						fs.unlinkSync(inputFilePath);
						fs.unlinkSync(outputFilePath);
					});
				});

		} catch (e) {
			console.log(e);
		}
	}
}

module.exports = new imageConverterController();
