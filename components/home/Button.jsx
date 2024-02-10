import Link from "next/link";

const Button = () => (
  <Link
    href={"/explore"}
    type="button"
    className="px-6 py-2 bg-primary text-white hidden lg:flex rounded-full"
  >
    Get Started
  </Link>
);

export default Button;
