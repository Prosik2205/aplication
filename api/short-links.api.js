const Router = require('express');
const { Links } = require('../models/links');

const router = Router();

router.get('/shortLinks/:cut', async (req, res) => {
  const { cut } = req.params;

  const linksDb = await Links.findOne({ 'links.cut': cut })
    .catch((error) => {
      res.status(400).send(error);
    });

  if (!linksDb) {
    return res.status(400).json({ error: 'Short links was not found' });
  }

  if (new Date() > linksDb.expiredAt) {
    return res.status(400).json({ error: 'Links was expired' });
  }

  res.status(200).redirect(linksDb.links.original);
});

module.exports = router;