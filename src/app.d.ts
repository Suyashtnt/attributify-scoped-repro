
import type { AttributifyAttributes } from '@unocss/preset-attributify'

declare global {
	// See https://kit.svelte.dev/docs/types#app
	// for information about these interfaces
	// and what to do when importing types
	declare namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}

  namespace svelte.JSX {
    interface HTMLAttributes<T> extends AttributifyAttributes {}
  }
}