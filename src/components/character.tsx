import './component.css';
import '../App.css';
import React, { useMemo } from "react";
import MyDropDown from "./Dropdown.js";
import Select from "react-select";

import {
  CharacterOption,
  characterOptions,
  GroupedOption,
  groupedOptions
} from '../character';

// コンポーネントのProps。初期値と選択時の関数を渡します
export type UseSelectProps = {
	selected: CharacterOption | null;
	outselected: String[];
	setUser: (user: CharacterOption | null) => void;
};


// 選択肢を react-select にわたすための型
type UserOption = {
  label: string;
  value: number;
  name: string;
  url: string;
};

// Option型をUser型に変換します。react-select から渡されたデータをアプリで扱うために使います
function convertToUser(args: UserOption | null): CharacterOption | null {
  if (!args) return null;
  return {
    id: args.value,
    name: args.name,
    group: args.label,
    url: args.url!,
  };
}

// User型をOption型に変換します。react-select へデータを渡すときに変換します
function convertToOption(user: CharacterOption): UserOption {
  return {
    label: user.name,
    value: user.id,
    name: user.name,
    url: user.url!,
  };
}

const FormatOptionLabel = (({ option }: { option: GroupedOption }) => (
	<div className="userSelect">
		<div className="characterName">{option.label}</div>
	</div>
));

// characterOptions.groupからoutselected[]を引いたもの
function outselectedto(selected: String): CharacterOption {
	return characterOptions.find(option => option.group === selected)!;
} 


// react-select を使った、ユーザー選択コンポーネント
 const UserSelect: React.FC<UseSelectProps> = ({ setUser, selected , outselected}) => {
	const value = useMemo(
		() => (selected ? convertToOption(selected) : null),
		[selected]
	);

	function onChange(newUser: UserOption | null) {
		setUser(convertToUser(newUser));
	}

  return (
    <Select
      instanceId="userSelect"
      value={value} // 選択中の値
      onChange={onChange} // 選択されたときにはしる処理
	  // characterOptions.groupからoutselected[]を引いたものを選択肢として渡します
      options= {outselected.map((selected) => outselectedto(selected)).map(convertToOption)}
	  formatOptionLabel={(option) => (
        <FormatOptionLabel option={option} />
      )}
    />
  );
};

export default UserSelect;
