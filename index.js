const fs = require('fs');

const func = async () => {
    const text = await new Promise((res, rej) => {
     fs.readFile('./scenario.txt', (err, data) => {
      if (err) {
       return rej(err);
      }
   
      return res(data.toString());
     });
    });
   
    const charactersWithDuplicates = text
     .match(/Triss+:(.*)/gm);
    if (!charactersWithDuplicates) {
     throw new Error('Character names was not found');
    }
    const characters = charactersWithDuplicates
     .map(character => {
      return character.slice(0, -1);
     });
    console.log(characters);
    fs.writeFileSync("./Triss.txt",characters.toString(),{encoding: 'utf-8'});


    





   };
   
   func();