import "./WorkExperience.module.css"
import { useState } from "react";


function ListItem({ id, company, date_range, description}) {
    const [toggle, setToggle] = useState(false);

    return (
            <div key={id} id={id}>
                <h3 onClick={() => setToggle(!toggle)}>{company} .... {date_range}</h3>
                {toggle ? <p className="animate__animated animate__fadeInDown">{description}</p> : null}
            </div>
    )
}

export default function WorkExperience() {
    return (
            <div id="work">
                <ul>
                    <li>
                        <ListItem
                            id={1}
                            company={"venmo"}
                            date_range={"april 2019 - march 2023"}
                            description={"did things"}
                        />
                    </li>
                </ul>
            </div>
    )
};
