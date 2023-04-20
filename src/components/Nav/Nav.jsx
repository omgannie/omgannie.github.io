import "./Nav.module.css";
import { useState, useTransition } from "react";

const links = [
    {link: "#about", text: "about"},
    {link: "#work", text: "work"},
    {link: "#projects", text: "projects"},
    {link: "#contact", text: "contact"},
    {link: "https://github.com/omgannie", text: "github"},
    {link: "#linkedin", text: "linkedin"},
    {link: "mailto:annie_oh@icloud.com", text: "e-mail"}
]

export default function Nav() {
    const [toggled, setToggle] = useState(false);
    const [isPending, startTransition] = useTransition();
    const listItems = links.map(({ id, link, text }) => <li key={id}><a href={link}>{text}</a></li>);

    function toggleMenu(bool) {
        startTransition(() => {
            setToggle(bool);
        });
    }

    const OpenedMenu = () => (<ul className="animate__animated animate__bounceInUp">
        <li key={"close"} onClick={() => toggleMenu(false)}>close</li>
        {listItems}
    </ul>);

    return toggled && (
            <div className={"open"}>
                <nav>
                    <OpenedMenu />
                </nav>
            </div>
    ) || (
    <nav>
        <span onClick={() => toggleMenu(true)}>open</span>
    </nav>
    )
}