const fs = require('fs');

// list all files in the directory
fs.readdir(__dirname + "/website/common/locales", (err, files) => {
    if (err) {
        throw err;
    }

    locale.forEach(locale => {
        console.log(locale);
    });
});