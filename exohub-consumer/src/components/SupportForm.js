"use client";
import { useForm } from 'react-hook-form';

export function SupportForm() {
  const { register, handleSubmit } = useForm();
  
  const onSubmit = (data) => {
    console.log("문의 접수:", data);
    // supportApi.createTicket(data) 호출 로직 연동 가능
    alert("문의가 접수되었습니다. 최대한 빨리 답변드릴게요! 🦎");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4 bg-white rounded-lg shadow">
      <input {...register("subject")} placeholder="제목" className="w-full border p-2 rounded" />
      <select {...register("category")} className="w-full border p-2 rounded">
        <option value="technical">기술 문의</option>
        <option value="payment">결제/포인트</option>
        <option value="report">불량 유저 신고</option>
      </select>
      <textarea {...register("content")} placeholder="내용을 입력해주세요" className="w-full border p-2 h-32 rounded" />
      <button type="submit" className="w-full bg-primary text-white p-2 rounded font-bold">문의 제출하기</button>
    </form>
  );
}
