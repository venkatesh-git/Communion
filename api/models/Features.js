/**
 * User
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  attributes: {
  	description: {
	  type: 'string',
	  required:true
	  },
	status: {
	  type: 'int'
	  },
	
	toJSON: function(){
		var obj = this.toObject();
		delete obj._csrf;
		return obj;
	}
	
  	
  }

};
