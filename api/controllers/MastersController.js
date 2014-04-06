/**
 * UserController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {

  'features':function(req,res){
	res.view();
 },
 
 //Communtion Types
 
 communionType: function(req,res){
	CommunionType.find(function foundCTs(err,CTs){
		if(err) return next(err);
		
		res.view({CTs:CTs});
	});
	
 
 },
 
 communionTypes: function(req,res){
	CommunionType.find(function foundCTs(err,CTs){
		if(err) return next(err);
		
		res.json(CTs);
	});
	
 
 },
 
 addCT: function(req,res){
        res.locals.flash = _.clone(req.session.flash);
		res.view();
		req.session.flash={};
	},
 
 createCT: function(req,res){
	CommunionType.create(req.params.all(),function ctCreated(err,communionTypes){
		//if(err)return next(err);
		
		if(err)
		{
			console.log(err);
			req.session.flash = {
				err:err
			}
			
			return res.redirect('/masters/addCT');
		}
		
		
		
		req.session.flash={};
		return res.redirect('/masters/communionType');
	
	});
 },
 
 editCT: function(req,res,next){
	CommunionType.findOne(req.params['id'],function foundCommunionType(err,CT){
	
		if(err)
		{
			console.log(err);
			req.session.flash = {
				err:err
			}
			
			return res.redirect('masters/editCT/'+req.params['id']);
		}
		 if (!CT) return next('Communion Type doesn\'t exist.');
		
		res.locals.flash = _.clone(req.session.flash);
		res.view({CT:CT});
		req.session.flash={};
	
	});
 },
 
 updateCT: function(req,res,next){
	CommunionType.update(req.params['id'],req.params.all(),function ctUpdated(err,communionType){
		//if(err)return next(err);
		
		if(err)
		{
			console.log(err);
			req.session.flash = {
				err:err
			}
			
			return res.redirect('/masters/editCT/'+ req.params['id']);
		}
		
		
		
		req.session.flash={};
		return res.redirect('/masters/communionType');
		 
	});
 },
 
  destroyCT: function(req, res, next) {

     CommunionType.findOne(req.param('id'), function foundUser(err, CT) {
      if (err) return next(err);

      if (!CT) return next('Communion Type doesn\'t exist.');

      CommunionType.destroy(req.param('id'), function ctDestroyed(err) {
        if (err) return next(err);

        CommunionType.publishDestroy(CT.id);

      });

      return res.redirect('masters/CommunionType');

    });
  },
  
  //Communtion Attributes
  'communionAttributes':function(req,res){
	CommunionAttributes.find(function foundCAs(err,CAs){
		if(err) return next(err);
		
		res.view({CAs:CAs});
	});
 },
 
 addCA: function(req,res){
        res.locals.flash = _.clone(req.session.flash);
		res.view();
		req.session.flash={};
	},
 
 createCA: function(req,res){
	CommunionAttributes.create(req.params.all(),function caCreated(err,communionAttributes){
		//if(err)return next(err);
		
		if(err)
		{
			console.log(err);
			req.session.flash = {
				err:err
			}
			
			return res.redirect('/masters/addCA');
		}
		
		
		
		req.session.flash={};
		return res.redirect('/masters/communionAttributes');
	
	});
 },
 
 editCA: function(req,res,next){
	CommunionAttributes.findOne(req.params['id'],function foundCommunionAttributes(err,CA){
	
		if(err)
		{
			console.log(err);
			req.session.flash = {
				err:err
			}
			
			return res.redirect('masters/editCA/'+req.params['id']);
		}
		 if (!CA) return next('Communion Attributes doesn\'t exist.');
		
		res.locals.flash = _.clone(req.session.flash);
		res.view({CA:CA});
		req.session.flash={};
	
	});
 },
 
 updateCA: function(req,res,next){
	CommunionAttributes.update(req.params['id'],req.params.all(),function ctUpdated(err,communionAttributes){
		//if(err)return next(err);
		
		if(err)
		{
			console.log(err);
			req.session.flash = {
				err:err
			}
			
			return res.redirect('/masters/editCA/'+ req.params['id']);
		}
		
		
		
		req.session.flash={};
		return res.redirect('/masters/communionAttributes');
		 
	});
 },
 
  destroyCA: function(req, res, next) {

     CommunionAttributes.findOne(req.param('id'), function foundUser(err, CA) {
      if (err) return next(err);

      if (!CA) return next('Communion Attributes doesn\'t exist.');

      CommunionAttributes.destroy(req.param('id'), function ctDestroyed(err) {
        if (err) return next(err);

        CommunionAttributes.publishDestroy(CA.id);

      });

      return res.redirect('masters/CommunionAttributes');

    });
  },
  
 
  
 
};
