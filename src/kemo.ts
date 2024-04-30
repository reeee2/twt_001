export interface KemoOption {
	id: number;
	name: string;
	color: string;
	speed?: number;
}

export const kemoOptions: readonly KemoOption[] = [
	{id: 1 ,name: "kemo1" , color: "緑", speed:0},
	{id: 2 ,name: "kemo2" , color: "緑", speed:15},
	{id: 3 ,name: "kemo3" , color: "赤", speed:0},
	{id: 4 ,name: "kemo4" , color: "赤", speed:0},
	{id: 5 ,name: "kemo5" , color: "黄", speed:0},
	{id: 6 ,name: "kemo6" , color: "黄", speed:0},
]