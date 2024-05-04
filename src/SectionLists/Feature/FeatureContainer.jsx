import FeatureHeading from "./FeatureHeading";
import FeatureParagraph from "./FeatureParagraph";
import FeatureSingleContainer from "./FeatureSingleBox/FeatureSingleContainer";



const FeatureContainer = () => {
    return (
        <div className='px-[50px] mt-[50px]'>
           <FeatureHeading></FeatureHeading>
           <FeatureParagraph></FeatureParagraph>
           <FeatureSingleContainer></FeatureSingleContainer>
        </div>
    );
};

export default FeatureContainer;