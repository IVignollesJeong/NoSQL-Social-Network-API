const router = require('express').Router();
// importing functions in thoughtController from /controllers
const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    createReaction,
    deleteThought,
    deleteReaction
} = require('../../controllers/thoughtController');

router.route('/').get(getThoughts).post(createThought);
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);
router.route('/:thoughtId/reactions').post(createReaction);
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;