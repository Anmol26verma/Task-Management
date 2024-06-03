import {
	PencilOutline,
	SearchOutline,
	
} from "react-ionicons";

const Navbar = () => {
	return (
		<div className="md:w-[calc(100%-230px)] w-[calc(100%-60px)] fixed flex items-center justify-between pl-2 pr-6 h-[70px] top-0 md:left-[230px] left-[60px] border-b border-slate-300 bg-[#F5F8FF]">
			<div className="flex items-center gap-3 cursor-pointer">
				<span className="text-black-400 font-semibold md:text-lg text-sm whitespace-nowrap">
					Task Dashboard <i className="fa-solid fa-pen color:#808080"></i>
				</span>
				<PencilOutline
					color="#808080"
					width={"16px"}
					height={"16px"}
				/>
			</div>
			<div className="md:w-[400px] w-[130px] bg-gray-100 rounded-lg px-3 py-[10px] flex items-left gap-2 " style={{border:"1px solid none", marginRight:"50px"}}>
				<SearchOutline color={"#999"} />
				<input
					type="text"
					placeholder="Search Tasks"
					className="w-full bg-gray-100 outline-none text-[15px]"

				/>
			</div>
		</div>
	);
};

export default Navbar;
