/* eslint-disable @typescript-eslint/no-explicit-any */
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useState } from "react";
import { Board } from "../../data/board";
import { Columns } from "../../types";
import { onDragEnd } from "../../helpers/onDragEnd";
import { AddOutline } from "react-ionicons";
import AddModal from "../../components/Modals/AddModal";
import Task from "../../components/Task";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { getRandomColors } from "../../helpers/getRandomColors";

const Home = () => {
	const [columns, setColumns] = useState<Columns>(Board);
	const [modalOpen, setModalOpen] = useState(false);
	const [selectedColumn, setSelectedColumn] = useState("");

	const openModal = (columnId: any) => {
		setSelectedColumn(columnId);
		setModalOpen(true);
	};

	const closeModal = () => {
		setModalOpen(false);
	};

	const handleAddTask = (taskData: any) => {
		const newBoard = { ...columns };
		newBoard[selectedColumn].items.push(taskData);
		setColumns(newBoard);
	};

	return (
		<>
			<DragDropContext onDragEnd={(result: any) => onDragEnd(result, columns, setColumns)}>
				<div className="w-full flex items-start justify-between px-5 pb-8 md:gap-0 gap-10">
					{Object.entries(columns).map(([columnId, column]: any) => (
						<div
							className="w-full flex flex-col gap-0"
							key={columnId}
						>
							<Droppable
								droppableId={columnId}
								key={columnId}
							>
								{(provided: any, snapshot: any) => (
									<div
										ref={provided.innerRef}
										{...provided.droppableProps}
										className={`task-container ${snapshot.isDraggingOver ? "dragging-over" : ""} flex flex-col md:w-[290px] w-[250px] gap-3 items-center py-5`}
									>
										<div className="flex items-center justify-between py-[10px] w-full bg-white rounded-lg shadow-sm text-[#555] font-medium text-[15px]" style={{ fontWeight: "bold" }}>
											<span style={{ marginLeft: "10px" }}>{column.name}</span>
											<span style={{ marginLeft: "5px", marginRight: "10px", width: "fit-content", height: "20px", color: getRandomColors().text, background: getRandomColors().bg, borderRadius: "50%", padding: "0 5px", boxShadow: "rgba(0, 0, 0, 0.1)" }}>{column.num}</span>
											<FontAwesomeIcon icon={faEllipsis} color={"#999"} style={{ marginLeft: "auto", marginRight: "10px" }} />
										</div>
										<div
											onClick={() => openModal(columnId)}
											className="flex cursor-pointer items-center justify-center gap-1 py-[10px] md:w-[100%] w-full opacity-90 bg-white rounded-lg shadow-sm text-[#555] font-medium text-[15px]"
											style={{ background: "#F5F8FF", border: "1px solid lightgray" }}
										>
											<AddOutline color={"#555"} width="20px" height="20px" />
										</div>
										{column.items.map((task: any, index: any) => (
											<Draggable key={task.id.toString()} draggableId={task.id.toString()} index={index}>
												{(provided: any, snapshot: any) => (
													<div
														ref={provided.innerRef}
														{...provided.draggableProps}
														{...provided.dragHandleProps}
														className={`task ${snapshot.isDragging ? "dragging" : ""}`}
													>
														<Task
															provided={provided}
															task={task}
														/>
													</div>
												)}
											</Draggable>
										))}
										{provided.placeholder}
									</div>
								)}
							</Droppable>
						</div>
					))}
				</div>
			</DragDropContext>
			<AddModal
				isOpen={modalOpen}
				onClose={closeModal}
				setOpen={setModalOpen}
				handleAddTask={handleAddTask}
			/>
		</>
	);
};

export default Home;
