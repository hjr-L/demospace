// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */

function transform(str){
	const lang = includChinese(str) ? 'zh' : 'en';
	return `transform ${str} ${lang}`
}

function includChinese(str){
	const reg = new RegExp("[\\u4E00-\\u9FFF]+", "g");
	return reg.test(str);
}

function activate(context) {
	const newShowTranslate = vscode.commands.registerCommand('newShowTranslate', ()=>{
		//翻译显示在status bar
		const editor = vscode.window.activeTextEditor;
		if(editor && !editor.selection.isEmpty){
			 // 获取选中的范围
			 const selection = editor.selection;
			 // 获取选中的文本
			 const selectedText = editor.document.getText(selection);
			 // 输出选中的文本
			 const output = transform(selectedText);
			 vscode.window.setStatusBarMessage(output, 2500);
		}
	});

	const newHumpReplace = vscode.commands.registerCommand('newHumpReplace', ()=>{
		// 驼峰翻译 hump
		const editor = vscode.window.activeTextEditor;
		if(editor && !editor.selection.isEmpty){
			 // 获取选中的范围
			 const selection = editor.selection;
			 // 获取选中的文本
			 const selectedText = editor.document.getText(selection);
			 // 输出选中的文本
			 let output = transform(selectedText);
			 output = output.replace(/\s\w/g,(th)=> th.toUpperCase()).replace(/\s/g,'');
			 editor.edit(builder=>{
				builder.replace(selection,output);
			 })
		}
	});

	const newTransform = vscode.commands.registerCommand('newTransform', () => {
		// 中英文互翻，显示在edit
		const editor = vscode.window.activeTextEditor;
		if(editor && !editor.selection.isEmpty){
			 // 获取选中的范围
			 const selection = editor.selection;
			 // 获取选中的文本
			 const selectedText = editor.document.getText(selection);
			 // 输出选中的文本
			 let output = transform(selectedText);
			 editor.edit(builder => {
				builder.replace(selection, output);
			 })
		}
	})

	context.subscriptions.push(newShowTranslate);
	context.subscriptions.push(newHumpReplace);
	context.subscriptions.push(newTransform);

}

// This method is called when your extension is deactivated
function deactivate() {
	console.log('deactivate');
}

module.exports = {
	activate,
	deactivate
}
