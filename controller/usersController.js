const User = require("../models/User");
const Note = require("../models/Notes");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");

//! @route     GET api/users
//! @desc      Get all users
//! @access    Public
const getAllUsers = asyncHandler(async (req, res) => {});

//! @route     POST api/users
//! @desc      create a new user
//! @access    Public
const createNewUser = asyncHandler(async (req, res) => {});

//! @route     PATCH api/users
//! @desc      update a user
//! @access    Public
const updateUser = asyncHandler(async (req, res) => {});

//! @route     DELETE api/users
//! @desc      delete a user
//! @access    Public
const deleteUser = asyncHandler(async (req, res) => {});

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
};
