
import { Router } from 'express'
const router = Router()

router.get('/',(req,res)=> res.render('index', {title:'mi primera pagina en Node'}))
router.get('/about',(req,res)=> res.render('about', {title:'Sobre Nosotros'}))
router.get('/contact',(req,res)=> res.render('contact', {title:'Contactanos'}))

export default router
