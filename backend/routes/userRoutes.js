import express from "express";
const router = express.Router();
import { authUser, updateUserProfile, getUserProfile, logoutUser, registerUser } from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";
router.post('/auth', authUser);
router.post('/', registerUser);
router.post('/logout', logoutUser);
//solution 1:
/*
router.get('/profile', getUserProfile);
router.put('/profile', updateUserProfile);
*/
//solution 2:
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);

export default router;