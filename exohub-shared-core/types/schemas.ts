import { z } from 'zod';

// 회원가입/입력 시 서버에 보내기 전 클라이언트에서 완벽 차단
export const UserSchema = z.object({
  email: z.string().email({ message: "유효한 이메일 형식이 아닙니다." }),
  password: z.string().min(8, { message: "비밀번호는 최소 8자 이상이어야 합니다." }),
  nickname: z.string().min(2, { message: "닉네임은 2자 이상입니다." }),
});

export const PointTransactionSchema = z.object({
  amount: z.number().positive(),
  receiverId: z.string().uuid(),
});
