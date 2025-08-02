import * as vscode from 'vscode';
import { ExtensionCommand, CommandResult, ActivationResult } from './types';

/**
 * Extension activation function - called when extension is activated
 */
export function activate(context: vscode.ExtensionContext): ActivationResult {
    console.log('Claude Code Chat extension is being activated...');

    const commands: string[] = [];
    const errors: string[] = [];

    try {
        // Register the main command to open Claude Chat
        const openChatCommand = vscode.commands.registerCommand(
            'claude-code-chat.openChat',
            handleOpenChat
        );

        // Register command to show extension info
        const showInfoCommand = vscode.commands.registerCommand(
            'claude-code-chat.showInfo',
            handleShowInfo
        );

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

    } catch (error) {
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

/**
 * Handle the "Open Chat" command
 */
async function handleOpenChat(): Promise<CommandResult> {
    try {
        // For now, just show a message - webview will be implemented in next cycle
        const message = 'Claude Code Chat will open here! (Webview coming in next phase)';
        
        vscode.window.showInformationMessage(message);
        
        console.log('Open Chat command executed successfully');
        
        return {
            success: true,
            message: 'Chat command executed'
        };

    } catch (error) {
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
async function handleShowInfo(): Promise<CommandResult> {
    try {
        const message = 'Claude Code Chat Extension v1.0.0 - Modern chat interface for Claude Code CLI';
        
        vscode.window.showInformationMessage(message);
        
        return {
            success: true,
            message: 'Info displayed'
        };

    } catch (error) {
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
export function deactivate(): void {
    console.log('Claude Code Chat extension is being deactivated...');
}