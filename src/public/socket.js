const socket = io.connect();

export const loadNotes = (callback) => {
    socket.on('loadnotes',callback);
};   

export const saveNote = (title, description) => {
    socket.emit("client:newnote", {
      title,
      description,
    });
  };