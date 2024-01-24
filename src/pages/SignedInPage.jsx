import { Footer, HomeHeader } from "../components/ui/index";
function SignedInPage({ children }) {
  return (
    <div>
      <HomeHeader />
      {children}
      <Footer />
    </div>
  );
}

export default SignedInPage;
