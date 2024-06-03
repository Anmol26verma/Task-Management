import {
	GridOutline,
	ImageOutline,
	PieChartOutline,
	FolderOpenOutline,
	BriefcaseOutline, 
	TimeOutline,
	SettingsOutline,
	MenuOutline,

} from "react-ionicons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
	const navLinks = [
		{
			title: "Task",
			icon: (
				<ImageOutline
					color="#1F51FF"
					width="22px"
					height="22px"
				/>
			),
			taskNo : 4,
			active: false,
		},
		{
			title: "Drive Files",
			icon: (
				<FolderOpenOutline
					color="#1F51FF"
					width="22px"
					height="22px"
				/>
			),
			taskNo : 435,
			active: false,
		},
		{
			title: "Boards",
			icon: (
				<BriefcaseOutline
					color="#1F51FF"
					width="22px"
					height="22px"
				/>
			),
			taskNo : 5,
			active: true,
		},
		
		
		{
			title: "Updates",
			icon: (
				<TimeOutline
					color="#1F51FF"
					width="22px"
					height="22px"
				/>
			),
			taskNo : " ",
			active: false,
		},
		{
			title: "Analytics",
			icon: (
				<PieChartOutline
					color="#1F51FF"
					width="22px"
					height="22px"
				/>
			),
			taskNo : 2,
			active: false,
		},
		{
			title: "CRM Dashboard",
			icon: (
				<GridOutline
					color="#1F51FF"
					width="22px"
					height="22px"
				/>
			),
			taskNo : 2,
			active: false,
			
		},
		
		{
			title: "Settings",
			icon: (
				<SettingsOutline
					color="#1F51FF"
					width="22px"
					height="22px"
				/>
			),
			taskNo : 2,
			active: false,
		},
	];
	return (
		<div className="fixed left-0 top-0 md:w-[230px] w-[60px] overflow-hidden h-full flex flex-col">
			<div className="w-full flex items-center md:justify-start justify-center md:pl-5 h-[70px] bg-[#F5F8FF]">
				<span className="text-black-400 font-semibold text-2xl md:block hidden margin-left:5px">Dashboard</span><span style={{marginLeft:"30px" , color:"#1F51FF" ,background:"#f5f8ff", }}> <MenuOutline color="#808080" width="22px" height="22px" /></span>
				
			</div>
			<div className="w-full h-[calc(100vh-70px)] border-r flex flex-col md:items-start items-center gap-2 border-slate-300 bg-[#F5F8FF] py-5 md:px-3 px-3 relative">
				{navLinks.map((link) => {
					return (
						<div
							key={link.title}
							className={`flex items-center gap-2 w-full rounded-lg hover:bg-black-300 px-2 py-3 cursor-pointer ${
								link.active ? "bg-black-300" : "bg-transparent"}`
							}
						>
							{link.icon}
							<span className={`font-medium text-[15px] md:block hidden>${
								link.active ? "bg-black-300" : "bg-transparent"}`} >{link.title}
							</span>
							<span className="font-medium text-[15px] md:block hidden forced-colors:#1F51FF" style={{marginLeft:"auto" , color:"#1F51FF" ,background:"#f5f8ff", }}>{link.taskNo}</span>
						</div>
					);
				})}
				<div className="flex absolute bottom-4 items-center md:justify-start justify-center  gap-2 md:w-[90%] w-[70%] rounded-lg hover:bg-blue-300 px-2 py-3 cursor-pointer bg-gray-200" 
				style={{height :"50px"}}
				>
					<img src="https://i.pravatar.cc/300?img=1" alt="" style={{width:"35px" , height:"35px", borderRadius:"50%", border:"4px inset #1F51FF"}}/> 
					<span className="font-medium text-[15px] md:block hidden align-top">
						<span className="font-medium text-[15px] md:block hidden" style={{marginBottom :"auto"}}>Nancy Martino</span>
						<span style={{marginTop:"auto" , color:"#808080", width :"fit-content" , marginLeft:"20px ",  fontSize:"12px", alignItems :"center" }}>Designer</span>
					</span>
					<span style={{marginLeft:"auto" , color:"#1F51FF", display:"inline-flex", flexDirection:"column"}}>
					<FontAwesomeIcon icon={faCaretUp}  
						color="#1F51FF"
						width="12px"
						height="12px"
					/>
					<FontAwesomeIcon icon={faCaretDown}  
						color="#1F51FF"
						width="12px"
						height="12px"
					/>
					</span>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
