import React, { useState, useEffect } from 'react';
import './App.css';
import UserSelect  from "./components/character";
import { createContext, useContext } from 'react';
import Select from "react-select";


import {
  CharacterOption,
  characterOptions,
  GroupedOption,
  groupedOptions
} from './character';

export const groups = [...new Set(characterOptions.map(option => option.group))];
export interface CharacterGroupOption {
  label: string;
  options: CharacterOption[];
}
export const characterGroupedOptions: readonly CharacterGroupOption[] = [
	// groupが一致するものをまとめる
	...groups.map(group => ({
		label: group,
		options: characterOptions.filter(option => option.group === group)
	}))
	
];


function App(): JSX.Element {
	const [todoList, setTodoList] = useState<Todo[]>(JSON.parse(localStorage.getItem("todoList")) || []);
	
	interface Todo {
		title: string;
		description: string;
	}
	// グループを特定
	const groups = Array.from(new Set(characterOptions.map(option => option.group)));
	
	// 各グループの最初のデータを取得
	const initialOptions = groups.map(group => characterOptions.find(option => option.group === group));

	const [CharacterOption1, setUser1] = useState<CharacterOption | null>(initialOptions[0]);
	const [CharacterOption2, setUser2] = useState<CharacterOption | null>(initialOptions[1]);
	const [CharacterOption3, setUser3] = useState<CharacterOption | null>(initialOptions[2]);
	const [CharacterOption4, setUser4] = useState<CharacterOption | null>(initialOptions[3]);
	const [CharacterOption5, setUser5] = useState<CharacterOption | null>(initialOptions[4]);
	const [CharacterOption6, setUser6] = useState<CharacterOption | null>(initialOptions[5]);
	
	// setSelectedGroupsを更新する。呼び出し毎にCharacterOptionで選択中のgroupから引数のCharacterOption1件を除外したものを作成し、groupsから差し引いたリストを返す
	const outselected = (selectedGroups) => {
		//CharacterOptionで選択中のgroup全部を取得
		const allSelectedGroups = [CharacterOption1.group, CharacterOption2.group , CharacterOption3.group, CharacterOption4.group, CharacterOption5.group, CharacterOption6.group].flat();
		//allSelectedGroups からselectedGroupsのグループを除外
		const filteredGroups = allSelectedGroups.filter(group => group !== selectedGroups);
		//groupsからfilteredGroupsを除外したものを返す
		return groups.filter(group => !filteredGroups.includes(group));
	};
	
	// setSelectedGroups全体が選択していないgroupを取得
	const [selectedGroups1, setSelectedGroups1] = useState<string[]>(outselected(CharacterOption1?.group));
	const [selectedGroups2, setSelectedGroups2] = useState<string[]>(outselected(CharacterOption2?.group));
	const [selectedGroups3, setSelectedGroups3] = useState<string[]>(outselected(CharacterOption3?.group));
	const [selectedGroups4, setSelectedGroups4] = useState<string[]>(outselected(CharacterOption4?.group));
	const [selectedGroups5, setSelectedGroups5] = useState<string[]>(outselected(CharacterOption5?.group));
	const [selectedGroups6, setSelectedGroups6] = useState<string[]>(outselected(CharacterOption6?.group));
	
	
	const addTodo = (item: Todo, callBack?: () => void): void => {
		setTodoList(prevTodoList => [...prevTodoList, item]);
		localStorage.setItem("todoList", JSON.stringify([...todoList, item]));
		callBack && callBack();
	}

	const removeTodo = (item: Todo, callBack?: () => void): void => {
		setTodoList(prevTodoList => prevTodoList.filter(x => x !== item));
		localStorage.setItem("todoList", JSON.stringify(todoList.filter(x => x !== item)));
		callBack && callBack();
	}
	
	//クリックしたとき、ドロップダウンメニューを表示する
	const showDropDown = (e: React.MouseEvent<HTMLDivElement>): void => {
		const target = e.target as HTMLDivElement;
		const parent = target.parentElement;
		const dropdown = parent.querySelector('.dropdown');
		dropdown.classList.toggle('show');
	}

	useEffect(() => {
		localStorage.setItem("todoList", JSON.stringify(todoList));
	}, [todoList]);
	
	const getCharacter = (): { name: string }[] => {
		//画面上に表示されているキャラクターを取得する
		//キャラクターの名前を取得し、配列に追加する
		//配列を返す
		let characterData: { name: string }[] = [];
		const character = document.querySelectorAll('.character');
		for (let i = 0; i < character.length; i++) {
			const name = character[i].querySelector('.name')!.textContent!;
			characterData.push({ name: name });
		}
		
		return characterData;
	}
	
	const formatGroupLabel = (data: GroupedOption) => (
		<div className= "groupStyles">
			<span>{data.label}</span>
			<span className= "groupBadgeStyles">{data.options.length}</span>
		</div>
	);
	
	
	const otherSelect = (characterOption) => {
		const allSelectedGroups = [CharacterOption1.group, CharacterOption2.group , CharacterOption3.group, CharacterOption4.group, CharacterOption5.group, CharacterOption6.group].flat();
		const filteredGroups = allSelectedGroups.filter(group => group !== characterOption.group);
		return filteredGroups;
	}
	
	return (
		<div className="App">
			<form className="App-form">
				<div className="characterfield">
			
					<div className="character">
						<img src={CharacterOption1?.url} alt={CharacterOption1?.name} className="characterImg" />
						<UserSelect 
							setUser={(selectedOption) => {setUser1(selectedOption)}}
							selected={CharacterOption1} 
							otherselect = {otherSelect(CharacterOption1)}
						/>
					</div>
					<div className="character">
						<div className="selected">selected: {CharacterOption2?.name}</div>
						<UserSelect 
							setUser={(selectedOption) => {setUser2(selectedOption)}}
							selected={CharacterOption2} 
							otherselect = {otherSelect(CharacterOption2)}
							/>
					</div>
				</div>
				<div className="kemo">kemo</div>
				<div className="characterfield">
					<div className="accessoryfield">
						<div className="accessory">{CharacterOption1.speed}</div>
						<div className="accessory">A</div>
						<div className="accessory">A</div>
						<div className="accessory">A</div>
					</div>
					<div className="accessoryfield">
						<div className="accessory">C</div>
						<div className="accessory">C</div>
						<div className="accessory">C</div>
						<div className="accessory">C</div>
					</div>
					<div className="accessoryfield">
						<div className="accessory">A</div>
						<div className="accessory">A</div>
						<div className="accessory">A</div>
						<div className="accessory">A</div>
					</div>
					<div className="accessoryfield">
						<div className="accessory">C</div>
						<div className="accessory">C</div>
						<div className="accessory">C</div>
						<div className="accessory">C</div>
					</div>
				</div>
			</form>
			<form className="App-form">
				<div className="characterfield">
					<div className="character">
						<div className="selected">selected: {CharacterOption3?.name}</div>
						<UserSelect 
							setUser={(selectedOption) => {setUser3(selectedOption)}}
							selected={CharacterOption3} 
							otherselect = {otherSelect(CharacterOption3)}
						/>
					</div>
					<div className="character">
						<div className="selected">selected: {CharacterOption4?.name}</div>
						<UserSelect 
							setUser={(selectedOption) => {setUser4(selectedOption)}}
							selected={CharacterOption4} 
							otherselect = {otherSelect(CharacterOption4)}
						/>
					</div>
				</div>
				<div className="kemo">C</div>
				<div className="characterfield">
					<div className="accessoryfield">
						<div className="accessory">A</div>
						<div className="accessory">A</div>
						<div className="accessory">A</div>
						<div className="accessory">A</div>
					</div>
					<div className="accessoryfield">
						<div className="accessory">C</div>
						<div className="accessory">C</div>
						<div className="accessory">C</div>
						<div className="accessory">C</div>
					</div>
					<div className="accessoryfield">
						<div className="accessory">A</div>
						<div className="accessory">A</div>
						<div className="accessory">A</div>
						<div className="accessory">A</div>
					</div>
					<div className="accessoryfield">
						<div className="accessory">C</div>
						<div className="accessory">C</div>
						<div className="accessory">C</div>
						<div className="accessory">C</div>
					</div>
				</div>
			</form>
			<form className="App-form">
				<div className="characterfield">
					<div className="character">
						<div className="selected">selected: {CharacterOption5?.name}</div>
						<UserSelect 
							setUser={(selectedOption) => {setUser5(selectedOption)}}
							selected={CharacterOption5} 
							otherselect = {otherSelect(CharacterOption5)}
						/>
					</div>
					<div className="character">
						<div className="selected">selected: {CharacterOption6?.name}</div>
						<UserSelect 
							setUser={(selectedOption) => {setUser6(selectedOption)}}
							selected={CharacterOption6} 
							otherselect = {otherSelect(CharacterOption6)}
						/>
					</div>
				</div>
				<div className="kemo">C</div>
				<div className="characterfield">
					<div className="accessoryfield">
						<div className="accessory">A</div>
						<div className="accessory">A</div>
						<div className="accessory">A</div>
						<div className="accessory">A</div>
					</div>
					<div className="accessoryfield">
						<div className="accessory">C</div>
						<div className="accessory">C</div>
						<div className="accessory">C</div>
						<div className="accessory">C</div>
					</div>
					<div className="accessoryfield">
						<div className="accessory">A</div>
						<div className="accessory">A</div>
						<div className="accessory">A</div>
						<div className="accessory">A</div>
					</div>
					<div className="accessoryfield">
						<div className="accessory">C</div>
						<div className="accessory">C</div>
						<div className="accessory">C</div>
						<div className="accessory">C</div>
					</div>
				</div>
			</form>
			
		</div>
		
	);
}

export default App;
