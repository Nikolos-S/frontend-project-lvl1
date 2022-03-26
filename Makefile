install: # установить зависимости
	npm ci

brain-games: # запустить игру без глобальной установки
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

brain-calc:
	node bin/brain-calc.js


publish: # отладка публикации
	npm publish --dry-run

lint: # запустить eslint, чтобы исправить ошибки
	npx eslint .

fix: # пофиксить ошибки
	npx eslint --fix .