import { useState } from 'react';
import { Card, CardContent, TextField, Button, Box } from '@mui/material';

interface InputTaskProps {
    addTask: (texto: string) => void;
}

export function TaskInput({ addTask }: InputTaskProps) {
    const [input, setInput] = useState('');

    const manejarAgregar = () => {
        const text = input.trim();
        if (!text) return;
        addTask(text);
        setInput('');
    };

    return (
        <Card style={{ maxWidth: 500, marginTop: 24 }}>
            <CardContent style={{ display: 'flex', justifyContent: 'space-between' }}>
                <TextField
                    label="Nueva tarea"
                    variant="outlined"
                    size="small"
                    color='secondary'
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    style={{ flexGrow: 1, marginRight: 8 }}
                />
                <Button variant="contained" color="secondary" onClick={manejarAgregar}>
                    <strong>+</strong>
                </Button>
            </CardContent>
        </Card>
    );
}
