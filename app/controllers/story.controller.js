const Story = require('../models/story.model.js');
const RetreiveNews = require('../services/retreive-news.service.js');

exports.all = async (req, res) => {
  await RetreiveNews();
  Story.find().sort( { date: -1 } )
    .then(stories => {
        res.json(stories);
    }).catch(err => {
        res.status(500).json({
            message: err.message || "Some error occurred while retrieving stories."
        });
    });
};

exports.delete = (req, res) => {
  Story.findByIdAndRemove(req.params.storyId)
  .then(story => {
      if(!story) {
          return res.status(404).json({
              message: "story not found with id " + req.params.storyId
          });
      }
      res.json({message: "story deleted successfully!", story});
  }).catch(err => {
      if(err.kind === 'ObjectId' || err.name === 'NotFound') {
          return res.status(404).json({
              message: "story not found with id " + req.params.storyId
          });                
      }
      return res.status(500).json({
          message: "Could not delete story with id " + req.params.storyId
      });
  });
};
