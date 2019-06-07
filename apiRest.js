const express=require('express')
const server=express()
const bodyParser = require('body-parser')



let listUsers=[]
let id=0;

server.use(bodyParser.urlencoded({ extended : false }))
server.post('/api/users',function(req,res){
    console.log(req.body);
 
   const  { nom,prenom,date,ville,ellement,email,password } = req.body    
    const obj ={  id,nom,prenom,date,ville,ellement,email,password } 
    listUsers.push(obj)
    id=id+1
   res.status(200).send("utilisateur cree")
   
})

server.get('/api/users',function(req,res){
   res.status(200).send(listUsers)
})

server.get('/api/users/:id',function(req,res){
    let id = req.params.id
    res.status(200).send(listUsers[id])
 })

server.put('/api/users/:id',function(req,res){
    let id = req.params.id
    const  { nom,prenom,date,ville,element,email,password } = req.body    
    const obj ={  id,nom,prenom,date,ville,element,email,password } 
    console.log(listUsers[id].nom);
    console.log(obj.nom);
    
    if(obj.nom !== null )   listUsers[id].nom=nom;
    if(obj.prenom !== null )   listUsers[id].prenom=prenom;
    if(obj.date !== null )   listUsers[id].date=date;
    if(obj.ville !== null )   listUsers[id].ville=ville;
    if(obj.element !== null )   listUsers[id].element=element;
    if(obj.email !== null )   listUsers[id].email=email;
    
    res.status(200).send("user "+ id +" was updated");
})

server.delete('/api/users/:id',function(req,res){
    let id = req.params.id
   //let i;
    /*for ( i=0;i<listUsers.length;i++){
        if(listUsers[i].id === id){
             listUsers.splice(id,1);
        }else{
        res.status(200).send("user"+ id +"doesn't exist") ; }  
    }*/
    listUsers.splice(id,1);
    res.status(200).send("user"+ id +"was deleted")

})

server.listen(3003,function(req,res){
    console.log('3003');
    
})
