import React, { useState, useEffect } from 'react';
import './App.css';
import CharacterSelect  from "./components/character";
import AccessorySelect from "./components/accessory";
import WeaponSelect from "./components/weapon";
import KemoSelect from "./components/kemo";
import MemokaSelect from "./components/memoka";
import { createContext, useContext } from 'react';
import Select from "react-select";

import {
  CharacterOption,
  characterOptions
} from './character';

import {
	KemoOption
} from './kemo';

import {
	MemokaOption
} from './memoka';


export interface AccessorySelectOption {
	id: number;
	name: string;
	group: string;
	speed?: number;
}

export interface SetAccessoryOption {
	頭: AccessorySelectOption ;
	耳: AccessorySelectOption ;
	胴: AccessorySelectOption ;
	腕: AccessorySelectOption ;
}

export interface WeaponSelectOption {
	id: number;
	name: string;
	group: string;
	speed?: number;
}

export interface SetWeaponOption {
	武器?: WeaponSelectOption | null;
	武器1?: WeaponSelectOption | null;
	武器2?: WeaponSelectOption | null;
	武器3?: WeaponSelectOption | null;
	武器4?: WeaponSelectOption | null;
}

function App(): JSX.Element {
	const [todoList, setTodoList] = useState<Todo[]>(JSON.parse(localStorage.getItem("todoList")) || []);
	
	interface Todo {
		title: string;
		description: string;
	}
	
	
	// ローカルストレージに保存
	useEffect(() => {
		localStorage.setItem("todoList", JSON.stringify(todoList));
	}, [todoList]);
	
	// グループを特定
	const groups = Array.from(new Set(characterOptions.map(option => option.group)));
	
	// 各グループの最初のデータを取得
	const initialOptions = groups.map(group => characterOptions.find(option => option.group === group));
	
	// キャラクターの選択状態を管理
	const [CharacterOption1, setUser1] = useState<CharacterOption | null>(initialOptions[0]);
	const [CharacterOption2, setUser2] = useState<CharacterOption | null>(initialOptions[1]);
	const [CharacterOption3, setUser3] = useState<CharacterOption | null>(initialOptions[2]);
	const [CharacterOption4, setUser4] = useState<CharacterOption | null>(initialOptions[3]);
	const [CharacterOption5, setUser5] = useState<CharacterOption | null>(initialOptions[4]);
	const [CharacterOption6, setUser6] = useState<CharacterOption | null>(initialOptions[5]);
	
	// 武器の初期値としてSetWeaponOptionを作成
	const initialWeaponOptions = {
		武器: null,
		武器1: null,
		武器2: null,
		武器3: null,
		武器4: null,
	}
	
	// 武器の選択状態を管理
	const [WeaponOption1, setWeapon1] = useState<SetWeaponOption | null>(initialWeaponOptions);
	const [WeaponOption2, setWeapon2] = useState<SetWeaponOption | null>(initialWeaponOptions);
	const [WeaponOption3, setWeapon3] = useState<SetWeaponOption | null>(initialWeaponOptions);
	const [WeaponOption4, setWeapon4] = useState<SetWeaponOption | null>(initialWeaponOptions);
	const [WeaponOption5, setWeapon5] = useState<SetWeaponOption | null>(initialWeaponOptions);
	const [WeaponOption6, setWeapon6] = useState<SetWeaponOption | null>(initialWeaponOptions);
	
	// アクセサリの初期値としてSetAccessoryOptionを作成
	const initialAccessoryOptions = {
		頭: null,
		耳: null,
		胴: null,
		腕: null,
	}
	
	// アクセサリの選択状態を管理
	const [AccessoryOption1, setAccessory1] = useState<SetAccessoryOption | null>(initialAccessoryOptions);
	const [AccessoryOption2, setAccessory2] = useState<SetAccessoryOption | null>(initialAccessoryOptions);
	const [AccessoryOption3, setAccessory3] = useState<SetAccessoryOption | null>(initialAccessoryOptions);
	const [AccessoryOption4, setAccessory4] = useState<SetAccessoryOption | null>(initialAccessoryOptions);
	const [AccessoryOption5, setAccessory5] = useState<SetAccessoryOption | null>(initialAccessoryOptions);
	const [AccessoryOption6, setAccessory6] = useState<SetAccessoryOption | null>(initialAccessoryOptions);
	
	// kemoの選択状態を管理
	const [KemoOption1, setKemo1] = useState<KemoOption | null>(null);
	const [KemoOption2, setKemo2] = useState<KemoOption | null>(null);
	const [KemoOption3, setKemo3] = useState<KemoOption | null>(null);
	
	// memokaの選択状態を管理
	const [MemokaOption, setMemoka] = useState<MemokaOption | null>(null);
	
	
	// 該当箇所以外で選択されている他のキャラクターグループを取得
	const otherSelect = (characterOption) => {
		const allSelectedGroups = [CharacterOption1.group, CharacterOption2.group , CharacterOption3.group, CharacterOption4.group, CharacterOption5.group, CharacterOption6.group].flat();
		const filteredGroups = allSelectedGroups.filter(group => group !== characterOption.group);
		return filteredGroups;
	}
	
	// 武器をsetWeaponにセット
	const setInWeapon = (selectedOption, getWeaponOption, setWeapon , group) => {
		const newWeaponOption = {...getWeaponOption};
		newWeaponOption[group] = selectedOption;
		setWeapon(newWeaponOption);
	}
	
	// アクセサリをsetAccessoryにセット
	const setInAccessory = (selectedOption, getAccessoryOption, setAccessory , group) => {
		const newAccessoryOption = {...getAccessoryOption};
		newAccessoryOption[group] = selectedOption;
		setAccessory(newAccessoryOption);
	}
	
	return (
		
		<div className="App">
			<form className="App-form">
				<div className="characterfield">
					<div className="character">
						<CharacterSelect 
							setUser={(selectedOption) => {setUser1(selectedOption)}}
							selected={CharacterOption1} 
							otherselect = {otherSelect(CharacterOption1)}
						/>
						<WeaponSelect
							setUser={(selectedOption) => {setInWeapon(selectedOption ,WeaponOption1, setWeapon1 , "武器")}}
							selected={WeaponOption1["武器"]}
							otherselect = "武器"
							othercharacter = {CharacterOption1}
						/>
					</div>
					<div className="character">
						<CharacterSelect 
							setUser={(selectedOption) => {setUser2(selectedOption)}}
							selected={CharacterOption2} 
							otherselect = {otherSelect(CharacterOption2)}
						/>
						<WeaponSelect
							setUser={(selectedOption) => {setInWeapon(selectedOption ,WeaponOption2, setWeapon2 , "武器")}}
							selected={WeaponOption2["武器"]}
							otherselect = "武器"
							othercharacter = {CharacterOption2}
						/>
					</div>
				</div>
				<div className="kemo">
					<KemoSelect 
							setUser={(selectedOption) => {setKemo1(selectedOption)}}
							selected={KemoOption1} 
						/>
				</div>
				<div className="subfield">
					<div className="accessoryfield">
						<div className="accessory">
							<WeaponSelect
								setUser={(selectedOption) => {setInWeapon(selectedOption ,WeaponOption1, setWeapon1 , "武器1")}}
								selected={WeaponOption1["武器1"]}
								otherselect = "武器1"
								othercharacter = {CharacterOption1}
							/>
						</div>
						<div className="accessory">
							<WeaponSelect
								setUser={(selectedOption) => {setInWeapon(selectedOption ,WeaponOption1, setWeapon1 , "武器2")}}
								selected={WeaponOption1["武器2"]}
								otherselect = "武器2"
								othercharacter = {CharacterOption1}
							/>
						</div>
						<div className="accessory">
							<WeaponSelect
								setUser={(selectedOption) => {setInWeapon(selectedOption ,WeaponOption1, setWeapon1 , "武器3")}}
								selected={WeaponOption1["武器3"]}
								otherselect = "武器3"
								othercharacter = {CharacterOption1}
							/>
						</div>
						<div className="accessory">
							<WeaponSelect
								setUser={(selectedOption) => {setInWeapon(selectedOption ,WeaponOption1, setWeapon1 , "武器4")}}
								selected={WeaponOption1["武器4"]}
								otherselect = "武器4"
								othercharacter = {CharacterOption1}
							/>
						</div>
					</div>
					<div className="accessoryfield">
						<AccessorySelect
							setUser={(selectedOption) => {setInAccessory(selectedOption ,AccessoryOption1, setAccessory1 , "頭")}}
							selected={AccessoryOption1["頭"]}
							otherselect = "頭"
						/>
						<AccessorySelect
							setUser={(selectedOption) => {setInAccessory(selectedOption ,AccessoryOption1, setAccessory1 , "腕")}}
							selected={AccessoryOption1["腕"]}
							otherselect = "腕"
						/>
						<AccessorySelect
							setUser={(selectedOption) => {setInAccessory(selectedOption ,AccessoryOption1, setAccessory1 , "胴")}}
							selected={AccessoryOption1["胴"]}
							otherselect = "胴"
						/>
						<AccessorySelect
							setUser={(selectedOption) => {setInAccessory(selectedOption ,AccessoryOption1, setAccessory1 , "耳")}}
							selected={AccessoryOption1["耳"]}
							otherselect = "耳"
						/>
					</div>
					<div className="accessoryfield">
						<div className="accessory">
							<WeaponSelect
								setUser={(selectedOption) => {setInWeapon(selectedOption ,WeaponOption2, setWeapon2 , "武器1")}}
								selected={WeaponOption2["武器1"]}
								otherselect = "武器1"
								othercharacter = {CharacterOption2}
							/>
						</div>
						<div className="accessory">
							<WeaponSelect
								setUser={(selectedOption) => {setInWeapon(selectedOption ,WeaponOption2, setWeapon2 , "武器2")}}
								selected={WeaponOption2["武器2"]}
								otherselect = "武器2"
								othercharacter = {CharacterOption2}
							/>
						</div>
						<div className="accessory">
							<WeaponSelect
								setUser={(selectedOption) => {setInWeapon(selectedOption ,WeaponOption2, setWeapon2 , "武器3")}}
								selected={WeaponOption2["武器3"]}
								otherselect = "武器3"
								othercharacter = {CharacterOption2}	
							/>
						</div>
						<div className="accessory">
							<WeaponSelect
								setUser={(selectedOption) => {setInWeapon(selectedOption ,WeaponOption2, setWeapon2 , "武器4")}}
								selected={WeaponOption2["武器4"]}
								otherselect = "武器4"
								othercharacter = {CharacterOption2}
							/>
						</div>
					</div>
					<div className="accessoryfield">
						<AccessorySelect
							setUser={(selectedOption) => {setInAccessory(selectedOption ,AccessoryOption2, setAccessory2 , "頭")}}
							selected={AccessoryOption2["頭"]}
							otherselect = "頭"
						/>
						<AccessorySelect
							setUser={(selectedOption) => {setInAccessory(selectedOption ,AccessoryOption2, setAccessory2 , "腕")}}
							selected={AccessoryOption2["腕"]}
							otherselect = "腕"
						/>
						<AccessorySelect
							setUser={(selectedOption) => {setInAccessory(selectedOption ,AccessoryOption2, setAccessory2 , "胴")}}
							selected={AccessoryOption2["胴"]}
							otherselect = "胴"
						/>
						<AccessorySelect
							setUser={(selectedOption) => {setInAccessory(selectedOption ,AccessoryOption2, setAccessory2 , "耳")}}
							selected={AccessoryOption2["耳"]}
							otherselect = "耳"
						/>
					</div>
				</div>
			</form>
			<form className="App-form">
				<div className="characterfield">
					<div className="character">
						<CharacterSelect 
							setUser={(selectedOption) => {setUser3(selectedOption)}}
							selected={CharacterOption3} 
							otherselect = {otherSelect(CharacterOption3)}
						/>
						<WeaponSelect
							setUser={(selectedOption) => {setInWeapon(selectedOption ,WeaponOption3, setWeapon3 , "武器")}}
							selected={WeaponOption3["武器"]}
							otherselect = "武器"
							othercharacter = {CharacterOption3}
						/>
					</div>
					<div className="character">
						<CharacterSelect 
							setUser={(selectedOption) => {setUser4(selectedOption)}}
							selected={CharacterOption4} 
							otherselect = {otherSelect(CharacterOption4)}
						/>
						<WeaponSelect
							setUser={(selectedOption) => {setInWeapon(selectedOption ,WeaponOption4, setWeapon4 , "武器")}}
							selected={WeaponOption4["武器"]}
							otherselect = "武器"
							othercharacter = {CharacterOption4}
						/>
					</div>
				</div>
				<div className="kemo">
					<KemoSelect 
						setUser={(selectedOption) => {setKemo2(selectedOption)}}
						selected={KemoOption2} 
					/>
				</div>
				<div className="subfield">
					<div className="accessoryfield">
						<div className="accessory">
							<WeaponSelect
								setUser={(selectedOption) => {setInWeapon(selectedOption ,WeaponOption3, setWeapon3 , "武器1")}}
								selected={WeaponOption3["武器1"]}
								otherselect = "武器1"
								othercharacter = {CharacterOption3}
							/>
						</div>
						<div className="accessory">
							<WeaponSelect
								setUser={(selectedOption) => {setInWeapon(selectedOption ,WeaponOption3, setWeapon3 , "武器2")}}
								selected={WeaponOption3["武器2"]}
								otherselect = "武器2"
								othercharacter = {CharacterOption3}
							/>
						</div>
						<div className="accessory">
							<WeaponSelect
								setUser={(selectedOption) => {setInWeapon(selectedOption ,WeaponOption3, setWeapon3 , "武器3")}}
								selected={WeaponOption3["武器3"]}
								otherselect = "武器3"
								othercharacter = {CharacterOption3}
							/>
						</div>
						<div className="accessory">
							<WeaponSelect
								setUser={(selectedOption) => {setInWeapon(selectedOption ,WeaponOption3, setWeapon3 , "武器4")}}
								selected={WeaponOption3["武器4"]}
								otherselect = "武器4"
								othercharacter = {CharacterOption3}
							/>
						</div>
					</div>
					<div className="accessoryfield">
						<AccessorySelect
							setUser={(selectedOption) => {setInAccessory(selectedOption ,AccessoryOption3, setAccessory3 , "頭")}}
							selected={AccessoryOption3["頭"]}
							otherselect = "頭"
						/>
						<AccessorySelect
							setUser={(selectedOption) => {setInAccessory(selectedOption ,AccessoryOption3, setAccessory3 , "腕")}}
							selected={AccessoryOption3["腕"]}
							otherselect = "腕"
						/>
						<AccessorySelect
							setUser={(selectedOption) => {setInAccessory(selectedOption ,AccessoryOption3, setAccessory3 , "胴")}}
							selected={AccessoryOption3["胴"]}
							otherselect = "胴"
						/>
						<AccessorySelect
							setUser={(selectedOption) => {setInAccessory(selectedOption ,AccessoryOption3, setAccessory3 , "耳")}}
							selected={AccessoryOption3["耳"]}
							otherselect = "耳"
						/>
					</div>
					<div className="accessoryfield">
						<div className="accessory">
							<WeaponSelect
								setUser={(selectedOption) => {setInWeapon(selectedOption ,WeaponOption4, setWeapon4 , "武器1")}}
								selected={WeaponOption4["武器1"]}
								otherselect = "武器1"
								othercharacter = {CharacterOption4}
							/>
						</div>
						<div className="accessory">
							<WeaponSelect
								setUser={(selectedOption) => {setInWeapon(selectedOption ,WeaponOption4, setWeapon4 , "武器2")}}
								selected={WeaponOption4["武器2"]}
								otherselect = "武器2"
								othercharacter = {CharacterOption4}
							/>
						</div>
						<div className="accessory">
							<WeaponSelect
								setUser={(selectedOption) => {setInWeapon(selectedOption ,WeaponOption4, setWeapon4 , "武器3")}}
								selected={WeaponOption4["武器3"]}
								otherselect = "武器3"
								othercharacter = {CharacterOption4}
							/>
						</div>
						<div className="accessory">
							<WeaponSelect
								setUser={(selectedOption) => {setInWeapon(selectedOption ,WeaponOption4, setWeapon4 , "武器4")}}
								selected={WeaponOption4["武器4"]}
								otherselect = "武器4"
								othercharacter = {CharacterOption4}
							/>
						</div>
					</div>
					<div className="accessoryfield">
						<AccessorySelect
							setUser={(selectedOption) => {setInAccessory(selectedOption ,AccessoryOption4, setAccessory4 , "頭")}}
							selected={AccessoryOption4["頭"]}
							otherselect = "頭"
						/>
						<AccessorySelect
							setUser={(selectedOption) => {setInAccessory(selectedOption ,AccessoryOption4, setAccessory4 , "腕")}}
							selected={AccessoryOption4["腕"]}
							otherselect = "腕"
						/>
						<AccessorySelect
							setUser={(selectedOption) => {setInAccessory(selectedOption ,AccessoryOption4, setAccessory4 , "胴")}}
							selected={AccessoryOption4["胴"]}
							otherselect = "胴"
						/>
						<AccessorySelect
							setUser={(selectedOption) => {setInAccessory(selectedOption ,AccessoryOption4, setAccessory4 , "耳")}}
							selected={AccessoryOption4["耳"]}
							otherselect = "耳"
						/>
					</div>
				</div>
			</form>
			<form className="App-form">
				<div className="characterfield">
					<div className="character">
						<CharacterSelect 
							setUser={(selectedOption) => {setUser5(selectedOption)}}
							selected={CharacterOption5} 
							otherselect = {otherSelect(CharacterOption5)}
						/>
						<WeaponSelect
							setUser={(selectedOption) => {setInWeapon(selectedOption ,WeaponOption5, setWeapon5 , "武器")}}
							selected={WeaponOption5["武器"]}
							otherselect = "武器"
							othercharacter = {CharacterOption5}
						/>
					</div>
					<div className="character">
						<CharacterSelect 
							setUser={(selectedOption) => {setUser6(selectedOption)}}
							selected={CharacterOption6} 
							otherselect = {otherSelect(CharacterOption6)}
						/>
						<WeaponSelect
							setUser={(selectedOption) => {setInWeapon(selectedOption ,WeaponOption6, setWeapon6 , "武器")}}
							selected={WeaponOption6["武器"]}
							otherselect = "武器"
							othercharacter = {CharacterOption6}
						/>
					</div>
				</div>
				<div className="kemo">
					<KemoSelect 
						setUser={(selectedOption) => {setKemo3(selectedOption)}}
						selected={KemoOption3} 
					/>
				</div>
				<div className="subfield">
					<div className="accessoryfield">
						<div className="accessory">
							<WeaponSelect
								setUser={(selectedOption) => {setInWeapon(selectedOption ,WeaponOption5, setWeapon5 , "武器1")}}
								selected={WeaponOption5["武器1"]}
								otherselect = "武器1"
								othercharacter = {CharacterOption5}
							/>
						</div>
						<div className="accessory">
							<WeaponSelect
								setUser={(selectedOption) => {setInWeapon(selectedOption ,WeaponOption5, setWeapon5 , "武器2")}}
								selected={WeaponOption5["武器2"]}
								otherselect = "武器2"
								othercharacter = {CharacterOption5}
							/>
						</div>
						<div className="accessory">
							<WeaponSelect
								setUser={(selectedOption) => {setInWeapon(selectedOption ,WeaponOption5, setWeapon5 , "武器3")}}
								selected={WeaponOption5["武器3"]}
								otherselect = "武器3"
								othercharacter = {CharacterOption5}
							/>
						</div>
						<div className="accessory">
							<WeaponSelect
								setUser={(selectedOption) => {setInWeapon(selectedOption ,WeaponOption5, setWeapon5 , "武器4")}}
								selected={WeaponOption5["武器4"]}
								otherselect = "武器4"
								othercharacter = {CharacterOption5}
							/>
						</div>
					</div>
					<div className="accessoryfield">
						<AccessorySelect
							setUser={(selectedOption) => {setInAccessory(selectedOption ,AccessoryOption5, setAccessory5 , "頭")}}
							selected={AccessoryOption5["頭"]}
							otherselect = "頭"
						/>
						<AccessorySelect
							setUser={(selectedOption) => {setInAccessory(selectedOption ,AccessoryOption5, setAccessory5 , "腕")}}
							selected={AccessoryOption5["腕"]}
							otherselect = "腕"
						/>
						<AccessorySelect
							setUser={(selectedOption) => {setInAccessory(selectedOption ,AccessoryOption5, setAccessory5 , "胴")}}
							selected={AccessoryOption5["胴"]}
							otherselect = "胴"
						/>
						<AccessorySelect
							setUser={(selectedOption) => {setInAccessory(selectedOption ,AccessoryOption5, setAccessory5 , "耳")}}
							selected={AccessoryOption5["耳"]}
							otherselect = "耳"
						/>
					</div>
					<div className="accessoryfield">
						<div className="accessory">
							<WeaponSelect
								setUser={(selectedOption) => {setInWeapon(selectedOption ,WeaponOption6, setWeapon6 , "武器1")}}
								selected={WeaponOption6["武器1"]}
								otherselect = "武器1"
								othercharacter = {CharacterOption6}
							/>
						</div>
						<div className="accessory">
							<WeaponSelect
								setUser={(selectedOption) => {setInWeapon(selectedOption ,WeaponOption6, setWeapon6 , "武器2")}}
								selected={WeaponOption6["武器2"]}
								otherselect = "武器2"
								othercharacter = {CharacterOption6}
							/>
						</div>
						<div className="accessory">
							<WeaponSelect
								setUser={(selectedOption) => {setInWeapon(selectedOption ,WeaponOption6, setWeapon6 , "武器3")}}
								selected={WeaponOption6["武器3"]}
								otherselect = "武器3"
								othercharacter = {CharacterOption6}
							/>
						</div>
						<div className="accessory">
							<WeaponSelect
								setUser={(selectedOption) => {setInWeapon(selectedOption ,WeaponOption6, setWeapon6 , "武器4")}}
								selected={WeaponOption6["武器4"]}
								otherselect = "武器4"
								othercharacter = {CharacterOption6}
							/>
						</div>
					</div>
					<div className="accessoryfield">
						<AccessorySelect
							setUser={(selectedOption) => {setInAccessory(selectedOption ,AccessoryOption6, setAccessory6 , "頭")}}
							selected={AccessoryOption6["頭"]}
							otherselect = "頭"
						/>
						<AccessorySelect
							setUser={(selectedOption) => {setInAccessory(selectedOption ,AccessoryOption6, setAccessory6 , "腕")}}
							selected={AccessoryOption6["腕"]}
							otherselect = "腕"
						/>
						<AccessorySelect
							setUser={(selectedOption) => {setInAccessory(selectedOption ,AccessoryOption6, setAccessory6 , "胴")}}
							selected={AccessoryOption6["胴"]}
							otherselect = "胴"
						/>
						<AccessorySelect
							setUser={(selectedOption) => {setInAccessory(selectedOption ,AccessoryOption6, setAccessory6 , "耳")}}
							selected={AccessoryOption6["耳"]}
							otherselect = "耳"
						/>
					</div>
				</div>
			</form>
			<div className="memoka">
				<MemokaSelect 
					setUser={(selectedOption) => {setMemoka(selectedOption)}}
					selected={MemokaOption} 
				/>
			</div>
			<div>
				<h2>Selected Options:</h2>
				<ul>
					<li>{CharacterOption1?.name} + {CharacterOption1.speed} </li>
					<li>Weapon Option : {WeaponOption1.武器?.name} + {WeaponOption1.武器?.speed}</li>
					<li>Weapon Option 1: {WeaponOption1.武器1?.name} + {WeaponOption1.武器1?.speed}</li>
					<li>Weapon Option 2: {WeaponOption1.武器2?.name} + {WeaponOption1.武器2?.speed}</li>
					<li>Weapon Option 3: {WeaponOption1.武器3?.name} + {WeaponOption1.武器3?.speed}</li>
					<li>Weapon Option 4: {WeaponOption1.武器4?.name} + {WeaponOption1.武器4?.speed}</li>
					<li>Accessory Option : {AccessoryOption1.頭?.name} + {AccessoryOption1.頭?.speed}</li>
					<li>Accessory Option : {AccessoryOption1.耳?.name} + {AccessoryOption1.耳?.speed}</li>
					<li>Accessory Option : {AccessoryOption1.胴?.name} + {AccessoryOption1.胴?.speed}</li>
					<li>Accessory Option : {AccessoryOption1.腕?.name} + {AccessoryOption1.腕?.speed}</li>
					<li>{CharacterOption2?.name} + {CharacterOption2.speed} </li>
					<li>Weapon Option : {WeaponOption2.武器?.name} + {WeaponOption2.武器?.speed}</li>
					<li>Weapon Option 1: {WeaponOption2.武器1?.name} + {WeaponOption2.武器1?.speed}</li>
					<li>Weapon Option 2: {WeaponOption2.武器2?.name} + {WeaponOption2.武器2?.speed}</li>
					<li>Weapon Option 3: {WeaponOption2.武器3?.name} + {WeaponOption2.武器3?.speed}</li>
					<li>Weapon Option 4: {WeaponOption2.武器4?.name} + {WeaponOption2.武器4?.speed}</li>
					<li>Accessory Option : {AccessoryOption2.頭?.name} + {AccessoryOption2.頭?.speed}</li>
					<li>Accessory Option : {AccessoryOption2.耳?.name} + {AccessoryOption2.耳?.speed}</li>
					<li>Accessory Option : {AccessoryOption2.胴?.name} + {AccessoryOption2.胴?.speed}</li>
					<li>Accessory Option : {AccessoryOption2.腕?.name} + {AccessoryOption2.腕?.speed}</li>
					<li>{KemoOption1?.name} + {KemoOption1?.speed} </li>
					
					<li>{CharacterOption3?.name} + {CharacterOption3.speed} </li>
					<li>Weapon Option : {WeaponOption3.武器?.name} + {WeaponOption3.武器?.speed}</li>
					<li>Weapon Option 1: {WeaponOption3.武器1?.name} + {WeaponOption3.武器1?.speed}</li>
					<li>Weapon Option 2: {WeaponOption3.武器2?.name} + {WeaponOption3.武器2?.speed}</li>
					<li>Weapon Option 3: {WeaponOption3.武器3?.name} + {WeaponOption3.武器3?.speed}</li>
					<li>Weapon Option 4: {WeaponOption3.武器4?.name} + {WeaponOption3.武器4?.speed}</li>
					<li>Accessory Option : {AccessoryOption3.頭?.name} + {AccessoryOption3.頭?.speed}</li>
					<li>Accessory Option : {AccessoryOption3.耳?.name} + {AccessoryOption3.耳?.speed}</li>
					<li>Accessory Option : {AccessoryOption3.胴?.name} + {AccessoryOption3.胴?.speed}</li>
					<li>Accessory Option : {AccessoryOption3.腕?.name} + {AccessoryOption3.腕?.speed}</li>
					<li>{CharacterOption4?.name} + {CharacterOption4.speed} </li>
					<li>Weapon Option : {WeaponOption4.武器?.name} + {WeaponOption4.武器?.speed}</li>
					<li>Weapon Option 1: {WeaponOption4.武器1?.name} + {WeaponOption4.武器1?.speed}</li>
					<li>Weapon Option 2: {WeaponOption4.武器2?.name} + {WeaponOption4.武器2?.speed}</li>
					<li>Weapon Option 3: {WeaponOption4.武器3?.name} + {WeaponOption4.武器3?.speed}</li>
					<li>Weapon Option 4: {WeaponOption4.武器4?.name} + {WeaponOption4.武器4?.speed}</li>
					<li>Accessory Option : {AccessoryOption4.頭?.name} + {AccessoryOption4.頭?.speed}</li>
					<li>Accessory Option : {AccessoryOption4.耳?.name} + {AccessoryOption4.耳?.speed}</li>
					<li>Accessory Option : {AccessoryOption4.胴?.name} + {AccessoryOption4.胴?.speed}</li>
					<li>Accessory Option : {AccessoryOption4.腕?.name} + {AccessoryOption4.腕?.speed}</li>
					<li>{KemoOption2?.name} + {KemoOption2?.speed} </li>
					<li>{CharacterOption5?.name} + {CharacterOption5.speed} </li>
					<li>Weapon Option : {WeaponOption5.武器?.name} + {WeaponOption5.武器?.speed}</li>
					<li>Weapon Option 1: {WeaponOption5.武器1?.name} + {WeaponOption5.武器1?.speed}</li>
					<li>Weapon Option 2: {WeaponOption5.武器2?.name} + {WeaponOption5.武器2?.speed}</li>
					<li>Weapon Option 3: {WeaponOption5.武器3?.name} + {WeaponOption5.武器3?.speed}</li>
					<li>Weapon Option 4: {WeaponOption5.武器4?.name} + {WeaponOption5.武器4?.speed}</li>
					<li>Accessory Option : {AccessoryOption5.頭?.name} + {AccessoryOption5.頭?.speed}</li>
					<li>Accessory Option : {AccessoryOption5.耳?.name} + {AccessoryOption5.耳?.speed}</li>
					<li>Accessory Option : {AccessoryOption5.胴?.name} + {AccessoryOption5.胴?.speed}</li>
					<li>Accessory Option : {AccessoryOption5.腕?.name} + {AccessoryOption5.腕?.speed}</li>
					<li>{CharacterOption6?.name} + {CharacterOption6.speed} </li>
					<li>Weapon Option : {WeaponOption6.武器?.name} + {WeaponOption6.武器?.speed}</li>
					<li>Weapon Option 1: {WeaponOption6.武器1?.name} + {WeaponOption6.武器1?.speed}</li>
					<li>Weapon Option 2: {WeaponOption6.武器2?.name} + {WeaponOption6.武器2?.speed}</li>
					<li>Weapon Option 3: {WeaponOption6.武器3?.name} + {WeaponOption6.武器3?.speed}</li>
					<li>Weapon Option 4: {WeaponOption6.武器4?.name} + {WeaponOption6.武器4?.speed}</li>
					<li>Accessory Option : {AccessoryOption6.頭?.name} + {AccessoryOption6.頭?.speed}</li>
					<li>Accessory Option : {AccessoryOption6.耳?.name} + {AccessoryOption6.耳?.speed}</li>
					<li>Accessory Option : {AccessoryOption6.胴?.name} + {AccessoryOption6.胴?.speed}</li>
					<li>Accessory Option : {AccessoryOption6.腕?.name} + {AccessoryOption6.腕?.speed}</li>
					<li>{KemoOption3?.name} + {KemoOption3?.speed} </li>
					
					<li>{MemokaOption?.name} + {MemokaOption?.speed} </li>
				</ul>
			</div>
		</div>
		
	);
}

export default App;
