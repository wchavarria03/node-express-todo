module.exports = (err, req, res, next) => {
	res.status(500).send({error: err.message});	
};