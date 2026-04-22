# ExoHub Production Build Script
echo "Starting ExoHub Production Build..."
npm run build --workspaces
echo "Optimizing Images and Assets..."
# sharp 등의 라이브러리가 여기서 이미지 압축 진행
