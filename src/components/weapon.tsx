import './component.css';
import '../App.css';
import React, { useMemo } from "react";
import Select from "react-select";

import {
  CharacterOption
} from '../character';

import {
	WeaponOption,
	weaponOptions
} from '../weapon';

export const groups = [...new Set(weaponOptions.map(option => option.group))];
export interface GroupOption {
  label: string;
  options: WeaponOption[];
}
export const groupedOptions:readonly GroupOption[] = [
	// groupが一致するものをまとめる
	...groups.map(group => ({
		label: group,
		options: weaponOptions.filter(option => option.group === group)
	}))
];

// コンポーネントのProps。初期値と選択時の関数を渡します
export type UseSelectProps = {
	selected: WeaponOption | null;
	otherselect: String;
	othercharacter: CharacterOption | null;
	setUser: (user: WeaponOption | null) => void;
};


// 選択肢を react-select にわたすための型
type UserOption = {
  label: string;
  value: number;
  name: string;
  speed: number;
};

// Option型をUser型に変換します。react-select から渡されたデータをアプリで扱うために使います
function convertToUser(args: UserOption | null): WeaponOption | null {
  if (!args) return null;
  return {
    id: args.value,
    name: args.label,
    group: args.name,
	speed: args.speed
  };
}

// User型をOption型に変換します。react-select へデータを渡すときに変換します
function convertToOption(user: WeaponOption): UserOption {
  return {
    label: user.name,
    value: user.id,
    name: user.group,
	speed: user.speed
  };
}

function outselectedto(selected: String, othercharacter: CharacterOption | null): WeaponOption[] {
	//groupedOptions
	const returnOptions = groupedOptions.map(option => option.options).flat();
	if(selected === "武器" && othercharacter?.useweapon! !== undefined){
		//othercharacter?.useweaponと一致するもののみ取得
		return returnOptions.filter(option => othercharacter?.useweapon! === option.group);
	}
	return returnOptions;
} 


// react-select を使った、ユーザー選択コンポーネント
 const WeaponSelect: React.FC<UseSelectProps> = ({ setUser, selected ,otherselect , othercharacter}) => {
	const value = useMemo(
		() => (selected ? convertToOption(selected) : null),
		[selected]
	);
	

	function onChange(newUser: UserOption | null) {
		setUser(convertToUser(newUser));
	}

	return (
		<Select
			instanceId="weaponSelect"
			value={value} // 選択中の値
			onChange={onChange} // 選択されたときにはしる処理
			//groupedOptions.optionsを全件表示、otherselectが"武器"の時のみ別途処理を行う
			options={outselectedto(otherselect, othercharacter).map(convertToOption)}
			//options= {otherselect === "武器" && othercharacter?.useweapon! !== undefined ? outselectedto(othercharacter?.useweapon).map(convertToOption) : groupedOptions.map(option => option.options).flat().map(convertToOption)}
			className="container"
			classNamePrefix="rs"
		/>
	);
};

export default WeaponSelect;
