import express from 'express';
const app = express()
app.use(express.json());
let users = [
    {id:1, name:'A', email:'A@example.com'},
    {id:2, name:'B', email:'B@example.com'}
];
//GET:fetch all user data
app.get('/users', (req, res) => {
    res.json(users);
});
//POST: create a new user
app.post('/users', (req, res) =>{
    let user={
        id:users.length+1,
        name:req.body.name,
        email:req.body.email
    };
    user.push(user);
    res.jason(user);
});
app.put('/users/:id', (req, res) =>{
    let user=users.find(u=>u.id==req.params.id);
    user.name
});
app.listen(8000, () =>{
    console.log('server is running on https://localhost:3001');
});