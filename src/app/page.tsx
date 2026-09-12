type LinkItem = {
  label: string;
  href: string;
};

const links: LinkItem[] = [
  { label: "GitHub", href: "https://github.com/ibopaul" },
  { label: "Blog", href: "https://ibopaul.tistory.com" },
  { label: "Email", href: "mailto:ibopaul_kim@naver.com" },
];

export default function Home() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-[#F7FBFF] via-[#E3F1FF] to-[#CBE4FF] px-4 py-16">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-28 -left-24 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-blue-200/35 blur-3xl"
      />

      <main className="relative flex w-full max-w-sm flex-col items-center">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/70 to-sky-100/30 blur-md" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://ui-avatars.com/api/?name=KS&background=0EA5E9&color=fff&size=128"
            alt="프로필 사진"
            width={112}
            height={112}
            className="relative h-28 w-28 rounded-full object-cover shadow-[0_10px_30px_-6px_rgba(56,120,180,0.35)] ring-4 ring-white/80"
          />
        </div>

        <h1 className="mt-6 text-2xl font-bold tracking-tight text-slate-800">
          김승현
        </h1>
        <p className="mt-1.5 text-sm text-slate-500">
          항공기 항공전자 소프트웨어 엔지니어
        </p>

        <div className="mt-10 flex w-full flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="w-full rounded-2xl border border-white/60 bg-white/45 px-5 py-4 text-center text-sm font-medium text-slate-700 shadow-[0_6px_20px_-8px_rgba(56,120,180,0.25)] backdrop-blur-md transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-white/65 hover:shadow-[0_10px_24px_-8px_rgba(56,120,180,0.3)]"
            >
              {link.label}
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
