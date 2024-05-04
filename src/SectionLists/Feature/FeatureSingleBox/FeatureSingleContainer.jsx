import FeatureSingleBox from "./FeatureSingleBox";
import FeatureSingleBox1 from "./FeatureSingleBox1";
import FeatureSingleBox2 from "./FeatureSingleBox2";
import FeatureSingleBox3 from "./FeatureSingleBox3";
import FeatureSingleBox4 from "./FeatureSingleBox4";
import FeatureSingleBox5 from "./FeatureSingleBox5";


const FeatureSingleContainer = () => {
    return (
        <div className='flex flex-wrap mt-5 gap-[50px] justify-between'>
            <FeatureSingleBox></FeatureSingleBox>
            <FeatureSingleBox1></FeatureSingleBox1>
            <FeatureSingleBox2></FeatureSingleBox2>
            <FeatureSingleBox3></FeatureSingleBox3>
            <FeatureSingleBox4></FeatureSingleBox4>
            <FeatureSingleBox5></FeatureSingleBox5>
        </div>
    );
};

export default FeatureSingleContainer;