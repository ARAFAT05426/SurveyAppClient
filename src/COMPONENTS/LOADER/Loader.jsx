import { BiLoaderCircle } from "react-icons/bi";
const Loader = () => {
    return (
        <section className="h-navMinus mt-16 flex items-center justify-center">
            <BiLoaderCircle className="text-9xl animate-spin" />
        </section>
    );
};

export default Loader;