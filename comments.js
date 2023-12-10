// Create web server

// Import modules
const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/commentsController');
const { check } = require('express-validator');

// Create comment
// api/comments
router.post('/',
    [
        check('comment', 'Comment is required').not().isEmpty(),
        check('comment', 'Comment must be at least 5 characters').isLength({ min: 5 })
    ],
    commentsController.createComment
);

// Get comments by publication
// api/comments
router.get('/',
    commentsController.getComments
);

// Update comment
// api/comments/:id
router.put('/:id',
    commentsController.updateComment
);

// Delete comment
// api/comments/:id
router.delete('/:id',
    commentsController.deleteComment
);

module.exports = router;
