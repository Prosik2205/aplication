const Router = require('express');
const { Link } = require('../models/links');
const { Users } = require('../models/users');

const router = Router();

router.use('/links', async (req, res, next) => {
  const apiKey = req.header('x-api-key');

  const user = await Users.findOne({ apiKey: apiKey });

  if (!user) {
    res.status(401).send({ message: 'User is not authorized' });
  }

  next();
});

router.post('/links', async (req, res) => {
  const { original } = req.body;

  
  let i;
  while(i!=2)
  {
  const characters = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuioplkjhgfdsazxcvbnm';
  let cutLinks = '';
  for (let i = 0; i < 15; i++) 
  {
    cutLinks += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  const exists = await Link.findOne({ 'link.cut': cutLinks })
  if (exists) 
  {
    i=1;
  }
  else
  {
    i=2;
  }
}

//                 -------------------1----------------------------
// let exists;
// do
//   {
//   const characters = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuioplkjhgfdsazxcvbnm';
//   let cutLinks = '';
//   for (let i = 0; i < 15; i++) 
//   {
//     cutLinks += characters.charAt(Math.floor(Math.random() * characters.length));
//   }
//    exists = await Link.findOne({ 'link.cut': cutLinks })
// }
// while(!exists);





//                 -------------------2----------------------------
// let p;
// do
// {
// const characters = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuioplkjhgfdsazxcvbnm';
// let cutLinks = '';
// for (let i = 0; i < 15; i++) 
// {
//   cutLinks += characters.charAt(Math.floor(Math.random() * characters.length));
// }
// const exists = await Link.findOne({ 'link.cut': cutLinks })
//  p=(exists) ? true : false;
// }
// while(p==false);












  const currentDate = new Date();
  const expiredAtDate = currentDate.setDate(currentDate.getDate() + 5);

  const links = new Link({
    'links.original': original,
    'links.cut': cutLinks,
    expiredAt: expiredAtDate
  });

  const { links: { cut }, expiredAt } = await links.save()
    .catch((error) => {
      if (error.code == 11000) {
        res.status(400).json({ message: 'This links is already in use' });
      };
    });

  res.status(200).send({
    links: cut,
    expiredAt: expiredAt
  });
});

module.exports = router;
