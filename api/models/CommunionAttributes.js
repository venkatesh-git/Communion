/**
 * User
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  attributes: {
    communionType: {
	  type: 'integer',
	  required:true
	  },
  	description: {
	  type: 'string',
	  required:true
	  },
	dataType:{
	  type: 'string',
	  required:true
	},
	isInternal:{
      type: 'boolean',
      required:true,
	  defaultsTo: true
	  },
	validationType:{
	  type: 'string',
	  required:true,
	  defaultsTo: 'none'
	  },
	control:{
	  type: 'string',
	  required:true,
	  defaultsTo: 'text'
	  },
	dataSource:{
	  type: 'string',
	  required:false,
	  },
	valueMember:{
	  type: 'string',
	  required:false,
	  },
    textMember:{
	  type: 'string',
	  required:false,
	  },	  
	status: {
	  type: 'int',
	  required:true,
	  defaultsTo: '1'
	  },
	
	toJSON: function(){
		var obj = this.toObject();
		delete obj._csrf;
		return obj;
	}
	
  	
  }

};
