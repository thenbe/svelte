/* This file is generated by scripts/process-messages.js. Do not edit! */

import { DEV } from 'esm-env';

/**
 * Maximum update depth exceeded. This can happen when a reactive block or effect repeatedly sets a new value. Svelte limits the number of nested updates to prevent infinite loops
 * @returns {never}
 */
export function effect_update_depth_exceeded() {
	if (DEV) {
		const error = new Error(`${"effect_update_depth_exceeded"}\n${"Maximum update depth exceeded. This can happen when a reactive block or effect repeatedly sets a new value. Svelte limits the number of nested updates to prevent infinite loops"}`);

		error.name = 'Svelte error';
		throw error;
	} else {
		// TODO print a link to the documentation
		throw new Error("effect_update_depth_exceeded");
	}
}

/**
 * `%name%(...)` can only be used during component initialisation
 * @param {string} name
 * @returns {never}
 */
export function lifecycle_outside_component(name) {
	if (DEV) {
		const error = new Error(`${"lifecycle_outside_component"}\n${`\`${name}(...)\` can only be used during component initialisation`}`);

		error.name = 'Svelte error';
		throw error;
	} else {
		// TODO print a link to the documentation
		throw new Error("lifecycle_outside_component");
	}
}

/**
 * `%name%(...)` cannot be used in runes mode
 * @param {string} name
 * @returns {never}
 */
export function lifecycle_legacy_only(name) {
	if (DEV) {
		const error = new Error(`${"lifecycle_legacy_only"}\n${`\`${name}(...)\` cannot be used in runes mode`}`);

		error.name = 'Svelte error';
		throw error;
	} else {
		// TODO print a link to the documentation
		throw new Error("lifecycle_legacy_only");
	}
}