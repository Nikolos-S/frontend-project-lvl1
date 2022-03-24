install: # установить зависимости
	npm ci

brain-games: # запустить игру без глобальной установки
	node bin/brain-games.js

publish: # отладка публикации
	npm publish --dry-run

lint: # запустить eslint, чтобы исправить ошибки
	npx eslint .