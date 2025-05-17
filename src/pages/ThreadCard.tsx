// Adapted from https://medium.com/@cpjimenez123/how-to-make-a-react-component-reusable-and-scalable-in-typescript-card-example-88331f19a272
import {Card, CardActions, CardContent, Button, Typography} from "@mui/material";

interface Props {
    id: number;
    userId: number;
    title: string;
    content: string;
}

export const ThreadCard = ({id, userId, title, content}: Props) => {
    let contentIsLong = false;
    if (content.length > 50) {
        contentIsLong = true;
        content = content.substring(0, 50);
    }
    return (
        <Card sx={{minWidth: 400, margin: 2}}>
            <CardContent>
                <Typography style={{fontSize: 20}}>#{id} by user #{userId}</Typography>
                <Typography variant={"h5"} style={{fontWeight: "bold"}}>{title}</Typography>
                <Typography style={{fontSize: 15}}>{content}{contentIsLong ? "..." : ""}</Typography>
            </CardContent>
            <CardActions>
                <Button onClick={() => window.location.href = "/"}>READ MORE</Button>
            </CardActions>
        </Card>
    );
}