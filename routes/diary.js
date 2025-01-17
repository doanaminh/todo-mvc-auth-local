const express = require('express')
const router = express.Router()
const diaryController = require('../controllers/diary') 
const { ensureAuth } = require('../middleware/auth')

router.get("/:id", ensureAuth, diaryController.getUserDiary);

router.get('/', ensureAuth, diaryController.getDiary)

router.post('/createDiary', diaryController.createDiary)

router.put('/changePrivacy', diaryController.changePrivacy)

router.delete('/deleteDiary', diaryController.deleteDiary)

module.exports = router