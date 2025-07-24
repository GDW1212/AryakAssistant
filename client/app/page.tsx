import { 
  Brain, 
  Pill, 
  Calendar, 
  Shield, 
  Zap, 
  Heart, 
  Star, 
  ArrowRight, 
  CheckCircle, 
  Users, 
  TrendingUp,
  Sparkles
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="container mx-auto px-6 py-8">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl shadow-lg shadow-blue-400/30 flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-800">알비서</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">기능</a>
            <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors">가격</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">소개</a>
                         <Link href="/signin" className="clay-button px-6 py-2 text-blue-600 font-medium">
               시작하기
             </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">AI가 분석하는</span>
            <br />
            개인 맞춤 영양제
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            건강 설문을 통해 AI가 당신에게 최적화된 영양제를 추천하고, 
            복용 관리까지 한 번에 해결하세요.
          </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link href="/signin" className="w-52 clay-button px-8 py-4 text-blue-600 font-medium flex items-center justify-center space-x-2">
               <Sparkles className="w-5 h-5" />
               <span>무료로 시작하기</span>
             </Link>
             <button className="w-52 clay-button px-8 py-4 text-blue-600 font-medium flex items-center justify-center space-x-2">
               <span>데모 보기</span>
               <ArrowRight className="w-5 h-5" />
             </button>
           </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="clay-card p-8 transform hover:-translate-y-2">
                         <div className="clay-icon w-16 h-16 mb-6 mx-auto flex items-center justify-center">
               <Brain className="w-8 h-8 text-white" />
             </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">AI 건강 분석</h3>
            <p className="text-gray-600">개인 건강 상태를 AI가 분석하여 최적의 영양제를 추천합니다</p>
          </div>
          <div className="clay-card p-8 transform hover:-translate-y-2">
                         <div className="clay-icon w-16 h-16 mb-6 mx-auto flex items-center justify-center" style={{background: 'linear-gradient(135deg, #ec4899, #8b5cf6)'}}>
               <Pill className="w-8 h-8 text-white" />
             </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">성분 상세 분석</h3>
            <p className="text-gray-600">각 영양제의 성분을 상세히 분석하여 안전성과 효과를 검증합니다</p>
          </div>
          <div className="clay-card p-8 transform hover:-translate-y-2">
                         <div className="clay-icon w-16 h-16 mb-6 mx-auto flex items-center justify-center" style={{background: 'linear-gradient(135deg, #8b5cf6, #a855f7)'}}>
               <Calendar className="w-8 h-8 text-white" />
             </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">복용 관리</h3>
            <p className="text-gray-600">복용 일정을 관리하고 알림을 받아 놓치지 않고 섭취할 수 있습니다</p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">3단계로 간단하게</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full shadow-lg shadow-blue-400/30 flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-white">1</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">건강 설문</h3>
            <p className="text-gray-600">간단한 건강 설문을 통해 현재 상태를 파악합니다</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full shadow-lg shadow-indigo-400/30 flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-white">2</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">AI 분석</h3>
            <p className="text-gray-600">AI가 설문 결과를 분석하여 최적의 영양제를 추천합니다</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full shadow-lg shadow-purple-400/30 flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-white">3</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">복용 관리</h3>
            <p className="text-gray-600">추천받은 영양제를 체계적으로 관리하고 섭취합니다</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">알비서의 특별한 기능</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="clay-card p-8">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl shadow-lg shadow-blue-400/30 flex items-center justify-center mb-6">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">과학적 근거</h3>
            <p className="text-gray-600">의학 논문과 임상 연구를 바탕으로 한 신뢰할 수 있는 추천</p>
          </div>
          <div className="clay-card p-8">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-xl shadow-lg shadow-indigo-400/30 flex items-center justify-center mb-6">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">빠른 분석</h3>
            <p className="text-gray-600">AI 기술을 활용한 빠르고 정확한 건강 상태 분석</p>
          </div>
          <div className="clay-card p-8">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl shadow-lg shadow-purple-400/30 flex items-center justify-center mb-6">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">개인 맞춤</h3>
            <p className="text-gray-600">개인의 건강 상태와 라이프스타일에 맞춘 맞춤형 추천</p>
          </div>
          <div className="clay-card p-8">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-red-500 rounded-xl shadow-lg shadow-pink-400/30 flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">전문가 지원</h3>
            <p className="text-gray-600">영양 전문가의 검토를 거친 신뢰할 수 있는 정보</p>
          </div>
          <div className="clay-card p-8">
            <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-orange-500 rounded-xl shadow-lg shadow-red-400/30 flex items-center justify-center mb-6">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">효과 추적</h3>
            <p className="text-gray-600">복용 후 건강 상태 변화를 체계적으로 추적하고 분석</p>
          </div>
          <div className="clay-card p-8">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-xl shadow-lg shadow-orange-400/30 flex items-center justify-center mb-6">
              <Star className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">품질 보증</h3>
            <p className="text-gray-600">엄격한 품질 기준을 통과한 영양제만을 추천</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="glass-clay-card p-12 text-center">
          <h2 className="text-4xl font-bold mb-6 gradient-text">지금 시작해보세요</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            AI 기술로 당신의 건강을 더욱 스마트하게 관리하세요. 
            첫 번째 추천은 무료입니다.
          </p>
                     <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link href="/signin" className="clay-button px-8 py-4 text-blue-600 font-medium flex items-center justify-center space-x-2">
               <CheckCircle className="w-5 h-5" />
               <span>무료 체험 시작</span>
             </Link>
             <button className="clay-button px-8 py-4 text-blue-600 font-medium flex items-center justify-center space-x-2 w-full sm:w-auto">
               <ArrowRight className="w-5 h-5" />
               <span>자세히 알아보기</span>
             </button>
           </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12">
        <div className="clay-card p-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl shadow-lg shadow-blue-400/30 flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-800">알비서</span>
              </div>
              <p className="text-gray-600">AI 기술로 건강한 삶을 만들어갑니다.</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-4">서비스</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-blue-600 transition-colors">영양제 추천</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">복용 관리</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">건강 분석</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-4">회사</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-blue-600 transition-colors">소개</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">팀</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">채용</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-4">지원</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-blue-600 transition-colors">고객센터</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">문의하기</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
            <p>© 2024 알비서. Copyright All Rights Reserved.</p>
            <p className="text-sm mt-2">본 서비스는 의료 상담을 대체하지 않습니다. 의료 상담이 필요한 경우 전문의와 상담하세요.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 