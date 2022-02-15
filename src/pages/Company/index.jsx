import { Link } from "react-router-dom";
import { members } from "../../db";
import { useParams } from "react-router-dom";


export function Company() {

    const params = useParams();

    const member = members.find(member => member.id === params.id)

    return (
        <div>
            <h1>Detalhes da Empresa</h1>

            <p>
                Nome da empresa: {member && member.name}
            </p>

            <Link to="/">Voltar</Link>
        </div>
    )
}