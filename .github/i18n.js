const fs = require('fs');

// list all files in the directory
fs.readdir("/../website/common/locales", (err, locale) => {
    if (err) {
        throw err;
    }

    locale.forEach(locale => {
      fs.readdir("/../website/common/locales/" + locale, (err, files) => {
        if (err) {
            throw err;
        }
    
        files.forEach(file => {
            console.log(file);
        });
    });
    });
});