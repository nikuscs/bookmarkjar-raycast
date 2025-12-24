/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** API Key - Create at bookmarkjar.com/dashboard/user/profile */
  "apiKey": string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `add-bookmark-clipboard` command */
  export type AddBookmarkClipboard = ExtensionPreferences & {}
  /** Preferences accessible in the `add-bookmark` command */
  export type AddBookmark = ExtensionPreferences & {}
  /** Preferences accessible in the `create-api-key` command */
  export type CreateApiKey = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `add-bookmark-clipboard` command */
  export type AddBookmarkClipboard = {}
  /** Arguments passed to the `add-bookmark` command */
  export type AddBookmark = {}
  /** Arguments passed to the `create-api-key` command */
  export type CreateApiKey = {}
}

