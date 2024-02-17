import { Login } from "../Login";
import TitleAndDescription from "./TitleAndDescription";

const Hero = () => {
    return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-white-600 text-white">
      <div className="max-w-4xl mx-auto text-center px-8">
        <TitleAndDescription />
        <Login />
      </div>
    </div>
    );
  };
export default Hero;