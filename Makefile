#!make
prod:
	@rm -rf site/content
	@git clone https://github.com/matteo-hertel/blog.git ./site/content 
	@rm ./site/content/README.md ./site/content/LICENSE 
	@npm run build
	@npm run generate:headers
