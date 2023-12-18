import express from 'express'
import Doctor from './doctor.js'
import SingleDoc from './singleDoctor.js'
import SignUp from './signUp.js'
import SignIn from './SignIn.js'
import Search from './searchByID.js'
import Appointment from './appointment.js'
import serApp from './searchApp.js'
import changePass from './update.js'

const router = express.Router()

router.use('/doctor', Doctor)
router.use('/singleDoc', SingleDoc)
router.use('/SignUp', SignUp)
router.use('/SignIn', SignIn)
router.use('/Search', Search)
router.use('/Appointment', Appointment)
router.use('/serApp', serApp)
router.use('/changePass', changePass)

export default router