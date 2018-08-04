const express = require('express');
const router  = express.Router();
const authRoutes = require('./authentication.controller');
const employeesRoutes  = require('./employees.controller');
const projectRoutes = require('./projects.controller');
const taskRoutes = require('./tasks.controller');
const experiencesRoutes = require('./employee_experience.controller.js');
const skillsRoutes = require('./skills.controller');
const employeeskillsRoutes = require('./employeeskills.controller');
const employeepositionRoutes = require('./employee.position.controller');

router.use('/', authRoutes);
router.use('/employees', employeesRoutes);
router.use('/projects', projectRoutes);
router.use('/tasks', taskRoutes);
router.use('/experiences', experiencesRoutes);
router.use('/skills', skillsRoutes);
router.use('/employeeskills', employeeskillsRoutes);
router.use('/position', employeepositionRoutes);

module.exports = router;
