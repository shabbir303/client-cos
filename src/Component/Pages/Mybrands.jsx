import Marquee from "react-fast-marquee";


const Mybrands = () => {
    return (
        <div>
            <h1 className="text-[50px] font-[600] text-center underline ">My brands</h1>
            <Marquee >
               
               <img src="https://i.ibb.co/Xp8Jsvv/avon.jpg" alt="" className="w-[400px]"/>
                <img src="https://i.ibb.co/BfbYHyy/chanel.jpg" alt="" className="w-[400px]"/>
                <img src="https://i.ibb.co/w079yXm/coty-600-x-300-1080x675.jpg" alt=""className="w-[400px]" />
                <img src="https://i.ibb.co/gPk9VQj/estee-lauder.jpg" alt="" className="w-[400px]"/>
                <img src="https://i.ibb.co/nQSWchW/revlon.jpg" alt="" className="w-[400px]"/>
              
                {/* <img src="https://i.ibb.co/BfbYHyy/chanel.jpg" alt="" /> */}

            </Marquee>
        </div>
    );
};

export default Mybrands;