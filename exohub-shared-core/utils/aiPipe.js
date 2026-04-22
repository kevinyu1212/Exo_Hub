/**
 * Exo-AI-Buffer: 향후 파충류 질병 진단 AI나 개체 식별 AI 연동을 위한 규격화
 */
export const aiBuffer = {
  prepareImageData: (imageFile) => {
    // 이미지 픽셀 정규화 및 텐서 변환 준비 로직 (Placeholder)
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => resolve(e.target.result);
      reader.readAsDataURL(imageFile);
    });
  },
  formatForInference: (data) => ({
    ...data,
    app_version: '1.0.0',
    device_info: navigator.userAgent
  })
};
