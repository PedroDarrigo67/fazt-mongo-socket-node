const socket = io.connect();

export const loadNotes = () => {
    socket.on('loadnotes',(data) => {
        console.log(data);
    });
};   

export const saveNote = (title, description) => {
    socket.emit("client:newnote", {
      title,
      description,
    });
  };