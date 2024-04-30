export interface AccessoryOption {
	id: number;
	name: string;
	group: string;
}

export const characterOptions: readonly AccessoryOption[] = [
	{id: 1 ,name: "あたまあくせ" , group: "頭"},
	{id: 2 ,name: "あたまあくせ2" , group: "頭"},
	{id: 3 ,name: "腕あくせ" , group: "腕"},
	{id: 4 ,name: "あたまあくせ3" , group: "頭"},
	{id: 5 ,name: "あたまあくせ4" , group: "頭"},
]

// group名を一覧取得
export const groups = [...new Set(characterOptions.map(option => option.group))];

export interface GroupedOption {
  label: string;
  options: AccessoryOption[];
}

export const groupedOptions: readonly GroupedOption[] = [
	// groupが一致するものをまとめる
	...groups.map(group => ({
		label: group,
		options: characterOptions.filter(option => option.group === group)
	}))
	
];