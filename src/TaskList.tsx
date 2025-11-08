import { Task } from './types';
import { Card, CardContent, List, Button, Typography, ListItemText } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

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
                        <AnimatePresence>
                            {tasks.map(t => (
                                <motion.div
                                    key={t.id}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ duration: 0.7 }}
                                    style={{
                                        border: '1px solid #ffdbfaff',
                                        backgroundColor: '#ffd4f8ff',
                                        borderRadius: 8,
                                        marginBottom: 8,
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        padding: '8px 12px'
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
                                        style={{ backgroundColor: '#f3e5f5' }}
                                        onClick={() => removeTask(t.id)}
                                    >
                                        🗑️
                                    </Button>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </List>
                )}
            </CardContent>
        </Card>
    );
}
