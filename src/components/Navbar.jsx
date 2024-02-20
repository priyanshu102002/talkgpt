import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header className="text-white bg-gray-800 body-font sticky top-0 z-10">
            <div className="container mx-auto flex justify-between items-center p-4 px-10">
                <Link to={"/"} className="flex title-font font-medium items-center text-white mb-4 md:mb-0 w-24">
                    <img src="./images/logo.png" alt="" />
                </Link>
            </div>
        </header>
    );
};

export default Navbar;
