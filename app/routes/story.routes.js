const Router = require('express').Router;
const stories = require('../controllers/story.controller.js');

const router = Router();

router.get('/stories', stories.all);
router.delete('/stories/:storyId', stories.delete);

module.exports = router;