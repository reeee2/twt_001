export interface SettingOption {
	id: number;
	name: string;
	value: string;
	unitGroup?: string;
	color?: string;
	speed: number;
}

export const settingOptions: readonly SettingOption[] = [
	{id: 1 ,name: "素早さI" , value: "武器", speed:0},
	{id: 2 ,name: "素早さII" , value: "武器", speed:15},
	{id: 3 ,name: "素早さIII" , value: "武器", speed:0},
	{id: 4 ,name: "素早さIV" , value: "武器", speed:0},
	{id: 5 ,name: "素早さV" , value: "武器", speed:-10},
]