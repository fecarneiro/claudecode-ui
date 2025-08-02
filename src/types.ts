import * as vscode from 'vscode';

/**
 * Extension configuration and manifest interfaces
 */
export interface ExtensionConfig {
  name: string;
  displayName: string;
  version: string;
  commands: ExtensionCommand[];
  activationEvents: string[];
}

/**
 * Command definition for VS Code extension
 */
export interface ExtensionCommand {
  command: string;
  title: string;
  category: string;
  when?: string;
}

/**
 * Extension context and state management
 */
export interface ExtensionContext {
  subscriptions: vscode.Disposable[];
  globalState: vscode.Memento;
  workspaceState: vscode.Memento;
  extensionPath: string;
}

/**
 * Chat command execution result
 */
export interface CommandResult {
  success: boolean;
  message?: string;
  error?: string;
}

/**
 * Extension activation result
 */
export interface ActivationResult {
  activated: boolean;
  commands: string[];
  errors?: string[];
}