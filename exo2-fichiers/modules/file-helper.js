const {readFile} = require('fs');

module.exports  = {

 getDataFromJson : (filename) => {
        return new Promise((resolve, reject) => {

            readFile(filename, (error, data) => {

                if(error) {
                    reject(error);
                    return;
                }

                try {
                    const json = JSON.parse(data);
                    resolve(json);

                } catch (error) {
                    reject(error);
                }
            });
        })
    }
}