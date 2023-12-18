import express from 'express';
import PolicyController from '../controllers/policyController.js';
import multer from 'multer'
const upload = multer({ dest: "path" })


const router = express.Router();

// Define policy routes
router.post('/upload', upload.single('file'), PolicyController.uploadCSV);

export default router;
