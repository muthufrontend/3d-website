const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'out');
const noJekyllPath = path.join(outDir, '.nojekyll');

if (fs.existsSync(outDir)) {
    fs.writeFileSync(noJekyllPath, '');
    console.log('.nojekyll file created in ' + outDir);
} else {
    console.warn('Output directory does not exist. Make sure to run this script after "next build" (output: export).');
}
