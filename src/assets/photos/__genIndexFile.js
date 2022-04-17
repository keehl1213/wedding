const fs = require('fs');
const path = require('path');

const nowPath = path.resolve('./');
const regexp = /.(jpg|jpeg|JPG|JPEG)$/;
const filename_reg = /(.*).(jpg|jpeg|JPG|JPEG)$/;

const svgFiles = fs
    .readdirSync(nowPath)
    .filter((fileName) => regexp.test(fileName))
    .map((fileName) => ({
        name: fileName
            .match(filename_reg)[1]
            .replace(/_(\w)/g, (searchStr, replaceStr) =>
                replaceStr.toUpperCase()
            )
            .replace(/-(\w)/g, (searchStr, replaceStr) => replaceStr)
            .replace(/@(\w)/g, (searchStr, replaceStr) => replaceStr),
        path: fileName,
    }));

function write(err) {
    if (err) console.log(err);
    else console.log('Write operation complete.');
}

const import_statement = svgFiles
    .map((fileName) => `import ${fileName.name} from './${fileName.path}';`)
    .join('\n');
const export_statement = svgFiles
    .map((fileName) => `    ${fileName.name}`)
    .join(',\n');

fs.writeFile(
    'index.js',
    `${import_statement}\n\nexport {\n${export_statement},\n};\n`,
    write
);
