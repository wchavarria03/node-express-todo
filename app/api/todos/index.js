var router = require('express').Router();
var controller = require('./todoController');

router.param('id', controller.params);

router.route('/')
    .get(controller.get)
    .post(controller.post);


router.route('/:id')
    .get(controller.getOne)
    .delete(controller.delete);

module.exports = router;