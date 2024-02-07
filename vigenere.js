function encryption(){
	document.write('a')
	document.write('<a href="https://soutanic.github.io/Vigenere/">◀戻る</a>')
	document.write('<button onclick="encryption_con()">暗号化</button>')
	document.write('<p>平文を入力</p>');
	document.write('<input type="text" size="1" id="user_input_encryption"></input>');
	document.write('<br>');
	document.write('<p>鍵を入力</p>');
	document.write('<input type="text" size="1" id="key_encryption"></input>');
	document.write('<br>');
}
function composite(){
	document.write('<a href="https://soutanic.github.io/Vigenere/">◀戻る</a>')
	document.write('<button onclick="composite_con()">複合化</button>');
	document.write('<p>暗号文を入力</p>');
	document.write('<input type="text" size="1" id="user_input_composite"></input>');
	document.write('<br>');
	document.write('<p>鍵を入力</p>');
	document.write('<input type="text" size="1" id="key_composite"></input>');
	document.write('<br>');
}
function encryption_con(){
	var alphabet = "abcdefghijklmnopqrstuvwxyz<>";
	var user_input_encryption = document.getElementById('user_input_encryption').value;
	var key_encryption = document.getElementById('key_encryption').value;
	var result='';
	//変換ここから
	for (var i = 0; i<user_input_encryption.length; i++){
		var process = user_input_encryption[i];
		var user_index = alphabet.indexOf(process)+1;
		if (key_encryption.length-1<i){
			var key_encryption_index = alphabet.indexOf(key_encryption[i%key_encryption.length])+1;
		}else{
			key_encryption_index = alphabet.indexOf(key_encryption[i])+1;
		}
		user_index+=key_encryption_index;
		if (alphabet.length<user_index){
			result += alphabet[user_index%alphabet.length-1];
		}else{
			result += alphabet[user_index-1];
		}
	//ここまで
	}
	//出力
	document.write('<h2>暗号文：</h2>')
	document.write(result)
}
function composite_con(){
	var alphabet = "abcdefghijklmnopqrstuvwxyz<>";
	var user_input_composite = document.getElementById('user_input_composite').value;
	var key_composite = document.getElementById('key_composite').value;
	var result = '';
	for (var i = 0; i<user_input_composite.length; i++){
		var process=user_input_composite[i];
		var user_index = alphabet.indexOf(process)+1
		if (key_composite.length-1<i){
			var key_composite_index = alphabet.indexOf(key_composite[i%key_composite.length])+1
		}else{
			key_composite_index = alphabet.indexOf(key_composite[i])+1
		}
		user_index-=key_composite_index
		if (user_index<=0){
			result += alphabet[alphabet.length+user_index-1]
		}else{
			result += alphabet[user_index-1]
		}
	}
	document.write('<h2>平文：</h2>')
	document.write(result)
}
