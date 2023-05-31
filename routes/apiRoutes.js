const express = require('express');
const router = express.Router();

const interactionController = require('../controllers/interactionController');
const orderController = require('../controllers/orderController');
const productController = require('../controllers/productController');
const sessionController = require('../controllers/sessionController');
const voteController = require('../controllers/voteController');
const messageController = require('../controllers/messageController');
const pollController = require('../controllers/pollController');
const quizController = require('../controllers/quizController');
const userController = require('../controllers/userController');

// Interaction routes
router.post('/interactions', interactionController.createInteraction);
router.get('/interactions/:interactionId', interactionController.getInteraction);
// Add other routes for interactions

// Order routes
router.post('/orders', orderController.createOrder);
router.get('/orders/:orderId', orderController.getOrder);
router.put('/orders/:orderId', orderController.updateOrder);
router.delete('/orders/:orderId', orderController.deleteOrder);
// Add other routes for orders

// Product routes
router.post('/products', productController.createProduct);
router.get('/products/:productId', productController.getProduct);
router.put('/products/:productId', productController.updateProduct);
router.delete('/products/:productId', productController.deleteProduct);
// Add other routes for products

// Session routes
router.post('/sessions', sessionController.createSession);
router.get('/sessions/:sessionId', sessionController.getSession);
router.put('/sessions/:sessionId', sessionController.updateSession);
router.delete('/sessions/:sessionId', sessionController.deleteSession);
// Add other routes for sessions

// Vote routes
router.post('/votes', voteController.createVote);
router.get('/votes/:voteId', voteController.getVote);
router.put('/votes/:voteId', voteController.updateVote);
router.delete('/votes/:voteId', voteController.deleteVote);
// Add other routes for votes

// Message routes
router.post('/messages', messageController.createMessage);
router.get('/messages/:messageId', messageController.getMessage);
router.put('/messages/:messageId', messageController.updateMessage);
router.delete('/messages/:messageId', messageController.deleteMessage);
// Add other routes for messages

// Poll routes
router.post('/polls', pollController.createPoll);
router.get('/polls/:pollId', pollController.getPoll);
router.put('/polls/:pollId', pollController.updatePoll);
router.delete('/polls/:pollId', pollController.deletePoll);
// Add other routes for polls

// Quiz routes
router.post('/quizzes', quizController.createQuiz);
router.get('/quizzes/:quizId', quizController.getQuiz);
router.put('/quizzes/:quizId', quizController.updateQuiz);
router.delete('/quizzes/:quizId', quizController.deleteQuiz);
// Add other routes for quizzes

// User routes
router.post('/users', userController.createUser);
router.get('/users/:userId', userController.getUser);
router.put('/users/:userId', userController.updateUser);
router.delete('/users/:userId', userController.deleteUser);
// Add other routes for users

module.exports = router;
