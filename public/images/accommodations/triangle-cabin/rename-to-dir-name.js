const fs = require("fs");
const path = require("path");

// Current folder name
const folderName = path.basename(__dirname);

// Supported image extensions
const imageExtensions = [
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".gif",
  ".bmp",
  ".tiff",
  ".avif",
];

const files = fs
  .readdirSync(__dirname)
  .filter(file => {
    const ext = path.extname(file).toLowerCase();
    return (
      imageExtensions.includes(ext) &&
      fs.statSync(path.join(__dirname, file)).isFile()
    );
  })
  .sort();

files.forEach((file, index) => {
  const ext = path.extname(file);
  const newName = `${folderName}-${index + 1}${ext}`;

  fs.renameSync(
    path.join(__dirname, file),
    path.join(__dirname, newName)
  );

  console.log(`${file} -> ${newName}`);
});

console.log("✅ Done!");