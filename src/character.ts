export interface CharacterOption {
	id: number;
	name: string;
	group: string;
	speed?: number;
	url?: string;
}

export const characterOptions: readonly CharacterOption[] = [
	{id: 1 ,name: "カラス対魔獣スタンダード" , group: "カラス" ,speed:999, url: "https://github.com/reeee2/devsite_3.1/assets/107458100/ad3cb34f-8ee8-4958-8221-ae62372f274d" },
	{id: 2 ,name: "カラス仮想戦ライトフォーム" , group: "カラス" ,speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/c6bb8b7c-c523-4670-b10d-a5da3230608b" },
	{id: 3 ,name: "カラス殲滅型ウィッチ" , group: "カラス" ,speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/ae5f1e01-038a-46a0-a5c3-274df51e5b46" },
	{id: 4 ,name: "カラス浄化型カンナギ" , group: "カラス" ,speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/bfec8393-4dac-4bac-b3ba-0e1063370465" },
	{id: 5 ,name: "カラス暴虐型インフェルノ" , group: "カラス" ,speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/71361b5b-acee-47a5-93be-c3bd02485512" },
	{id: 6 ,name: "カラス調律型スチームアームズ" , group: "カラス" ,speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/0bce3edc-d1a1-4d5b-8d51-be7fa61bc0c1" },
	{id: 7 ,name: "カラス浄化型プリエステス" , group: "カラス" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/d836c214-730e-4285-8d58-56ce0a5aa3e3" },
	{id: 8 ,name: "カラス真夏型スウィムドレス" , group: "カラス" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/a7542e7e-6699-4fb4-9d49-b1a0e76ec365" },
	{id: 9 ,name: "カラス花鳥・対魔獣スタンダード" , group: "カラス" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/569b865a-12a6-4465-8538-056e39fa3b26" },
	{id: 10 ,name: "カラス童話型イヴルウルフ" , group: "カラス" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/d8e6a096-2d78-4fd0-8113-3beb62975334" },
	{id: 11 ,name: "カラス祭儀型セントホリデー" , group: "カラス" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/0d9f8583-2b84-4a47-9657-8e1f9deaa61c" },
	{id: 12 ,name: "カラス花鳥・浄化型プリエステス" , group: "カラス" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/1f5d1b3a-e977-4c26-bd71-cc1364039ac0" },
	{id: 13 ,name: "ハクチョウ対魔獣スタンダード" , group: "ハクチョウ" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/6364e228-f273-42f1-9ab1-d910b05d1c70" },
	{id: 14 ,name: "ハクチョウ仮想戦ライトフォーム" , group: "ハクチョウ" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/fefceba0-0102-48d8-8f05-ab437b95ae4b" },
	{id: 15 ,name: "ハクチョウ殲滅型ウィッチ" , group: "ハクチョウ" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/e298f561-400e-4d58-90bc-3804f6e84337" },
	{id: 16 ,name: "ハクチョウ浄化型カンナギ" , group: "ハクチョウ" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/3e0843b0-45b3-4e7f-a4de-265dd9c5225a" },
	{id: 17 ,name: "ハクチョウ暴虐型アビス" , group: "ハクチョウ" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/a66d6706-2e95-4efd-9265-e3e63c5433b2" },
	{id: 18 ,name: "ハクチョウ調律型スチームアームズ" , group: "ハクチョウ" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/d13118d4-6e74-4ab1-8a20-dee0af38dca3" },
	{id: 19 ,name: "ハクチョウ浄化型プリエステス" , group: "ハクチョウ" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/7a87ce84-c52f-4fe0-a51b-7d2bde03f316" },
	{id: 20 ,name: "ハクチョウ真夏型スウィムドレス" , group: "ハクチョウ" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/946c6728-007f-45f6-a553-f85e4ef2f092" },
	{id: 21 ,name: "ハクチョウ花鳥・対魔獣スタンダード" , group: "ハクチョウ" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/45ae0dd3-5127-4c2a-bb74-6c37fa0dba65" },
	{id: 22 ,name: "ハクチョウ童話型イヴルスネイク" , group: "ハクチョウ" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/1d53b53e-3972-47e2-a536-36325b7e01d3" },
	{id: 23 ,name: "ハクチョウ祭儀型セントホリデー" , group: "ハクチョウ" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/a8c08850-a2c4-47d4-95cb-5f93d898d6ca" },
	{id: 24 ,name: "ハクチョウ花鳥・浄化型プリエステス" , group: "ハクチョウ" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/0cfac54f-4fec-4f29-bfcd-56a684b5506d" },
	{id: 25 ,name: "スズメ対魔獣スタンダード" , group: "スズメ" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/cebe52b7-98ab-4ba0-98ba-d5f367c5b906" },
	{id: 26 ,name: "スズメ仮想戦ライトフォーム" , group: "スズメ" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/c92b09a8-49bc-4a28-a5bd-cf9e715b9cc5" },
	{id: 27 ,name: "スズメ殲滅型ウィッチ" , group: "スズメ" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/85012910-3543-4355-a4ef-79e7490d3001" },
	{id: 28 ,name: "スズメ浄化型カンナギ" , group: "スズメ" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/46471ee4-07ec-48eb-b071-2eb80e98577a" },
	{id: 29 ,name: "スズメ対魔女ダストストーム" , group: "スズメ" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/c217b73e-3bf6-45b2-b721-2c7e16c5b3a4" },
	{id: 30 ,name: "スズメ天文型スターラヴァーズ" , group: "スズメ" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/e5db1f31-8571-4a92-8ad4-fa2e6710d991" },
	{id: 31 ,name: "スズメ祭儀型トリックナイト" , group: "スズメ" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/2d9b8234-7ad0-4a6e-b9df-4ceb4d20b745" },
	{id: 32 ,name: "スズメ暴虐型ディザスター" , group: "スズメ" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/1aebcc37-ac7a-40b9-aa46-8d7970357526" },
	{id: 33 ,name: "スズメ風月・対魔獣スタンダード" , group: "スズメ" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/fdc01255-1611-4241-b3a6-6ed3be8e844b" },
	{id: 34 ,name: "スズメ祭儀型ショコラモード" , group: "スズメ" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/44711251-1917-4a0f-9dab-df069d363a77" },
	{id: 35 ,name: "エナガ対魔獣スタンダード" , group: "エナガ" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/6460a8ab-5a75-4668-8bd9-d22a7025fdcc" },
	{id: 36 ,name: "エナガ仮想戦ライトフォーム" , group: "エナガ" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/37e5d5aa-7512-452f-9fc6-a22cf4900fc8" },
	{id: 37 ,name: "エナガ殲滅型ウィッチ" , group: "エナガ" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/842831cc-73b8-4f7f-b03b-fd30b4d7b9b8" },
	{id: 38 ,name: "エナガ浄化型カンナギ" , group: "エナガ" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/2882a2d3-6488-4010-9a9e-1314166cabf6" },
	{id: 39 ,name: "エナガ対魔女ダストストーム" , group: "エナガ" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/85d119a6-752f-4cbb-a4e7-c585d8936f08" },
	{id: 40 ,name: "エナガ天文型スターラヴァーズ" , group: "エナガ" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/c3a61072-53f1-4d46-af7f-13a4a99ed452" },
	{id: 41 ,name: "エナガ暴虐型ジャッジメント" , group: "エナガ" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/7a1324dc-d84d-4fcb-b2ca-823883b10086" },
	{id: 42 ,name: "エナガ祭儀型トリックナイト" , group: "エナガ" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/69503896-2219-4d47-9993-e246869f56ba" },
	{id: 43 ,name: "エナガ花鳥・対魔獣スタンダード" , group: "エナガ" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/1518be6d-bad3-428b-9da2-45a3e91387e1" },
	{id: 44 ,name: "エナガ祭儀型ショコラモード" , group: "エナガ" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/44711251-1917-4a0f-9dab-df069d363a77" },
	{id: 45 ,name: "フクロウ対魔獣スタンダード" , group: "フクロウ" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/851b2cd3-18ff-487e-9975-2c9a9067b923" },
	{id: 46 ,name: "フクロウ仮想戦ライトフォーム" , group: "フクロウ" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/e9816820-6b1d-458c-843a-b592719dae9e" },
	{id: 47 ,name: "フクロウ浄化型プリエステス" , group: "フクロウ" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/34196e81-ea87-4cca-ab2a-d6054aff596c" },
	{id: 48 ,name: "フクロウ殲滅型ウィッチ" , group: "フクロウ" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/ecd656cd-745e-4d05-8f16-07263051074d" },
	{id: 49 ,name: "フクロウ調律型スチームアームズ" , group: "フクロウ" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/c121952b-6394-4d6d-83a2-87c1ebfe79ca" },
	{id: 50 ,name: "フクロウ劇場型プロトリサーチャー" , group: "フクロウ" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/4709a3cd-82c6-4b25-b336-656ca1379854" },
	{id: 51 ,name: "フクロウ真夏型スウィムドレス" , group: "フクロウ" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/0661f819-1912-4690-a2d3-b63bc39a9249" },
	{id: 52 ,name: "フクロウ対魔女ダストストーム" , group: "フクロウ" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/512bf841-0552-4efe-9a12-1d0231cd0d21" },
	{id: 53 ,name: "フクロウ風月・対魔獣スタンダード" , group: "フクロウ" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/9951dbc4-3719-4f0f-ad5f-4742c5655211" },
	{id: 54 ,name: "フクロウ新春型コトブキハレギ" , group: "フクロウ" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/df9287d7-5e60-45a1-ac81-86be1bb3e844" },
	{id: 55 ,name: "フラミンゴ対魔獣スタンダード" , group: "フラミンゴ" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/06737b9f-7653-4f47-93b8-8ce8691bb8f4" },
	{id: 56 ,name: "フラミンゴ仮想戦ライトフォーム" , group: "フラミンゴ" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/ea4c1b73-18b2-48b6-813c-dff5bec5f930" },
	{id: 57 ,name: "フラミンゴ浄化型プリエステス" , group: "フラミンゴ" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/6c5db24b-304b-437b-ad75-85fed9c108ba" },
	{id: 58 ,name: "フラミンゴ殲滅型ウィッチ" , group: "フラミンゴ" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/81161499-6aa6-429f-81ec-b734bdc99153" },
	{id: 59 ,name: "フラミンゴ調律型スチームアームズ" , group: "フラミンゴ" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/b1a65c4f-76e7-41a7-b389-355e4b5b80ab" },
	{id: 60 ,name: "フラミンゴ劇場型プロトリサーチャー" , group: "フラミンゴ" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/4794cf3a-ad55-46df-90bf-af0a173364f9" },
	{id: 61 ,name: "フラミンゴ真夏型スウィムドレス" , group: "フラミンゴ" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/6216157d-c1c5-42b1-9102-c0beb9fb045a" },
	{id: 62 ,name: "フラミンゴ花鳥・対魔獣スタンダード" , group: "フラミンゴ" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/5fad40cc-fa07-4ab2-b7ed-b10e3425b5f3" },
	{id: 63 ,name: "フラミンゴ暴虐型アークエンジェル" , group: "フラミンゴ" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/407afe63-5102-4a5b-9824-0d473a4a00ef" },
	{id: 64 ,name: "フラミンゴ新春型コトブキハレギ" , group: "フラミンゴ" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/747d0e92-80b7-4ee9-b0c1-5fee57804022" },
	{id: 65 ,name: "ツル対魔獣スタンダード" , group: "ツル" , speed:999,  url: " https://github.com/reeee2/devsite_3.1/assets/107458100/730a8efd-70d6-4ece-b969-a53d07b18b06" },
	{id: 66 ,name: "ツル仮想戦ライトフォーム" , group: "ツル" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/640934c3-3b1d-48c5-abf9-5432306e3950" },
	{id: 67 ,name: "ツル浄化型カンナギ" , group: "ツル" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/b3229b86-4bc8-44f7-9549-6cd12b75b529" },
	{id: 68 ,name: "ツル浄化型プリエステス" , group: "ツル" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/42b59bb5-7a3f-4ff5-88dc-a996249f7c9b" },
	{id: 69 ,name: "ツル殲滅型アンデッド" , group: "ツル" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/c1e140cf-e2a9-4530-9650-b3d1890e04b3" },
	{id: 70 ,name: "ツル天文型スターラヴァーズ" , group: "ツル" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/ea19bfa4-6e10-45a2-a967-0ea2a6c657a4" },
	{id: 71 ,name: "ツル対魔女ダストストーム" , group: "ツル" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/364c4f3b-282c-4f73-9682-6c63531c5ec0" },
	{id: 72 ,name: "ツル納涼型ツキミユカタ" , group: "ツル" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/9f98b9ff-0efa-4683-bec3-ca1b6ab3fb8b" },
	{id: 73 ,name: "ツル祭儀型トリックナイト" , group: "ツル" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/7f2fa16c-f2f7-42be-8bca-b8a17ca631eb" },
	{id: 74 ,name: "ツル風月・対魔獣スタンダード" , group: "ツル" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/ba31f97c-4014-4e01-80d0-a83e98608d43" },
	{id: 75 ,name: "ハチドリ対魔獣スタンダード" , group: "ハチドリ" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/ecd28a70-6044-4e7f-9e90-7b5abfae51f1" },
	{id: 76 ,name: "ハチドリ仮想戦ライトフォーム" , group: "ハチドリ" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/e775ce50-9fab-4901-8dbb-f82a03667e0e" },
	{id: 77 ,name: "ハチドリ浄化型カンナギ" , group: "ハチドリ" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/fc6a2198-250e-4263-83be-17388261e76e" },
	{id: 78 ,name: "ハチドリ浄化型プリエステス" , group: "ハチドリ" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/5f87bf45-2c06-4f50-88a4-8121a55d5280" },
	{id: 79 ,name: "ハチドリ殲滅型アンデッド" , group: "ハチドリ" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/e968c133-2a07-4b06-b86b-bf1cd3f0d3bf" },
	{id: 80 ,name: "ハチドリ天文型スターラヴァーズ" , group: "ハチドリ" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/2bed8243-2ac9-48b4-8f25-df19952ed169" },
	{id: 81 ,name: "ハチドリ対魔女ダストストーム" , group: "ハチドリ" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/1de25ccb-341e-4660-897b-a7c462cd0c87" },
	{id: 82 ,name: "ハチドリ納涼型ツキミユカタ" , group: "ハチドリ" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/69e61ce8-f9b4-47d8-b219-9266ed726258" },
	{id: 83 ,name: "ハチドリ祭儀型トリックナイト" , group: "ハチドリ" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/eccf9ade-3f8a-4557-997d-9b467f25af5f" },
	{id: 84 ,name: "ハチドリ花鳥・対魔獣スタンダード" , group: "ハチドリ" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/8c6786a3-62b2-4ac9-83e3-d66b684ab71f" },
	{id: 85 ,name: "ツバメ対魔獣スタンダード" , group: "ツバメ" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/986b855b-a8e4-4f60-9242-39a6c0ced926" },
	{id: 86 ,name: "ツバメ仮想戦ライトフォーム" , group: "ツバメ" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/a98903d7-4f8f-4fd1-8795-8495a58d0888" },
	{id: 87 ,name: "ツバメ浄化型プリエステス" , group: "ツバメ" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/d4328edc-b979-485c-a21f-6920ce7ec2c6" },
	{id: 88 ,name: "ツバメ殲滅型ウィッチ" , group: "ツバメ" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/02b6d7cd-4f4a-4afa-b4ae-ff792b9713ba" },
	{id: 89 ,name: "ツバメ浄化型カンナギ" , group: "ツバメ" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/67b04646-e17e-49d2-836c-52d33e5d47f8" },
	{id: 90 ,name: "ツバメ殲滅型アンデッド" , group: "ツバメ" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/e434a2d5-514e-4b56-a9d7-9c2b8497fe99" },
	{id: 91 ,name: "ツバメ納涼型ツキミユカタ" , group: "ツバメ" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/7bae89d1-365e-4868-ac82-ec5629f027f5" },
	{id: 92 ,name: "ツバメ風月・対魔獣スタンダード" , group: "ツバメ" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/e6741113-f1d4-4c6d-9fd4-2d789feecb82" },
	{id: 93 ,name: "ツバメ祭儀型セントホリデー" , group: "ツバメ" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/ece83a83-38eb-4170-901c-6db40bc0cc50" },
	{id: 94 ,name: "ツバメ対魔女ダストストーム" , group: "ツバメ" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/44711251-1917-4a0f-9dab-df069d363a77" },
	{id: 95 ,name: "モズ対魔獣スタンダード" , group: "モズ" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/d3452875-20a1-46e5-b5dd-5eab310eb74c" },
	{id: 96 ,name: "モズ仮想戦ライトフォーム" , group: "モズ" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/0ee6e2d1-8d4d-46da-84f0-798d0cf2b09e" },
	{id: 97 ,name: "モズ浄化型プリエステス" , group: "モズ" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/978975de-c339-40b7-af55-3de09e6bd5e6" },
	{id: 98 ,name: "モズ殲滅型アンデッド" , group: "モズ" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/0366f588-21a0-4f25-bb1a-fad1c92c0ad1" },
	{id: 99 ,name: "モズ納涼型ツキミユカタ" , group: "モズ" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/3307a8d1-9d1b-4d56-b951-5bd72e1edf46" },
	{id: 100 ,name: "モズ風月・対魔獣スタンダード" , group: "モズ" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/51ed6428-3d9d-4320-beb1-fcda64b11fba" },
	{id: 101 ,name: "モズ祭儀型セントホリデー" , group: "モズ" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/dbfc9e76-ee2d-46c7-97d3-9c2f5b86659c" },
	{id: 102 ,name: "モズ対魔女ダストストーム" , group: "モズ" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/3be3696c-807c-4dd6-a3f1-416627694123" },
	{id: 103 ,name: "カモメ対魔獣スタンダード" , group: "カモメ" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/a6d424e4-4e72-43e6-a912-a2175bb1a701" },
	{id: 104 ,name: "カモメ仮想戦ライトフォーム" , group: "カモメ" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/6e778f30-bae1-4a5c-810f-0ade1bc77e8b" },
	{id: 105 ,name: "アリス童話型スタンダード" , group: "コラボ" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/b3de2dc8-1e07-4f06-a25c-791e6566befc" },
	{id: 106 ,name: "アリス童話型イヴルレイヴン" , group: "コラボ" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/2fab13fb-5157-44ac-bc6f-c5dd1192333c" },
	{id: 107 ,name: "アリス童話型オルタナティブ" , group: "コラボ" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/5f9c18d4-6ace-41b4-9d24-425d94864ff0" },
	{id: 108 ,name: "スノウホワイト童話型スタンダード" , group: "コラボ" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/2f1c8527-c2ed-40fd-8441-b2f9d1255eac" },
	{id: 109 ,name: "スノウホワイト童話型イヴルスコーピオン" , group: "コラボ" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/28b6f68b-0c6c-4232-a300-161dd822a26b" },
	{id: 110 ,name: "スノウホワイト童話型オルタナティブ" , group: "コラボ" , speed:999,  url: "https://github.com/reeee2/devsite_3.1/assets/107458100/eefcb556-f843-4e19-aece-ceea4fad7b9f" }
];

// group名を一覧取得
export const groups = [...new Set(characterOptions.map(option => option.group))];

export interface GroupedOption {
  label: string;
  options: CharacterOption[];
}

export const groupedOptions: readonly GroupedOption[] = [
	// groupが一致するものをまとめる
	...groups.map(group => ({
		label: group,
		options: characterOptions.filter(option => option.group === group)
	}))
	
];