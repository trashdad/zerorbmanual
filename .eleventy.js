
//from codingthesmartway.com: y using the addPassthroughCopy method of the Eleventy configuration object we’re able to specifiy that project folders should just be copied to the output folder (_site) without further processing.
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("admin");
};
