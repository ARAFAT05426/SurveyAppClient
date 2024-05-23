import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
const Faq = () => {
  const [isOpen, setIsOpen] = useState(0);
  return (
    <section className="py-10">
      <div className="text-center py-5">
        <p className="font-semibold text-sm">
          GOT A QUESTION? WE’VE GOT ANSWERS.
        </p>
        <h1 className="text-5xl font-bold">FAQ</h1>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-around px-5 lg:px-32">
        <div>
          <img className="w-full" src="/faq.png" alt="" />
        </div>
        <div className="space-y-5">
          {/* '-' Question-1 '-' */}
          <div className="space-y-2 border-l-[6px] rounded-s-md px-3">
            <div
              onClick={() => setIsOpen(0)}
              className="flex items-center justify-between cursor-pointer py-1 font-bold text-xl"
            >
              <h1>Do you offer team pricing?</h1>
              <FaAngleDown
                className={`${
                  isOpen === 0 ? "rotate-180" : "rotate-0"
                } transition-all`}
              />
            </div>
            <hr />
            <p
              className={`max-w-3xl ${
                isOpen === 0 ? "h-24" : "h-0"
              } transition-all overflow-hidden`}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              blanditiis enim nam voluptatibus quae tenetur voluptas aspernatur,
              laboriosam fuga itaque, maxime laudantium, voluptate a veniam
              soluta unde dolores obcaecati nobis consequatur expedita
              exercitationem numquam adipisci?
            </p>
          </div>
          {/* '-' Question-2 '-' */}
          <div className="space-y-2 border-l-[6px] rounded-s-md px-3">
            <div
              onClick={() => setIsOpen(1)}
              className="flex items-center justify-between cursor-pointer py-1 font-bold text-xl"
            >
              <h1>Do you offer team pricing?</h1>
              <FaAngleDown
                className={`${
                  isOpen === 1 ? "rotate-180" : "rotate-0"
                } transition-all`}
              />
            </div>
            <hr />
            <p
              className={`max-w-3xl ${
                isOpen === 1 ? "h-24" : "h-0"
              } transition-all overflow-hidden`}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              blanditiis enim nam voluptatibus quae tenetur voluptas aspernatur,
              laboriosam fuga itaque, maxime laudantium, voluptate a veniam
              soluta unde dolores obcaecati nobis consequatur expedita
              exercitationem numquam adipisci?
            </p>
          </div>
          {/* '-' Question-3 '-' */}
          <div className="space-y-2 border-l-[6px] rounded-s-md px-3">
            <div
              onClick={() => setIsOpen(2)}
              className="flex items-center justify-between cursor-pointer py-1 font-bold text-xl"
              >
              <h1>Do you offer team pricing?</h1>
              <FaAngleDown
                className={`${
                  isOpen === 2 ? "rotate-180" : "rotate-0"
                } transition-all`}
                />
            </div>
            <hr />
            <p
              className={`max-w-3xl ${
                isOpen === 2 ? "h-24" : "h-0"
              } transition-all overflow-hidden`}
              >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              blanditiis enim nam voluptatibus quae tenetur voluptas aspernatur,
              laboriosam fuga itaque, maxime laudantium, voluptate a veniam
              soluta unde dolores obcaecati nobis consequatur expedita
              exercitationem numquam adipisci?
            </p>
          </div>
            {/* '-' Question-4 '-' */}
          <div className="space-y-2 border-l-[6px] rounded-s-md px-3">
            <div
              onClick={() => setIsOpen(3)}
              className="flex items-center justify-between cursor-pointer py-1 font-bold text-xl"
              >
              <h1>Do you offer team pricing?</h1>
              <FaAngleDown
                className={`${
                  isOpen === 3 ? "rotate-180" : "rotate-0"
                } transition-all`}
              />
            </div>
            <hr />
            <p
              className={`max-w-3xl ${
                isOpen === 3 ? "h-24" : "h-0"
              } transition-all overflow-hidden`}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              blanditiis enim nam voluptatibus quae tenetur voluptas aspernatur,
              laboriosam fuga itaque, maxime laudantium, voluptate a veniam
              soluta unde dolores obcaecati nobis consequatur expedita
              exercitationem numquam adipisci?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
