// DELETE THIS LINE
//const selectAll = () => {};

// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// const db = require("../database-mysql");
const Person=require('../database-mongo/person')


// UNCOMMENT IF USING MYSQL WITH CALLBACKS
// const selectAll = function (req, res) {
//   db.query("SELECT * FROM persons", (err, persons, fields) => {
//     if (err) {
//       res.status(500).send(err);
//     } else {
//       res.status(200).send(persons);
//     }
//   });
// };

//UNCOMMENT IF USING MONGOOSE WITH PROMISES
// const selectAll = function (req, res) {
//   person.find({})
//     .then((persons) => {
//       res.status(200).send(persons);
//     })
//     .catch((error) => {
//       res.status(500).send(error);
//     });
// };

//UNCOMMENT IF USING MONGOOSE WITH PROMISES & ASYNC AWAIT
const selectAll = async function (req, res) {
  try {
    const data = await Person.find({});
    res.status(200).send(data);
  } catch (error) {
    res.status(200).send(error);
  }
};
const addPerson = async (req, res) => {
    
    try {
        const newPerson= req.body;
      if (!newPerson) {
        res.status(401).send('Person');
      } else {
        const createdPerson = await Person .create(newPerson);
        res.status(201).send(createdPerson);
      }
    } catch (err) {
      console.log(err);
      res.status(500).send('An error Person');
    }
  };
  const updatePerson = async (req, res) => {
    
    try {

     const {id}= req.params
     
      const result = await Person.findOneAndUpdate({_id:id},req.body)


     res.status(200).send("succefully updated")
    } catch (err) {
      res.status(500).send(err);
    }
  };

 const deletPerson = async (req, res) => {
    const { id } = req.params;
    try {
      const deletedPerson= await Person.findOneAndDelete({ _id:id });
        res.status(201).send(deletedPerson);
    } catch (err) {
        console.log(err);
        res.status(500).send("Server error");
    }
};


 module.exports = { selectAll,addPerson ,updatePerson,deletPerson};
