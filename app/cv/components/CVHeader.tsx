import { Gitlab, Globe, Linkedin, Mail, MapPin } from "lucide-react";

export function CVHeader() {
  return (
    <header
      className="relative shrink-0 px-8 py-7 flex items-center justify-between gap-8"
      style={{ borderBottom: "3px solid #e11d48", zIndex: 1 }}
    >
      <div>
        <h1
          className="text-[2.4rem] leading-none text-zinc-900"
          style={{ fontFamily: "var(--font-serif)", fontWeight: 600, letterSpacing: "-0.02em" }}
        >
          Ghardi{" "}
          <em style={{ color: "#e11d48", fontStyle: "italic" }}>Ilyès</em>
        </h1>
        <div className="mt-2 flex items-center gap-3">
          <div className="h-[2px] w-10 rounded-full shrink-0" style={{ background: "#e11d48" }} />
          <p className="text-zinc-500 text-[10.5px] font-semibold tracking-widest uppercase">
            Développeur Full Stack Web &amp; Mobile · CDI
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-1.5 shrink-0 text-right">
        {[
          { icon: <Mail className="h-3 w-3" />, text: "ilyesghardi@outlook.com", href: "mailto:ilyesghardi@outlook.com" },
          { icon: <Globe className="h-3 w-3" />, text: "benhouss.site", href: "https://benhouss.site" },
          { icon: <Gitlab className="h-3 w-3" />, text: "gitlab.com/yeslife.prod", href: "https://gitlab.com/yeslife.prod" },
          { icon: <Linkedin className="h-3 w-3" />, text: "linkedin.com/in/benhouss", href: "https://linkedin.com/in/benhouss" },
          { icon: <MapPin className="h-3 w-3" />, text: "Lille, France · Remote", href: undefined },
        ].map(({ icon, text, href }) =>
          href ? (
            <a
              key={text}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="flex items-center justify-end gap-1.5 text-zinc-500 hover:text-red-500 transition-colors"
            >
              <span className="text-[9.5px]">{text}</span>
              <span className="text-zinc-400">{icon}</span>
            </a>
          ) : (
            <div key={text} className="flex items-center justify-end gap-1.5 text-zinc-400">
              <span className="text-[9.5px]">{text}</span>
              <span>{icon}</span>
            </div>
          )
        )}
      </div>
    </header>
  );
}
