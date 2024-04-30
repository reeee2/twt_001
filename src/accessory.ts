export interface AccessoryOption {
	id: number;
	name: string;
	group: string;
	speed?: number;
}

export const accessoryOptions: readonly AccessoryOption[] = [
	{id: 1 ,name: "あたまあくせ" , group: "頭"},
	{id: 2 ,name: "あたまあくせ2" , group: "頭"},
	{id: 3 ,name: "腕あくせ" , group: "腕"},
	{id: 4 ,name: "腕3" , group: "腕"},
	{id: 5 ,name: "あたまあくせ4" , group: "頭"},
]
