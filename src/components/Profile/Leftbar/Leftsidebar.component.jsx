import { Card, ListGroup } from 'react-bootstrap'

export default function ProfileLeftsidebarComponent() {
    const sidebarData = [
        {
            icon: '',
            title: "Followed by ",
            data: '409 People'
        },
        {
            icon: '',
            title: "Lives in ",
            data: 'Nabigonj,Haiggonj',
        },
        {
            icon: '',
            title: "Phone Number",
            data: '01798037068',
        },
        {
            icon: '',
            title: "Email",
            data: 'salmanakash24@gmail.com',
        }
    ]
    return (
        <Card className="px-2">
            <h3 className="px-2"> Intro </h3>
            <ListGroup variant="flush">
                {sidebarData.map(data => (
                    <ListGroup.Item >
                        {data.title}
                        <strong className="pl-2">{data.data}</strong>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </Card>
    )
}
