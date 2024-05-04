
import FeatureContainer from "./SectionLists/Feature/FeatureContainer";
import Header from "./SectionLists/Header/Header";
import Website from "./SectionLists/Website/Website";

const App = () => {
  return (
    <div className="w-[1300px]">
    <Header></Header>
    <Website></Website>
    <FeatureContainer></FeatureContainer>
    </div>
  );
};

export default App;