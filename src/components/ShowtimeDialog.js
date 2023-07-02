import React from 'react';
import { Dialog, DialogTitle, DialogContent} from '@mui/material';
import MyCalendar from './myCalendar';

export default function ShowtimeDialog({ open, onClose, showtimes }) {

    return (
        <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth={true}>
            <DialogTitle>Showtimes</DialogTitle>
            <DialogContent>
                <MyCalendar />
            </DialogContent>
        </Dialog>
    );
}
