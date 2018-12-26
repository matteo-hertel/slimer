set -e
rm -rf generated;
mkdir generated;
for i in {1..30};
do
  cat template.md | sed -e "s/\[post\]/$i/g" > generated/post${i}.md
done;
