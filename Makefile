#!make
prod:
	@rm -rf site/content
	@git clone https://github.com/matteo-hertel/blog.git ./site/content 
	@npm run build
	@npm run generate:headers

