export default function Footer() {
  return (
    <footer className="mt-20 text-gray-600 bg-gray1">
      <span className="hidden">푸터 바</span>
      <div className="relative w-4/5 mx-auto my-0">
        <strong className="block text-lg h-28 leading-[112px] border-b-2 font-bold border-gray2">
          G. Ware 2023
        </strong>
        <a
          href="https://github.com/gware2023"
          target="_blank"
          className="absolute right-0 top-12"
        >
          <span className="hidden">Github 링크</span>
          <img className="h-6" src="icon_github.png" />
        </a>
        <div className="flex justify-between">
          <div className="my-10">
            <dl>
              <dt className="inline-block mr-1 ">사명</dt>
              <dd className="inline-block ml-1 mr-5 text-gray-500">
                (주) G. Ware
              </dd>
              <dt className="inline-block mr-1">구성원</dt>
              <dd className="inline-block px-1 text-gray-500">neuma573</dd>
              <dd className="inline-block px-1 text-gray-500 border-l-[1px] border-gray2">
                sung3441
              </dd>
              <dd className="inline-block px-1 text-gray-500 border-l-[1px] border-gray2">
                codeehh
              </dd>
              <dd className="inline-block px-1 text-gray-500 border-l-[1px] border-gray2">
                tankboyy
              </dd>
              <dd className="inline-block px-1 text-gray-500 border-l-[1px] border-gray2">
                ijaesin
              </dd>
            </dl>
            <dl>
              <dt className="inline-block mr-1">업무</dt>
              <dd className="inline-block ml-1 mr-5 text-gray-500">
                웹 애플리케이션 제작
              </dd>
              <dt className="inline-block mr-1">주소</dt>
              <dd className="inline-block ml-1 text-gray-500">서울특별시</dd>
            </dl>
          </div>

          <small className="mt-10 ml-10">
            Copyright &copy;G.Ware. All Rights Reserved.
          </small>
        </div>
      </div>
    </footer>
  );
}
