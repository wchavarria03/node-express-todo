module.exports = (err, req, res, next) => {
	if (err.message === '') {

	} else if (err.message === '') {

	} else {
		res.status(500).send({error: err.message});	
	}
};