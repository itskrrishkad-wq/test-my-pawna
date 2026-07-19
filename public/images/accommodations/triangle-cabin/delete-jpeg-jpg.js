const fs = require("fs");
const path = require("path");

// Change this to your target folder
const folderPath = "./";

fs.readdir(folderPath, (err, files) => {
    if (err) {
        console.error("Error reading folder:", err);
        return;
    }

    files.forEach(file => {
        const ext = path.extname(file).toLowerCase();

        if (ext === ".jpg" || ext === ".jpeg") {
            const filePath = path.join(folderPath, file);

            fs.unlink(filePath, err => {
                if (err) {
                    console.error(`Failed to delete ${file}:`, err);
                } else {
                    console.log(`Deleted: ${file}`);
                }
            });
        }
    });
});