const {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
} = require("../controller/usersController");

const userRouter = require("express").Router();

userRouter.route("/").get(getAllUsers).post(createNewUser).patch(updateUser).delete(deleteUser);

module.exports = userRouter;
