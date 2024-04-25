import React, { useState, useEffect } from 'react';
import './App.css';
import { columns, data } from "./tableData";
import ToDoListItem from "./components/ToDoListItem.js";
import Character from "./components/character.js";
import MyDropDown from "./components/Dropdown.js";
import { createContext, useContext } from 'react';
import { characterData } from './images.js';
import Select from "react-select";


function App() {
	const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem("todoList")) || []);

	const addTodo = (item, callBack) => {
		setTodoList(prevTodoList => [...prevTodoList, item]);
		localStorage.setItem("todoList", JSON.stringify([...todoList, item]));
		callBack && callBack();
	}

	const removeTodo = (item, callBack) => {
		setTodoList(prevTodoList => prevTodoList.filter(x => x !== item));
		localStorage.setItem("todoList", JSON.stringify(todoList.filter(x => x !== item)));
		callBack && callBack();
	}
	
	//クリックしたとき、ドロップダウンメニューを表示する
	const showDropDown = (e) => {
		const target = e.target;
		const parent = target.parentElement;
		const dropdown = parent.querySelector('.dropdown');
		dropdown.classList.toggle('show');
	}

	useEffect(() => {
			localStorage.setItem("todoList", JSON.stringify(todoList));
		}, [todoList]);
	
	const chemists = characterData.filter(character =>
		character.group === 'カラス'
	);
	
	const getCharacter = (e) => {
		//画面上に表示されているキャラクターを取得する
		//キャラクターの名前を取得し、配列に追加する
		//配列を返す
		let characterData = [];
		const character = document.querySelectorAll('.character');
		for (let i = 0; i < character.length; i++) {
			const name = character[i].querySelector('.name').textContent;
			characterData.push({ name: name });
		}
		
		return characterData
	}
	
	
	

	return (
		
		<div className="App">
			<form className="App-form">
				<div class="characterfield">
					<Character 
						name = "A111"
						title = "a222"
						default = "1"
						SelectCharacter = {() => getCharacter()}
					/>
					<Character />
				</div>
				<div class="kemo">kemo</div>
				<div class="characterfield">
					<div class="accessoryfield">
						<div class="accessory">C</div>
						<div class="accessory">C</div>
						<div class="accessory">C</div>
						<div class="accessory">C</div>
					</div>
					<div class="accessoryfield">
						<div class="accessory">C</div>
						<div class="accessory">C</div>
						<div class="accessory">C</div>
						<div class="accessory">C</div>
					</div>
				</div>
			</form>
			<form className="App-form">
				<div class="characterfield">
					<Character />
					<Character />
				</div>
				<div class="kemo">C</div>
				<div class="characterfield">
					<div class="accessoryfield">
						<div class="accessory">C</div>
						<div class="accessory">C</div>
						<div class="accessory">C</div>
						<div class="accessory">C</div>
					</div>
					<div class="accessoryfield">
						<div class="accessory">C</div>
						<div class="accessory">C</div>
						<div class="accessory">C</div>
						<div class="accessory">C</div>
					</div>
				</div>
			</form>
			<form className="App-form">
				<div class="characterfield">
					<Character 
					name = "A111"
					title = "a222"
					/>
					<Character 
					name = "A112"
					/>
				</div>
				<div class="kemo">C</div>
				<div class="characterfield">
					<div class="accessoryfield">
						<div class="accessory">C</div>
						<div class="accessory">C</div>
						<div class="accessory">C</div>
						<div class="accessory">C</div>
					</div>
					<div class="accessoryfield">
						<div class="accessory">C</div>
						<div class="accessory">C</div>
						<div class="accessory">C</div>
						<div class="accessory">C</div>
					</div>
				</div>
			</form>
			<form className="App-form"
				onSubmit={e => {
					e.preventDefault();
					

					const titleElement = e.target.elements["title"];
					const descriptionElement = e.target.elements["description"];

					addTodo(
						{
							title: titleElement.value,
							description: descriptionElement.value
						},
						() => {
							titleElement.value = "";
							descriptionElement.value = "";
						}
					)
				}}
			>
				<div>
					<input id="title" placeholder="title" />
					<textarea id="description" placeholder="description" />
				</div>
				<div>
					<button type="submit">
						登録
					</button>
				</div>
			</form>
			<div>
				{todoList.map(todo => (
					<ToDoListItem
						key={todo.title}
						title={todo.title}
						description={todo.description}
						onClick={() => removeTodo(todo)}
					/>
				))}
			</div>
		</div>
	);
}

export default App;
