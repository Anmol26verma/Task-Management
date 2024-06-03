export type TaskT = {
	id: string;
	tags: { title: string; };
	description: string;
	users: User[];
};

type Column = {
	name: string;
	num: string;
	items: TaskT[];
};

interface User {
    id: string;
    name: string;
    avatar: string; // URL or path to the avatar image
}

export type Users = {
	[key: string]: User;
};

export type Columns = {
	[key: string]: Column;
};
