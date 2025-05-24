const express = require('express');
const router = express.Router();
const extensionController = require('../controllers/extensionController');

router.post('/', extensionController.createExtension);
router.get('/', extensionController.getExtensions);
router.get('/:id', extensionController.getExtension);
router.put('/:id', extensionController.updateExtension);
router.delete('/:id', extensionController.deleteExtension);

module.exports = router;
