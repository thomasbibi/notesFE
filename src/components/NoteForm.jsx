import { useState, useEffect } from 'react';

const NoteForm = ({ onSubmit, initialData, buttonLabel }) => {
    const [note, setNote] = useState({
        title: '',
        content: '',
    });

    useEffect(() => {
        if (initialData) {
            setNote(initialData);
        }
    }, [initialData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNote((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(note);
        setNote({ title: '', content: '' }); 
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <div className="mb-3">
                <label htmlFor="title" className="form-label">
                    Title
                </label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={note.title}
                    onChange={handleChange}
                    className="form-control"
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="content" className="form-label">
                    Content
                </label>
                <textarea
                    id="content"
                    name="content"
                    value={note.content}
                    onChange={handleChange}
                    className="form-control"
                    rows="4"
                    required
                />
            </div>
            <button type="submit" className="btn btn-primary">
                {buttonLabel || 'Submit'}
            </button>
        </form>
    );
};

export default NoteForm;
