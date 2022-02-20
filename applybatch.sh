cd ../giolaga.com-code/
npm run build
cd ../iamgiolaga.github.io/
rm asset-manifest.json cv.ico cv.png index.html manifest.json me.jpg
rm -rf static/
cd ..
mv giolaga.com-code/build/* iamgiolaga.github.io
rm -rf giolaga.com-code/build
