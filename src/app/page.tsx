type LinkItem = {
  label: string;
  href: string;
};

const links: LinkItem[] = [
  { label: "GitHub", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Blog", href: "#" },
];

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-sm rounded-3xl border border-gray-200 bg-white p-8 shadow-sm flex flex-col items-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://ui-avatars.com/api/?name=KS&background=0EA5E9&color=fff&size=128"
          alt="프로필 사진"
          width={96}
          height={96}
          className="w-24 h-24 rounded-full object-cover"
        />

        <h1 className="mt-4 text-xl font-bold text-gray-900">김승현</h1>
        <p className="mt-1 text-sm text-gray-500">항공기 항공전자 소프트웨어 엔지니어</p>

        <div className="mt-6 flex w-full flex-col gap-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-center text-sm font-medium text-gray-800 transition-colors hover:border-sky-400 hover:bg-sky-50"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
