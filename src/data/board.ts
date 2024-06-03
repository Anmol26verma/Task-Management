import { v4 as uuidv4 } from "uuid";
import { Columns } from "../types";

export const Board: Columns = {
	backlog: {
		name: "Backlog Tasks",
		num : '5',
		items: [
			{
				id: uuidv4(),
				tags: {
					title: "Task",
				},
				description: "Brainstroming brings team members diverse experience into play",
				users : [ 
					{ id: '1', name: 'Anmol', avatar: 'https://i.pravatar.cc/300?img=1' },
					{ id: '2', name: 'Anmol', avatar: 'https://i.pravatar.cc/300?img=2' },
					{ id: '3', name: 'Anmol', avatar: 'https://i.pravatar.cc/300?img=3' },
				]

			},
			{
				id: uuidv4(),
				tags: {
					title: "Task",
				},
				description: "Brainstroming brings team members diverse experience into play",
				users : [ 
					{ id: '1', name: 'Anmol', avatar: 'https://i.pravatar.cc/300?img=1' },
					{ id: '2', name: 'Anmol', avatar: 'https://i.pravatar.cc/300?img=2' },
					{ id: '3', name: 'Anmol', avatar: 'https://i.pravatar.cc/300?img=3' },
				]

			},
			{
				id: uuidv4(),
				tags: {
					title: "Task",
				},
				description: "Brainstroming brings team members diverse experience into play",
				users : [ 
					{ id: '1', name: 'Anmol', avatar: 'https://i.pravatar.cc/300?img=1' },
					{ id: '2', name: 'Anmol', avatar: 'https://i.pravatar.cc/300?img=2' },
					{ id: '3', name: 'Anmol', avatar: 'https://i.pravatar.cc/300?img=3' },
				]

			},
		],
	},
	todo: {
		name: "To Do Tasks",
		num : '3',
		items: [
			{
				id: uuidv4(),
				tags: {
					title: "Task",
				},
				description: "Brainstroming brings team members diverse experience into play",
				users : [ 
					{ id: '1', name: 'Anmol', avatar: 'https://i.pravatar.cc/300?img=1' },
					{ id: '2', name: 'Anmol', avatar: 'https://i.pravatar.cc/300?img=2' },
					{ id: '3', name: 'Anmol', avatar: 'https://i.pravatar.cc/300?img=3' },
				]
			},
			{
				id: uuidv4(),
				tags: {
					title: "Task",
				},
				description: "Brainstroming brings team members diverse experience into play",
				users : [ 
					{ id: '1', name: 'Anmol', avatar: 'https://i.pravatar.cc/300?img=1' },
					{ id: '2', name: 'Anmol', avatar: 'https://i.pravatar.cc/300?img=2' },
					{ id: '3', name: 'Anmol', avatar: 'https://i.pravatar.cc/300?img=3' },
				]

			},
		],
	},
	pending: {
		name: "In Process",
		num : '2',
		items: [
			{
				id: uuidv4(),
				tags: {
					title: "Task",
				},
				description: "Brainstroming brings team members diverse experience into play",
				users : [ 
					{ id: '1', name: 'Anmol', avatar: 'https://i.pravatar.cc/300?img=1' },
					{ id: '2', name: 'Anmol', avatar: 'https://i.pravatar.cc/300?img=2' },
					{ id: '3', name: 'Anmol', avatar: 'https://i.pravatar.cc/300?img=3' },
				]

			},
			{
				id: uuidv4(),
				tags: {
					title: "Task",
				},
				description: "Brainstroming brings team members diverse experience into play",
				users : [ 
					{ id: '1', name: 'Anmol', avatar: 'https://i.pravatar.cc/300?img=1' },
					{ id: '2', name: 'Anmol', avatar: 'https://i.pravatar.cc/300?img=2' },
					{ id: '3', name: 'Anmol', avatar: 'https://i.pravatar.cc/300?img=3' },
				]

			},
		],
	},
	done: {
		name: "Done",
		num : '5',
		items: [
			{
				id: uuidv4(),
				tags: {
					title: "Task",
				},
				description: "Brainstroming brings team members diverse experience into play",
				users : [ 
					{ id: '1', name: 'Anmol', avatar: 'https://i.pravatar.cc/300?img=1' },
					{ id: '2', name: 'Anmol', avatar: 'https://i.pravatar.cc/300?img=2' },
					{ id: '3', name: 'Anmol', avatar: 'https://i.pravatar.cc/300?img=3' },
				]

			},
			{
				id: uuidv4(),
				tags: {
					title: "Task",
				},
				description: "Brainstroming brings team members diverse experience into play",
				users : [ 
					{ id: '1', name: 'Anmol', avatar: 'https://i.pravatar.cc/300?img=1' },
					{ id: '2', name: 'Anmol', avatar: 'https://i.pravatar.cc/300?img=2' },
					{ id: '3', name: 'Anmol', avatar: 'https://i.pravatar.cc/300?img=3' },
				]

			},
		],
	},
};
