/* eslint-disable @typescript-eslint/no-explicit-any */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faPaperclip, faTrash } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

import { TaskT } from "../../types";

interface TaskProps {
	task: TaskT;
	provided: any;
}



const Task = ({ task, provided }: TaskProps) => {
	const { tags, description, users } = task;

	// Use a state variable to track dragging
	const [isDragging, setIsDragging] = useState(false);

	const handleDragStart = () => {
		setIsDragging(true);
	};

	// const handleDragEnd = () => {
	// 	setIsDragging(false);
	// };
	

	return (
		<div
			ref={provided.innerRef}
			{...provided.draggableProps}
			{...provided.dragHandleProps}
			onDragStart={handleDragStart}
			// onDragEnd={handleDragEnd}
			className={`w-full cursor-${isDragging ? 'grabbing' : 'grab'} transition-all flex flex-col justify-between gap-3 items-start shadow-sm rounded-xl px-3 py-4 hover:bg-gray-100`}
			style={{background:"#F5F8FF"}}
		>
			<div className="w-full flex items-start flex-col gap-0" style={{display:"inline-flex", flexDirection:"row"}}>
			<span className="text-[15.5px] font-medium text-[#555]" style={{ color:"black", fontWeight: "bold" ,fontSize:"20px", }}>{tags.title}</span>
			<span style={{ cursor: "pointer" , marginLeft:"auto"}}>
				<FontAwesomeIcon icon={faTrash}  
					color={"lightgray"}
					width="20px"
					height="20px"
				/>
			</span>
			</div>
			<div className="w-full flex items-start flex-col gap-0">
				<span className="text-[13.5px] text-gray-500">{description}</span>
			</div>
			<span></span>
			<div className="w-full flex items-center justify-between">
				<div className="flex items-center gap-1 ">
					<span>
						<FontAwesomeIcon icon={faPaperclip}
							color={"lightgray"}
							width="15px"
							height="15px"
						/>
					</span><span style={{ margin: "2px 2px", color: "gray", alignSelf: "center" }}>2</span>
					<span>
						<FontAwesomeIcon icon={faMessage}
						color={"lightgray"}
						width="15px"
						height="15px"
						/>
					</span><span style={{ marginLeft: "2px", color: "gray", alignSelf: "center" }}>4</span>

					{/* Profile Images  */}
					<div className="w-full flex items-right justify-end" style={{display:"inline-flex", flexDirection:"row", marginLeft:"140px"}}>
						<div className="flex items-center gap- -2" >
							{users.map((user) => (
								<img
									key={user.id}
									src={user.avatar} 
									alt={user.name}
									className="w-5 h-5 rounded-full" 
								/>
							))}
						</div>
					</div>
				</div>				
			</div>
		</div>
	);
};

export default Task;
