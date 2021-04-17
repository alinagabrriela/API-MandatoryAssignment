module.exports = app => {

    const room = require("../controllers/room.controller.js");

    

 // Create a new Room

 app.post("/room", room.create);



 // Retrieve all Rooms

 app.get("/room", room.findAll);



 // Retrieve a single Room with room_id

 app.get("/room/:room_id", room.findOne);



 // Update a Room with room_id

 app.put("/room/:room_id", room.update);



 // Delete a Room with room_id

 app.delete("/room/:room_id", room.delete);



 // Create a new Room

 app.delete("/room", room.deleteAll);

};