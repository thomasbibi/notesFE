const NoteList = ({ notes, onEdit, onDelete }) => {
    if (!notes.length) {
        return <p>No notes available. Start by adding one!</p>;
    }

    return (
        <div className="row">
            {notes.map((note) => (
                <div className="col-md-4 mb-4" key={note.noteId}>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{note.title}</h5>
                            <p className="card-text">{note.content}</p>
                            <button
                                className="btn btn-secondary me-2"
                                onClick={() => onEdit(note)}
                            >
                                Edit
                            </button>
                            <button
                                className="btn btn-danger"
                                onClick={() => onDelete(note.noteId)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default NoteList;
