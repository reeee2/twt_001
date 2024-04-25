import './component.css';
import { characterData } from '../images.js';
import MyDropDown from "./Dropdown.js";

//画面表示用新規関数selectCharacterDataにcharacterDataのデータを型変換し格納
const selectCharacterData = characterData.map((data) => {
	return {
		value: data.name,
		label: data.name
	}
});

//selectCharacterData[].valueからcharacter[].nameに一致するデータを削除したものを返す
const selectCharacter = (character) => {
	return selectCharacterData.filter((data) => {
		return data.value !== character;
	});
}

function Character(props){
	const outputCharacter =  selectCharacter(props.selectCharacter);
  //return <img src={`${process.env.PUBLIC_URL}/logo192.png`} alt="Logo" />;
  
	return (
		<div className="character">
			<img src={`${props.img}`} alt="Logo" />
			{props.title}
			<MyDropDown 
				characterData= {outputCharacter}
			/>
		</div>
	);
}

export default Character;
