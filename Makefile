#!make
prod:
	rm -rf site/content
	git clone https://github.com/matteo-hertel/blog.git ./site/content 
	npm run build

headers:
	@npm run generate:headers

