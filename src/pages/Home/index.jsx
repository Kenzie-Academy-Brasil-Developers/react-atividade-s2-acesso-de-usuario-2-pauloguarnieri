import { Link } from "react-router-dom";
import { members } from "../../db";

export function Home() {



    return (
        <ul>
            {members.map(member => member.type === 'pj' ? <li><Link to={`/company/${member.id}`}>{member.name}</Link></li>
                :
                <li><Link to={`/customer/${member.id}`} >{member.name}</Link></li>)}
        </ul>
    )
}
