module.exports (err, req, res, next) => {
	response.status(500).send('error', {error: err});	
};