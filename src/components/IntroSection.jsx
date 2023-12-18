import { Button } from "./ui/index";
function IntroSection() {
  return (
    <div className="py-20 flex flex-col justify-center items-center">
      <h1 className="font-bold text-6xl mt-16">GET INFORMED</h1>
      <h1 className="font-bold text-6xl font-sans">GET INSPIRED</h1>
      <h1 className="font-bold text-5xl font-sans">STAY UPDATED</h1>
      <div className="py-1 bg-primary w-[350px] mb-4"></div>
      <p className="font-bold text-2xl font-sans pb-6">
        Stories Curated For You
      </p>
      <Button className=" bg-primary text-white rounded-md ">Sign up</Button>
    </div>
  );
}

export default IntroSection;
