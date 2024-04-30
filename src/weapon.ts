export interface WeaponOption {
	id: number;
	name: string;
	group: string;
	speed?: number;
}

export const weaponOptions: readonly WeaponOption[] = [
	{id: 1 ,name: "武器1" , group: "杖", speed:0},
	{id: 2 ,name: "武器2" , group: "杖", speed:0},
	{id: 3 ,name: "武器3" , group: "剣", speed:0},
	{id: 4 ,name: "武器4" , group: "剣", speed:0},
	{id: 5 ,name: "武器5" , group: "剣", speed:0},
	{id: 6 ,name: "武器6" , group: "剣", speed:0},
]