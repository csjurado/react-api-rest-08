import { Router } from "express"

const router = Router();

// Routing 
router.get('/',(req, res)=>{
    // res.send('Hola mundo desde express')
    res.json('te amo ferchisss')
})
router.post('/',(req, res)=>{
    // res.send('Hola mundo desde express')
    res.json('Desde POST')
})
router.put('/',(req, res)=>{
    // res.send('Hola mundo desde express')
    res.json('Desde PUT')
})
router.patch('/',(req, res)=>{
    // res.send('Hola mundo desde express')
    res.json('Desde PATCH')
})
router.delete('/',(req, res)=>{
    // res.send('Hola mundo desde express')
    res.json('Desde DELETE')
})

export default router