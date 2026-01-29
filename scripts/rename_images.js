const fs = require('fs');
const path = require('path');

const dirs = [
    'C:/Users/muthu/projects/mango/public/images/mango',
    'C:/Users/muthu/projects/mango/public/images/pomegranate',
    'C:/Users/muthu/projects/mango/public/images/mazaa'
];

dirs.forEach(dir => {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        if (file.startsWith('ezgif-frame-')) {
            const num = parseInt(file.replace('ezgif-frame-', '').replace('.jpg', ''), 10);
            const newName = `${num}.jpg`;
            const oldPath = path.join(dir, file);
            const newPath = path.join(dir, newName);
            try {
                fs.renameSync(oldPath, newPath);
                console.log(`Renamed ${file} to ${newName}`);
            } catch (err) {
                console.error(`Error renaming ${file}: ${err.message}`);
            }
        }
    });
});
