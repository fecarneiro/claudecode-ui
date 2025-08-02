"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = __importStar(require("vscode"));
/**
 * Extension activation function - called when extension is activated
 */
function activate(context) {
    console.log('Claude Code Chat extension is being activated...');
    const commands = [];
    const errors = [];
    try {
        // Register the main command to open Claude Chat
        const openChatCommand = vscode.commands.registerCommand('claude-code-chat.openChat', handleOpenChat);
        // Register command to show extension info
        const showInfoCommand = vscode.commands.registerCommand('claude-code-chat.showInfo', handleShowInfo);
        // Add commands to subscriptions for proper cleanup
        context.subscriptions.push(openChatCommand);
        context.subscriptions.push(showInfoCommand);
        commands.push('claude-code-chat.openChat');
        commands.push('claude-code-chat.showInfo');
        console.log('Claude Code Chat extension activated successfully');
        return {
            activated: true,
            commands: commands
        };
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        errors.push(errorMessage);
        console.error('Failed to activate Claude Code Chat extension:', errorMessage);
        return {
            activated: false,
            commands: [],
            errors: errors
        };
    }
}
exports.activate = activate;
/**
 * Handle the "Open Chat" command
 */
async function handleOpenChat() {
    try {
        // For now, just show a message - webview will be implemented in next cycle
        const message = 'Claude Code Chat will open here! (Webview coming in next phase)';
        vscode.window.showInformationMessage(message);
        console.log('Open Chat command executed successfully');
        return {
            success: true,
            message: 'Chat command executed'
        };
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        console.error('Failed to open chat:', errorMessage);
        vscode.window.showErrorMessage(`Failed to open Claude Chat: ${errorMessage}`);
        return {
            success: false,
            error: errorMessage
        };
    }
}
/**
 * Handle the "Show Info" command
 */
async function handleShowInfo() {
    try {
        const message = 'Claude Code Chat Extension v1.0.0 - Modern chat interface for Claude Code CLI';
        vscode.window.showInformationMessage(message);
        return {
            success: true,
            message: 'Info displayed'
        };
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        console.error('Failed to show info:', errorMessage);
        return {
            success: false,
            error: errorMessage
        };
    }
}
/**
 * Extension deactivation function - called when extension is deactivated
 */
function deactivate() {
    console.log('Claude Code Chat extension is being deactivated...');
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map