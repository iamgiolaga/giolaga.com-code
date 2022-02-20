git add .
git commit -m "$1"
git push
sh autobuild.sh
cd ../iamgiolaga.github.io/
git add .
git commit -m "$1"
git push
