import { BiLoaderCircle } from "react-icons/bi";

const Loader = () => {
    return (
        <section className="h-navMinus mt-16 flex items-center justify-center">
            <BiLoaderCircle size={200} className="text-primary/90 animate-spin" />
        </section>
    );
};

export default Loader;
