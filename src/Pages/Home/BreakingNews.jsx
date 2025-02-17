import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className="flex bg-gray-100 p-2 my-4">
            <div className="w-[110px] h-11 bg-[#d72050]">
                <div className="text-white text-xl font-medium text-center mt-[10px]">Latest</div></div>
            <Marquee pauseOnHover >Match Highlights: Germany vs Spain — As It Happened
                Kickoff: The match started with high energy as both sides pressed hard to gain an early advantage.
                12th Minute: Germany showed early dominance with a powerful attempt on goal.</Marquee>
        </div>
    );
};

export default BreakingNews;