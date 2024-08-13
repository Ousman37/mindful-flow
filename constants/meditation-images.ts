// Import each image file using require
const treeImage = require("@/assets/meditation-images/trees.webp");
const meditatingUnderTree = require("@/assets/meditation-images/meditate-under-tree.webp");
const riverImage = require("@/assets/meditation-images/river.webp");
const beachImage = require("@/assets/meditation-images/beach.webp");
const yosemiteStars = require("@/assets/meditation-images/yosemite-stars.webp");
const waterfall = require("@/assets/meditation-images/waterfall.webp");

// Exporting an array of images
const MEDITATION_IMAGES = [
  treeImage, // Index 0
  riverImage, // Index 1
  meditatingUnderTree, // Index 2
  beachImage, // Index 3
  yosemiteStars, // Index 4
  waterfall, // Index 5
];

export default MEDITATION_IMAGES;
