const Router = require('express');
const { Link } = require('../models/links');

const router = Router();

router.get('/shortLink/:cut', async (req, res) => {
  const { cut } = req.params;

  const linkDb = await Link.findOne({ 'links.cut': cut })
    .catch((error) => {
      res.status(400).send(error);
    });

  if (!linkDb) {
    return res.status(400).json({ error: 'Short links was not found' });
  }

  if (new Date() > linkDb.expiredAt) {
    return res.status(400).json({ error: 'Links was expired' });
  }

  res.status(200).redirect(linkDb.links.original);
});

module.exports = router;