"use client";

import { useState } from "react";
import { 
  Brain, 
  Eye, 
  EyeOff, 
  Mail, 
  Lock, 
  ArrowLeft,
  Sparkles
} from "lucide-react";
import Link from "next/link";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 로그인 로직 구현
    console.log("로그인 시도:", { email, password });
  };

  return (
         <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4 relative">
       {/* 홈으로 돌아가기 - 좌상단 */}
       <Link href="/" className="absolute top-6 left-6 inline-flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
         <ArrowLeft className="w-5 h-5" />
         <span>홈으로 돌아가기</span>
       </Link>
       
       <div className="w-full max-w-md">
         {/* 헤더 */}
         <div className="text-center mb-8">
          
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl shadow-lg shadow-blue-400/30 flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-800">알비서</span>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-800 mb-2">로그인</h1>
          <p className="text-gray-600">AI 영양제 추천 서비스를 이용하세요</p>
        </div>

        {/* 로그인 폼 */}
        <div className="clay-card p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 이메일 입력 */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                이메일
              </label>
              <div className="relative">
                                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                   <Mail className="h-5 w-5 text-gray-500" />
                 </div>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="clay-input w-full pl-10 pr-3 py-3 text-gray-900 placeholder-gray-500"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            {/* 비밀번호 입력 */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                비밀번호
              </label>
              <div className="relative">
                                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                   <Lock className="h-5 w-5 text-gray-500" />
                 </div>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="clay-input w-full pl-10 pr-12 py-3 text-gray-900 placeholder-gray-500"
                  placeholder="비밀번호를 입력하세요"
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  )}
                </button>
              </div>
            </div>

            {/* 로그인 유지 및 비밀번호 찾기 */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="clay-checkbox h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  로그인 유지
                </label>
              </div>
              <div className="text-sm">
                <a href="#" className="text-blue-600 hover:text-blue-500 transition-colors">
                  비밀번호 찾기
                </a>
              </div>
            </div>

            {/* 로그인 버튼 */}
                         <button
               type="submit"
               className="clay-button w-full px-6 py-3 text-blue-600 font-medium flex items-center justify-center space-x-2"
             >
               <span>로그인</span>
               <ArrowRight className="w-5 h-5" />
             </button>
          </form>

          {/* 구분선 */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">또는</span>
            </div>
          </div>

          {/* 소셜 로그인 */}
          <div className="space-y-3">
            <button className="clay-button w-full px-6 py-3 text-gray-700 font-medium flex items-center justify-center space-x-2">
              <div className="w-5 h-5 bg-[#4285F4] rounded"></div>
              <span>Google로 계속하기</span>
            </button>
            
            <button className="clay-button w-full px-6 py-3 text-gray-700 font-medium flex items-center justify-center space-x-2">
              <div className="w-5 h-5 bg-[#1877F2] rounded"></div>
              <span>Facebook으로 계속하기</span>
            </button>
          </div>

          {/* 회원가입 링크 */}
          <div className="text-center mt-6">
            <p className="text-sm text-gray-600">
              계정이 없으신가요?{" "}
              <Link href="/signup" className="text-blue-600 hover:text-blue-500 font-medium transition-colors">
                회원가입
              </Link>
            </p>
          </div>
        </div>

        {/* 추가 정보 */}
        <div className="text-center mt-6">
          <p className="text-xs text-gray-500">
            로그인함으로써{" "}
            <a href="#" className="text-blue-600 hover:text-blue-500">
              이용약관
            </a>
            과{" "}
            <a href="#" className="text-blue-600 hover:text-blue-500">
              개인정보처리방침
            </a>
            에 동의합니다.
          </p>
        </div>
      </div>
    </div>
  );
} 