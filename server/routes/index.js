import express from "express"
import {createTask,updateTask,deleteTask,readTasks}  from "../controllers/task.controller.js"
const router=express.Router()

router.route('/create').post(createTask);
router.route('/update/:id').post(updateTask);
router.route('/delete').post(deleteTask);
router.route('/view').get(readTasks);

export default router;