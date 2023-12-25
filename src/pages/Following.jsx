import { HomeHeader, Footer } from "../components/ui/index";
import FollowingSection from "../components/FollowingSection";
function Following() {
  return (
    <>
      <HomeHeader />
      <div className="relative top-16">
        <FollowingSection />
        <Footer />
      </div>
    </>
  );
}

export default Following;
