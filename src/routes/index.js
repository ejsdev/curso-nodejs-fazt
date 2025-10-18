// Rutas
import { Router } from "express";
const router = Router();
//
import bodyParser from "body-parser";
router.use(bodyParser.json());



//req.send("") | req.render()
router.get('/', (res,req)=> req.render('index', {title:"Home"}));
router.get('/about', (res,req)=> req.render('about', {title:"Sobre nosotros"}));
router.get('/contact', (res,req)=> req.render('contact', {title:"Contacto"}));
router.get('/blog', (res,req)=> req.render('post-blog', {title:"Blog-Post"}));
router.get('/dom', (res,req)=> req.render('dom', {title:"dom"}));

router.use(bodyParser.urlencoded({extended:false}));



 router.post('/api/contact',(req,res)=>{
    const datos = JSON.stringify(req.body)
    const email = req.body.email
    console.log(datos)
    console.log(email)
    res.redirect("/dom" )

    
})

    




export default router;