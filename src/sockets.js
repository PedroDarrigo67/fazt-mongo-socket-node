import Note from './models/note';

export default (io) => {
    io.on('connection', (socket) => {   
        console.log("nuevo socket connectado:", socket.id);     
        
        // Send all messages to the client
        const emitNotes = async () => {
        const notes = await Note.find();
        socket.emit("server:loadnotes", notes);
      };
      emitNotes();

      socket.on("client:newnote", async (data) => {
        const newNote = new Note(data);
        const savedNote = await newNote.save();
        io.emit("server:newnote", savedNote);
        console.log(savedNote);
      });
    
    });   
};