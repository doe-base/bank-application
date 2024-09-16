'use client'
import Nav from "./components/Navbar/Navbar";
import HomeContainer from "./containers/Home";

interface Props{};
const Home: React.FC<Props> = () => {
  return (
    <div>
      <Nav />
      <HomeContainer />
    </div>
  );
}
export default Home;