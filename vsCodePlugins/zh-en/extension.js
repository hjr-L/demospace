// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");

const { v4 } = require("uuid");

const CryptoJS = require("crypto-js");
const baseURL = "https://openapi.youdao.com/api";

const Axios = require("axios");
const axios = Axios.create();
const config = vscode.workspace.getConfiguration("transformPlugin");
const appKey = config.get("appKey");
const secretKey = config.get("secretKey");

async function transform(str, onlyOne = false) {
  try {
    const from = includChinese(str) ? "zh-CHS" : "en";
    const to = includChinese(str) ? "en" : "zh-CHS";
    let input = str;
    const length = str.length;
    if (length > 20) {
      input =
        str.substring(0, 10) + length + str.substring(length - 10, length);
    }
    const salt = v4();
    const curtime = Math.round(new Date().getTime() / 1000);
    const s = appKey + input + salt + curtime + secretKey;
    const sign = CryptoJS.SHA256(s).toString(CryptoJS.enc.Hex);

    const data = {
      q: str,
      from,
      to,
      appKey,
      salt,
      sign, //sha256(应用ID+input+salt+curtime+应用密钥)
      signType: "v3",
      curtime, //时间戳，到秒
      // domain: 'computers' //领域化翻译
    };
    const url =
      baseURL +
      "?" +
      Object.keys(data)
        .map((key) => `${key}=${data[key]}`)
        .join("&");
    let result = "";
    const res = await axios.get(url);

    console.log(res.data);

    if (res.data && res.data.errorCode == 0) {
      const value = res.data.translation;
      if (onlyOne || from == "en") {
        result = value[0];
      } else {
        result = value.join(",");
      }
    }else{
		throw new Error(res.data);
	}
    return result;
  } catch (error) {
    console.log(error);
    return "";
  }
}

function includChinese(str) {
  const reg = new RegExp("[\\u4E00-\\u9FFF]+", "g");
  return reg.test(str);
}

function activate(context) {
  const newShowTranslate = vscode.commands.registerCommand(
    "newShowTranslate",
    async () => {
      //翻译显示在status bar
      const editor = vscode.window.activeTextEditor;
      if (editor && !editor.selection.isEmpty) {
        // 获取选中的范围
        const selection = editor.selection;
        // 获取选中的文本
        const selectedText = editor.document.getText(selection);
        // 输出选中的文本
        const output = await transform(selectedText);
        vscode.window.setStatusBarMessage(output, 2500);
      }
    }
  );

  const newHumpReplace = vscode.commands.registerCommand(
    "newHumpReplace",
    async () => {
      // 驼峰翻译 hump
      const editor = vscode.window.activeTextEditor;
      if (editor && !editor.selection.isEmpty) {
        // 获取选中的范围
        const selection = editor.selection;
        // 获取选中的文本
        const selectedText = editor.document.getText(selection);
        // 输出选中的文本
        let output = await transform(selectedText, true);
        output = output.substring(0,1).toLocaleLowerCase() + output.substring(1);
        output = output
          .replace(/\s\w/g, (th) => th.toUpperCase())
          .replace(/\s/g, "");
        editor.edit((builder) => {
          builder.replace(selection, output);
        });
      }
    }
  );

  const newTransform = vscode.commands.registerCommand(
    "newTransform",
    async () => {
      // 中英文互翻，显示在edit
      const editor = vscode.window.activeTextEditor;
      if (editor && !editor.selection.isEmpty) {
        // 获取选中的范围
        const selection = editor.selection;
        // 获取选中的文本
        const selectedText = editor.document.getText(selection);
        // 输出选中的文本
        let output = await transform(selectedText, true);
        editor.edit((builder) => {
          builder.replace(selection, output);
        });
      }
    }
  );

  context.subscriptions.push(newShowTranslate);
  context.subscriptions.push(newHumpReplace);
  context.subscriptions.push(newTransform);
}

// This method is called when your extension is deactivated
function deactivate() {
  console.log("deactivate");
}

module.exports = {
  activate,
  deactivate,
};
