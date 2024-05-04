

const TopHeaderLeft = () => {
    return (
        <>

          <div className="headingList flex items-center gap-6 ">
                <img src="/Image/Logo.png" alt="" />
                <a href="#"><p className='font-semibold hover:text-red-500'>Features</p></a>
                <a href="#"><p className='font-semibold hover:text-red-500'>Pricing</p></a>
                <a href="#"><p className='font-semibold hover:text-red-500'>Careers</p></a>
                <a href="#"><p className='font-semibold hover:text-red-500'>Help</p></a>
            </div>  
        </>
    );
};

export default TopHeaderLeft;