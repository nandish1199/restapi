//-----------here we create server and connect it to collection and database

const express = require("express");
const app = express();
require("./db/conn");
const port = process.env.PORT || 8000;
const Student = require("./models/students");
//---------------------ued to convert json to object which is coming fron postmanapi
app.use(express.json());
// ------------------using promise
// app.post("/students", (req,res)=>{
//     console.log(req.body);
//     const user1 = new Student(req.body);
//     user1.save().then(()=>{
//         res.status(201).send(user1);
//     }).catch((e)=>{
//         res.status(400).send(e);
//     })
// });

//----------------using async await
app.post("/students", async (req, res) => {
  console.log(req.body);
  try {
    //------------user1 = document and Student = collection-------------
    const user1 = new Student(req.body);
    const saving_to_database = await user1.save();
    res.status(201).send(user1);
  } catch (error) {
    res.status(400).send(error);
  }
});

// -------------get data in browser
app.get("/students", async (req, res) => {
  console.log(req.body);
  try {
    const getData = await Student.find();
    res.send(getData);
  } catch (error) {
    res.status(400).send(error);
  }
});

// to get individual data from documents
app.get("/students/:id", async (req, res) => {
  console.log(req.body);
  try {
    const id = req.params.id;
    // search queries in mongoose findById like things
    const individualData = await Student.findById({ _id: id });
    res.send(individualData);
  } catch (error) {
    res.status(400).send(error);
  }
});

//to update document
app.patch("/students/:id", async (req, res) => {
  console.log(req.body);
  try {
    const id = req.params.id;
    // search queries in mongoose findByIdAndUpdte like things
    //new:true is used to update data instantly in the postman
    const updateData = await Student.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.send(updateData);
  } catch (error) {
    res.status(400).send(error);
  }
});

//to delete document
app.delete("/students/:id", async (req, res) => {
  console.log(req.body);
  try {
    const id = req.params.id;
    // search queries in mongoose findByIdAndUpdte like things
    const deleteData = await Student.findByIdAndDelete({ _id: id });
    res.send(deleteData);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.listen(port, () => {
  console.log(`listening at port ${port}`);
});
