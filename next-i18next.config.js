const path = require("path");
module.exports = {
	i18n: {
		//locales: ["fr", "en", "de", "es", "ar", "he", "zh"],
		locales: ["fr", "en", "es", "ar", "he", "zh"],
		defaultLocale: "fr",
		localeDetection: false,
	},
	localePath: path.resolve("./public/locales"),
};
