const fs = require("fs-extra");
const path = require("path");
const sharp = require("sharp");

// Allowed image extensions
const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".webp", ".png", ".gif", ".avif"];

async function convertImageToWebp(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const baseName = path.basename(filePath, ext);
  const dir = path.dirname(filePath);

  const outputPath = path.join(dir, `${baseName}.webp`);

  try {
    await sharp(filePath)
      .webp({ quality: 80 })
      .toFile(outputPath);

    console.log(`✔ Converted: ${filePath} → ${outputPath}`);
  } catch (err) {
    console.error(`✖ Error converting ${filePath}:`, err);
  }
}

async function walkDirectory(dir) {
  const files = await fs.readdir(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stats = await fs.stat(fullPath);

    if (stats.isDirectory()) {
      // Recurse into folders
      await walkDirectory(fullPath);
    } else {
      const ext = path.extname(fullPath).toLowerCase();
      if (IMAGE_EXTENSIONS.includes(ext)) {
        await convertImageToWebp(fullPath);
      }
    }
  }
}

(async () => {
  console.log("🔍 Scanning directories and converting images to WebP...");
  await walkDirectory("./thumbnails");
  console.log("✅ Conversion complete!");
})();
