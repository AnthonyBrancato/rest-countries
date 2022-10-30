import { Alert, AlertColor } from '@mui/material'

function NotifyAlert({ message, severity }: { message: string; severity: AlertColor }) {
    return (
        <Alert severity={severity}>{message}</Alert>
    )
}

export default NotifyAlert