import { useSelector } from "react-redux";

function Home() {
  const language = useSelector((state) => state.language.lang);
  return (
    <>
      <p>{language}</p>
    </>
  );
}
export default Home;
