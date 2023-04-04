// 웹앱의 메인 바탕이 되는 컴포넌트
import React, {useState, useCallback, useEffect} from 'react'
import { useRouter } from 'next/router';

const MainTemplate: React.FC = () => {
  const [currentComponent, setCurrentComponent] = useState('Dashboard');
  const [toggle, setToggle] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // 초기 렌더링시, 유저 데이터 받아오기
  }, [])
  

  // 네비게이션에서 서택
  const onClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    setCurrentComponent(e.currentTarget.innerHTML);
    changeFocus(e.currentTarget.innerHTML);
  }, [currentComponent]);

  const changeFocus = useCallback((target: string) => {
    const navigators = document.querySelectorAll('.navi');
    navigators.forEach(navi => {
      if (navi.innerHTML === target) navi.classList.add('bg-green3');
      else navi.classList.remove('bg-green3')
    });
  }, []);

  // 마이 프로필 토글
  const onToggle = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    setToggle(!toggle);
    setVisible();
  },[toggle]);

  const setVisible = useCallback(() => {
    const myProfile = document.querySelector('.toggle-my');
    if (myProfile?.classList.contains('hidden')) myProfile?.classList.remove('hidden');
    else myProfile?.classList.add('hidden');
  },[])

  // 마이 프로필 페이지로 이동
  const moveToMyPage = useCallback(() => {
    router.push('/profile');
  }, []);

  // 로그아웃
  // const signOut = useCallback(() => {

  // }, []);

  return (
    <div className="min-h-full">
      <nav className="bg-green2">
        {/* 상단 바 (로고 + 네비게이터 + 마이 프로필) */}
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="font-bold text-2xl text-green3">
                {/* 로고 */}
                G. Ware
              </div>
              {/* 네비게이터 */}
              <div className="ml-10 flex items-baseline space-x-4">
                <button onClick={onClick} className="text-gray1 rounded-md px-3 py-2 text-sm font-medium navi bg-green3">Dashboard</button>
                <button onClick={onClick} className="text-gray1 rounded-md px-3 py-2 text-sm font-medium navi">Posts</button>
                <button onClick={onClick} className="text-gray1 rounded-md px-3 py-2 text-sm font-medium navi">Projects</button>
                <button onClick={onClick} className="text-gray1 rounded-md px-3 py-2 text-sm font-medium navi">Organization</button>
              </div>
            </div>
            {/* 마이 프로필 */}
            <div className="ml-4 flex items-center">
              <div className="relative ml-3">
                <div>
                  <button onClick={onToggle} type="button" className="flex items-center rounded-full bg-green3 text-sm text-gray1 p-1.5 focus:ring-1 ring-opacity-5">
                    My
                  </button>
                </div>
                <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 hidden toggle-my">
                  <button onClick={moveToMyPage} className="block px-4 py-2 text-sm text-gray3">My profile</button>
                  <button className="block px-4 py-2 text-sm text-gray3">Sign out</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <header className="bg-gray1 shadow">
        {/* 헤더 바 */}
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray3">
            {/* 현재 컴포넌트 이름 */}
            {currentComponent}
          </h1>
        </div>
      </header>

      <main>
        {/* 메인 바 */}
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          {/* 현재 컴포넌트 */}
          
        </div>
      </main>
    </div>
  )
}

export default MainTemplate;
