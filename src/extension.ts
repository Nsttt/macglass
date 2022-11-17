// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  if (process.platform === "win32") {
    vscode.window.showErrorMessage(
      "This extension is currently not supported on Windows.",
    );
  }

  const jsonStyle = {
    "customizeUI.stylesheet": {
      "body.inline-title-bar .monaco-workbench:not(.fullscreen) .sidebar .composite.title":
        "background: rgba(0, 0, 0, 0) !important;",
      ".statusbar-item.left.has-background-color.first-visible-item":
        "background-color: rgba(37, 37, 38, 0) !important;",
      ".monaco-workbench .part > .title":
        "background: rgba(0, 0, 0, 0) !important;",
      "body.inline-title-bar:not(.activity-bar-at-bottom) .monaco-workbench:not(.fullscreen) .activitybar:not(.right) .activity-bar-placeholder":
        "background: rgba(0, 0, 0, 0) !important;",
      ".monaco-list .monaco-list-row": "border-radius: 6px !important;",
      ".part.statusbar": "background-color: rgba(37, 37, 38, 0) !important;",
      ".monaco-workbench .part.panel":
        "border-radius: 6px !important; margin-top: 6px !important; height: calc(100% - 6px) !important; width: calc(100% - 6px) !important; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24) !important;",
      "#workbench.parts.editor > .content":
        "border-bottom-left-radius: 6px !important;",
      ".monaco-workbench .part.panel.bottom .composite.title":
        "border-top-color: rgba(128, 128, 128, 0) !important;",
      ".parts.editor > div.content > div.grid-view-container > div > div > div > div.split-view-container > div":
        "width: calc(100% - 6px) !important;",
      ".part.editor.has-watermark":
        "height: calc(100% - 6px) !important; margin-top: 6px !important; border-radius: 6px !important; width: calc(100% - 6px) !important; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24) !important;",
    },
  };

  const styleString = Object.entries(jsonStyle)
    .map(([k, v]) => `${k}:${v}`)
    .join(";");

  context.subscriptions.push(
    vscode.commands.registerCommand("macglass.start", () => {
      const style = vscode.window.createWebviewPanel(
        "style",
        "Style",
        vscode.ViewColumn.One,
        {
          enableScripts: true,
        },
      );
      style.webview.html = `
    <html>
      <head>
        <style>
        ${styleString}
        </style>
      </head>
    </html>
  `;
    }),
  );
}
