// Start our router
// Import express
const express = require('express')
// only the router none of the other app stuff
const router = express.Router()
const dataController = require('./dataController')
const viewController = require('./viewController')
// Need the model because the job of the model is to give us access to the DB
const Fruit = require('../models/fruit')

// Routes

// INDEX
router.get('/', dataController.index, viewController.index)
// NEW
router.get('/new', viewController.newView)
// DELETE
router.delete('/:id', dataController.destroy, viewController.redirectHome)
// UPDATE
router.put('/:id', dataController.update, viewController.redirectShow)
// CREATE
router.post('/', dataController.create, viewController.redirectShow)
// EDIT
router.get('/:id/edit', dataController.show, viewController.edit)
// SHOW
router.get('/:id', dataController.show, viewController.show)

module.exports = router