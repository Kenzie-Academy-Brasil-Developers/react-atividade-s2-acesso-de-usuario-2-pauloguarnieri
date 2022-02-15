import { useParams } from "react-router-dom"
import { members } from "../../db"
import { Link } from "react-router-dom"

export function Customer() {

    const params = useParams()
    const member = members.find(member => member.id === params.id)


    return (
        <div>
            <h1>Detalhes do cliente</h1>

            <p>
                Nome: {member && member.name}
            </p>

            <Link to="/">Voltar</Link>
        </div>
    )
}