import './component.css';
import '../App.css';
import React, { useMemo } from "react";
import Select from "react-select";

import {
  CharacterOption,
  characterOptions
} from '../character';

export const groups = [...new Set(characterOptions.map(option => option.group))];
export interface GroupOption {
  label: string;
  options: CharacterOption[];
}
export const groupedOptions:readonly GroupOption[] = [
	// groupが一致するものをまとめる
	...groups.map(group => ({
		label: group,
		options: characterOptions.filter(option => option.group === group)
	}))
];

// コンポーネントのProps。初期値と選択時の関数を渡します
export type UseSelectProps = {
	selected: CharacterOption | null;
	otherselect: String[];
	setUser: (user: CharacterOption | null) => void;
};


// 選択肢を react-select にわたすための型
type UserOption = {
  label: string;
  value: number;
  name: string;
  speed: number;
  url: string;
  useweapon: string;
};

// Option型をUser型に変換します。react-select から渡されたデータをアプリで扱うために使います
function convertToUser(args: UserOption | null): CharacterOption | null {
  if (!args) return null;
  return {
    id: args.value,
    name: args.label,
    group: args.name,
	speed: args.speed,
    url: args.url!,
	useweapon: args.useweapon,
  };
}

// User型をOption型に変換します。react-select へデータを渡すときに変換します
function convertToOption(user: CharacterOption): UserOption {
  return {
    label: user.name,
    value: user.id,
    name: user.group,
	speed: user.speed,
    url: user.url!,
	useweapon: user.useweapon,
  };
}

function outselectedto(selected: String[]): CharacterOption[] {
	//characterGroupedOptions.labelとselected[]の内容が一致するものを除外
	const returnOptions = groupedOptions.filter(option => selected.indexOf(option.label) === -1);
	const returnOption = returnOptions.map(option => option.options).flat();
	return returnOption;
} 

// react-select を使った、ユーザー選択コンポーネント
 const CharacterSelect: React.FC<UseSelectProps> = ({ setUser, selected ,otherselect }) => {
	const value = useMemo(
		() => (selected ? convertToOption(selected) : null),
		[selected]
	);

	function onChange(newUser: UserOption | null) {
		setUser(convertToUser(newUser));
	}

	return (
		<Select
			instanceId="CharacterSelect"
			value={value} // 選択中の値
			onChange={onChange} // 選択されたときにはしる処理
			// characterOptions.groupからoutselected[]を引いたものを選択肢として渡します
			options= {outselectedto(otherselect).map(convertToOption)}
			className="container"
			classNamePrefix="rs"
		/>
	);
};

export default CharacterSelect;
