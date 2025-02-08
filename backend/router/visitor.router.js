import express from 'express'
import { authenticateToken } from '../utilities.js';
import { visitorInformation } from '../controller/visitor.controller.js';
export const visitorRouter=express.Router();
visitorRouter.post('/new-visitor',authenticateToken,visitorInformation);

