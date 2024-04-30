import './component.css';
import '../App.css';
import React, { useMemo } from "react";
import Select from "react-select";

import {
	AccessoryOption,
	accessoryOptions
} from '../accessory';

export const groups = [...new Set(accessoryOptions.map(option => option.group))];
export interface GroupOption {
  label: string;
  options: AccessoryOption[];
}
export const groupedOptions:readonly GroupOption[] = [
	// groupが一致するものをまとめる
	...groups.map(group => ({
		label: group,
		options: accessoryOptions.filter(option => option.group === group)
	}))
];

// コンポーネントのProps。初期値と選択時の関数を渡します
export type UseSelectProps = {
	selected: AccessoryOption | null;
	otherselect: String;
	setUser: (user: AccessoryOption | null) => void;
};


// 選択肢を react-select にわたすための型
type UserOption = {
  label: string;
  value: number;
  name: string;
  speed: number;
};

// Option型をUser型に変換します。react-select から渡されたデータをアプリで扱うために使います
function convertToUser(args: UserOption | null): AccessoryOption | null {
  if (!args) return null;
  return {
    id: args.value,
    name: args.label,
    group: args.name,
	speed: args.speed
  };
}

// User型をOption型に変換します。react-select へデータを渡すときに変換します
function convertToOption(user: AccessoryOption): UserOption {
  return {
    label: user.name,
    value: user.id,
    name: user.group,
	speed: user.speed
  };
}

function outselectedto(selected: String): AccessoryOption[] {
	//otherselectが一致するもののみ取得
	const returnOptions = groupedOptions.filter(option => selected === option.label).map(option => option.options).flat();
	return returnOptions;
} 


// react-select を使った、ユーザー選択コンポーネント
 const AccessorySelect: React.FC<UseSelectProps> = ({ setUser, selected ,otherselect}) => {
	const value = useMemo(
		() => (selected ? convertToOption(selected) : null),
		[selected]
	);

	function onChange(newUser: UserOption | null) {
		setUser(convertToUser(newUser));
	}

	return (
		<div className="accessory">
			<Select
				instanceId="accessorySelect"
				value={value} // 選択中の値
				onChange={onChange} // 選択されたときにはしる処理
				//groupedOptionsから、otherselectとgroupedOptions.labelが一致するものを表示
				options= {outselectedto(otherselect).map(convertToOption)}
				className="container"
				classNamePrefix="rs"
			/>
		</div>
	);
};

export default AccessorySelect;
