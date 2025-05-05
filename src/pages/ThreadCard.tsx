// Adapted from https://medium.com/@cpjimenez123/how-to-make-a-react-component-reusable-and-scalable-in-typescript-card-example-88331f19a272

interface Props {
    id: number;
    userId: number;
    title: string;
    content: string;
}

export const ThreadCard = ({id, userId, title, content}: Props) => {
    return (
        <div className="card">
            <h1 className="title">{title}</h1>  <h3>#{id} by user {userId}</h3>
            <p className="content">{content}</p>
        </div>
    );
}