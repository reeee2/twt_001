import React from "react";
import Select from "react-select";

const MyDropDown = (props) => {
	//propにて渡された配列をドロップダウンメニューとして表示する
	//配列を作成し、配列内にoptionsオブジェクトを追加する
	//optionsオブジェクトは、valueとlabelを持つ
	//valueは選択された値、labelは表示される値
	let options = [];
	for (let i = 0; i < props.characterData.length; i++) {
		options.push({ value: props.characterData[i].value, label: props.characterData[i].label });
	}
	
	return (
		<Select
			options={options}
		/>
		
	);
};

export default MyDropDown;



