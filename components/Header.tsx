import Link from "next/link";
import Image from "next/image";
import Button from "./parts/Button"

const Header: React.FC = () => {
  return (
    <header>
      <div className="py-5 px-7 flex items-center">
        <Link
          href="/"
          className="block max-w-[123.14px] max-h-[19.18px] w-full h-full"
        >
          <Image
            src="/img/common/logo.svg"
            alt="logo"
            width={123.14}
            height={19.18}
            className="max-w-[123.14px] max-h-[19.18px] static"
          />
        </Link>

        <Button href="/login" text="Login" styles="bg-gray-200 ml-auto hover:bg-gray-300 font-futura" />
        <Button
          href="/register"
          text="Register"
          styles="ml-4 bg-primary text-white hover:bg-hoverPrimary font-futura"
        />
      </div>
    </header>
  );
};

export default Header;
