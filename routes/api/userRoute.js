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
router.route('/:userId').get(getSingleUser).put(updateUser);
router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;