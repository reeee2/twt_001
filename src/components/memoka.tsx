import './component.css';
import '../App.css';
import React, { useMemo } from "react";
import Select from "react-select";

import {
	MemokaOption,
	memokaOptions
} from '../memoka';


// コンポーネントのProps。初期値と選択時の関数を渡します
export type UseSelectProps = {
	selected: MemokaOption | null;
	setUser: (user: MemokaOption | null) => void;
};


// 選択肢を react-select にわたすための型
type UserOption = {
  label: string;
  value: number;
  name: string;
  speed: number;
};

// Option型をUser型に変換します。react-select から渡されたデータをアプリで扱うために使います
function convertToUser(args: UserOption | null): MemokaOption | null {
  if (!args) return null;
  return {
    id: args.value,
    name: args.label,
	speed: args.speed
  };
}

// User型をOption型に変換します。react-select へデータを渡すときに変換します
function convertToOption(user: MemokaOption): UserOption {
  return {
    label: user.name,
    value: user.id,
    name: user.name,
	speed: user.speed,
  };
}

// react-select を使った、ユーザー選択コンポーネント
 const MemokaSelect: React.FC<UseSelectProps> = ({ setUser, selected }) => {
	const value = useMemo(
		() => (selected ? convertToOption(selected) : null),
		[selected]
	);
	

	function onChange(newUser: UserOption | null) {
		setUser(convertToUser(newUser));
	}

	return (
		<Select
			instanceId="memokaSelect"
			value={value} // 選択中の値
			onChange={onChange} // 選択されたときにはしる処理
			//kemoOptionsから選択肢を作成
			options={memokaOptions.map(option => convertToOption(option))}
			className="container"
			classNamePrefix="rs"
		/>
	);
};

export default MemokaSelect;
