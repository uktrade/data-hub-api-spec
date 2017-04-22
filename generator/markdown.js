const Markdown = require('markdown-to-html').Markdown;
const md = new Markdown();
const fs = require('fs')

md.bufmax = 2048;

const fileName = '../README.md';
const outFile = '../gendocs/public/index.html'
const opts = {title: 'Data Hub API spec', stylesheet: 'style.css'};

const outStream = fs.createWriteStream(outFile)

md.render(fileName, opts, function(err) {
  if (err) {
    console.error('>>>' + err);
    process.exit();
  }
  md.pipe(outStream)
});