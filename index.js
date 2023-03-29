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
   
    // const charactersWithDuplicates = text
    //  .match(/Triss+:(.*)/gm);
    // if (!charactersWithDuplicates) {
    //  throw new Error('Character names was not found');
    // }
    // const characters = charactersWithDuplicates
    //  .map(character => {
    //   return character.slice(0, -1);
    //  });
    // console.log(characters);
    // fs.writeFileSync("./Triss.txt",characters.toString(),{encoding: 'utf-8'});

    {
        let a = text;
        const res = {};
        const b = [...a.matchAll(/^(Max|Geralt|Triss|Yennefer):/gmi)];
        for (let i = 0; i < b.length; i += 1) 
        {
            const match = b[i];
            //console.log('match:', match);
            const [_1, characterName] = match;
            const { index } = match;

            if (res[characterName]) 
            {
                
                res[characterName].push({
                    start: index,
                    end: b[i + 1] ? b[i + 1].index : -1,
                });
                


            } 
            else 
            {
                res[characterName] = [{
                    start: index,
                    end: b[i + 1] ? b[i + 1].index : -1
                }];
            }


           
        }
        console.log(res);
      
        const characters = {
            Max: "Max",
            Geralt:"Geralt",
            Yennefer:"Yennefer",
            Triss:"Triss"
        };
     const {Max,Geralt,Yennefer,Triss} = characters;
      
     for( let i = 0; i < 4; i+=1)
     {
       let ab={};
       for(let j = 0; j <5; j +=1)
       {
            ab = text.slice(res.Triss[i].start,res.Triss[i].end);      
       }
       console.log(ab);   
       fs.appendFileSync("./test1.txt",JSON.stringify(ab),{encoding:'utf-8'});
     }    

    }
   };
   
   func();
   
  // fs.appendFileSync("./test1.txt",JSON.stringify(match),{encoding:'utf-8'});     
  //slice - вирізати          
