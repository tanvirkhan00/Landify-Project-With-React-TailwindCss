import DownHeaderLeft from "./Header/DownHeaderLeft";
import DownHeaderRight from "./Header/DownHeaderRight";
import TopHeaderLeft from "./TopHeader/TopHeaderLeft";
import TopHeaderRight from "./TopHeader/TopHeaderRight";


const Header = () => {
    return (
        <div>
            <div className="TopHeader flex justify-between mt-5 items-center mx-auto px-[50px]">
                <TopHeaderLeft></TopHeaderLeft>
                <TopHeaderRight></TopHeaderRight>
            </div>
            <div className="DownHeader flex items-center mt-10 mx-auto px-[50px]">
                <DownHeaderLeft></DownHeaderLeft>
                <DownHeaderRight></DownHeaderRight>
            </div>
        </div>
    );
};

export default Header;