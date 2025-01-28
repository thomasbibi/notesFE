import { useState, useEffect } from 'react';
import axios from '../services/api';
import NoteForm from '../components/NoteForm';
import NoteList from '../components/NoteList';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [notes, setNotes] = useState([]);
    const [currentNote, setCurrentNote] = useState(null);
    const navigate = useNavigate();
    

    useEffect(() => {
        fetchNotes();
    }, []);

    const fetchNotes = async () => {
        try {
            const response = await axios.get('/user/notes', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            setNotes(response.data.data);
        } catch (error) {
            if(error.status === 401)
                {
                    navigate('/login')
                }
            console.error('Error fetching notes:', error);
        }
    };

    const handleCreateOrUpdate = async (note) => {
        try {
            if (currentNote) {
                let data = {
                    content:note.content,
                    title:note.title,
                    noteId:note.noteId
                }
                await axios.patch(`/user/notes`, data, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                });
            } else {
                // Create new note
                await axios.post('/user/note', note, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                });
            }
            fetchNotes();
            setCurrentNote(null);
        } catch (error) {
            if(error.status === 401)
            {
                navigate('/login')
            }
            console.error('Error saving note:', error);
        }
    };

    const handleEdit = (note) => {
        setCurrentNote(note);
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`/user/notes/?noteId=${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            fetchNotes();
        } catch (error) {
            if(error.status === 401)
                {
                    navigate('/login')
                }
            console.error('Error deleting note:', error);
        }
    };

    return (
        <div className="container mt-5">
            <h2>Notes Dashboard</h2>
            <NoteList notes={notes} onEdit={handleEdit} onDelete={handleDelete} />
             <NoteForm
             onSubmit={handleCreateOrUpdate}
             initialData={currentNote}
             buttonLabel={currentNote ? 'Update Note' : 'Create Note'}
         />          

        </div>
    );
};

export default Dashboard;
