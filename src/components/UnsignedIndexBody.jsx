import IntroSection from "../components/IntroSection";
import { Nav, NewsListSection } from "../components/ui/index";

function UnsignedBody({ setIsSignUp, setCategory, category, news }) {
  return (
    <>
      <IntroSection setIsSignUp={setIsSignUp} />
      <Nav setCategory={setCategory} category={category} />
      <NewsListSection news={news} />
    </>
  );
}

export default UnsignedBody;
