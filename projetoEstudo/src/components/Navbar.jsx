import { Link } from "react-router-dom";

function Navbar() {
    return ( 
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/sobre">Sobre</Link>
                </li>
                <li>
                    <Link to="/contato">Contato</Link>
                </li>
                <li>
                    <Link to="/create">Cadastrar Produto</Link>
                </li>
                <li>
                    <Link to="/carrinho">Carrinho</Link>
                </li>
            </ul>
        </nav>
     );
}

export default Navbar;