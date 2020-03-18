const mockery = require('mockery');
const chai = require('chai');
const sinon = require('sinon');

const expect = chai.expect;

describe('story.routes', () => {
  beforeEach(function () {
    mockery.enable({
      warnOnReplace: false,
      warnOnUnregistered: false,
      useCleanCache: true
    });
  });

  afterEach(function () {
    mockery.disable();
    mockery.deregisterAll();
  });

  describe('checking the actions', () => {

    it('should allow calls by using DELETE and GET', function () {
      const actionsMock = {
        get: function (path, controller) { },
        delete: function (path, controller) { }
      };
      const getSpy = sinon.spy(actionsMock, 'get');
      const deleteSpy = sinon.spy(actionsMock, 'delete');
      
      let expressMock = {
        Router: function () {
            return actionsMock;
          }
      }
      mockery.registerMock('express', expressMock);

      require("./story.routes");

      expect(getSpy.called).to.be.true;
      expect(getSpy.args[0][0]).to.be.equal("/stories");
      expect(deleteSpy.called).to.be.true;
      expect(deleteSpy.args[0][0]).to.be.equal("/stories/:storyId");
    });
  });
});
