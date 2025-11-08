import { Task } from './types';
import { Card, CardContent, List, ListItem, ListItemText, Button, Typography, Box } from '@mui/material';

interface TaskListProps {
    tasks: Task[];
    toggleTask: (id: number) => void;
    removeTask: (id: number) => void;
}

export function TaskList({ tasks, toggleTask, removeTask }: TaskListProps) {
    return (
        <Card style={{ minWidth: 500, maxWidth: 800, marginTop: 24, borderRadius: 15 }}>
            <CardContent>
                {tasks.length === 0 ? (
                    <Typography>No hay tareas aún.</Typography>
                ) : (
                    <List>
                        {tasks.map(t => (
                            <ListItem
                                key={t.id}
                                style={{
                                    border: '1px solid #ffdbfaff',
                                    backgroundColor: '#ffd4f8ff',
                                    borderRadius: 8,
                                    marginBottom: 8,
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}
                            >
                                <ListItemText
                                    primary={t.text}
                                    style={{
                                        textDecoration: t.done ? 'line-through' : 'none',
                                        cursor: 'pointer',
                                        textAlign: 'left'
                                    }}
                                    onClick={() => toggleTask(t.id)}
                                />
                                <Button
                                    variant="contained"
                                    style={{ backgroundColor: 'whitesmoke' }}
                                    onClick={() => removeTask(t.id)}
                                >
                                    🗑️
                                </Button>
                            </ListItem>
                        ))}
                    </List>
                )}
            </CardContent>
        </Card>
    );
}
