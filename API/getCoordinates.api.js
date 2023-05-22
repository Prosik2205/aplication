const Router = require('express');
const { Coordinates } = require('../models/coordinates');


const router = Router();

router.get("/getCoordinates", async (req, res) => {
    const {
        nameCity,
        coordinates_x,
        coordinates_y    
    } = req.query;

const queryDb= {};
if (nameCity)
{
    queryDb.nameCity= nameCity;
}
if(coordinates_x)
{
    queryDb["coordinates.x"]=coordinates_x;
}
if(coordinates_y)
{
    queryDb["coordinates.y"]=coordinates_y;
}


/////////////////////////////////////////////////////////////////////////////
// Формула щоб обрахувати відстань, але треба подумати як передавати в неї =>
// => coordinates_x, coordinates_y
/////////////////////////////////////////////////////////////////////////////
class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    disance(p1, p2) {
      return Math.sqrt(((p2.x - p1.x) ** 2) + ((p2.y - p1.y) ** 2));
    }
  }

// /////////////////////////////////////////////////////////////////
  const point = new Point();
  console.log(point.disance(new Point(5, 7), new Point(11, 24)));

//////////////////////////////////////////////////////

let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));
//////////////////////////////////////////////////////

const doc = await Coordinates.find(queryDb);
    return res.status(200).send(doc);



});
module.exports = { router };