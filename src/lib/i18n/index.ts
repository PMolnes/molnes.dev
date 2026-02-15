import { addMessages, init, getLocaleFromNavigator } from 'svelte-i18n';
import en from './locales/en.json';
import nb from './locales/nb.json';

addMessages('en', en);
addMessages('nb', nb);

init({
	fallbackLocale: 'en',
	initialLocale: getLocaleFromNavigator()
});
