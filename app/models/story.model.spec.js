const mongoose = require('mongoose');
const chai = require('chai');
const Story = require('./story.model');
const expect = chai.expect;

describe('story.model', () => {
  before(function (done) {
    mongoose.connect('mongodb://localhost/testDatabase');
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error'));
    db.once('open', function() {
      console.log('We are connected to test database!');
      done();
    });
  });

  after(function(done){
    mongoose.connection.db.dropDatabase(function(){
      mongoose.connection.close(done);
    });
  });
  
  describe('Creating stories', () => {
    it('creates a story', (done) => {
      const story = new Story({
        title: 'this is a test',
        author: 'me',
        date: '01-01-2020',
        url: 'www.test.cl'
      });
      story.save() 
      .then(() => {
        expect(!story.isNew);
        done();
      });
    });
    it('Dont save incorrect story to database', function(done) {
      const story = new Story({
        date: '01-01-2020',
        url: 'www.test.cl'
      });
      story.save(err => {
        if(err) { return done(); }
        throw new Error('Should generate error!');
      });
    });
  });
})
