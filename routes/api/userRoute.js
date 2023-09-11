const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    addFriend,
    deleteFriend
} = require('../../controllers/userController');

router.route('/').get(getUsers).post(createUser);
router.route('/:userID').get(getSingleUser).put(updateUser);
router.route('/:userID/friends/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;