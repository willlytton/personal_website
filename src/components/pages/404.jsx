import { Link } from "react-router-dom"

const Custom404 = () => {
    return (
        <div>
            This page could not be found.
            <Link to="/">Go home.</Link>
        </div>
    )
}