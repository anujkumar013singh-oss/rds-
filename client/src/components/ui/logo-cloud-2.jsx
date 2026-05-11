import { PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function LogoCloud({ className, ...props }) {
  return (
    <div
      className={cn(
        "relative grid grid-cols-2 border-x border-black/10 md:grid-cols-4",
        className
      )}
      {...props}
    >
      <div className="-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-screen border-t border-black/10" />

      <LogoCard
        className="relative border-r border-b border-black/10 bg-black/[0.02]"
        logo={{
          src: "https://svgl.app/library/nvidia-wordmark-light.svg",
          alt: "Nvidia Logo",
        }}
      >
        <PlusIcon
          className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 text-ali"
          strokeWidth={1}
        />
      </LogoCard>

      <LogoCard
        className="border-b border-r border-black/10"
        logo={{
          src: "https://svgl.app/library/supabase_wordmark_light.svg",
          alt: "Supabase Logo",
        }}
      />

      <LogoCard
        className="relative border-r border-b border-black/10 md:bg-black/[0.02]"
        logo={{
          src: "https://svgl.app/library/github_wordmark_light.svg",
          alt: "GitHub Logo",
        }}
      >
        <PlusIcon
          className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 text-ali"
          strokeWidth={1}
        />
        <PlusIcon
          className="-bottom-[12.5px] -left-[12.5px] absolute z-10 hidden size-6 md:block text-ali"
          strokeWidth={1}
        />
      </LogoCard>

      <LogoCard
        className="relative border-b border-black/10 bg-black/[0.02] md:bg-transparent"
        logo={{
          src: "https://svgl.app/library/openai_wordmark_light.svg",
          alt: "OpenAI Logo",
        }}
      />

      <LogoCard
        className="relative border-r border-b border-black/10 bg-black/[0.02] md:border-b-0 md:bg-transparent"
        logo={{
          src: "https://svgl.app/library/turso-wordmark-light.svg",
          alt: "Turso Logo",
        }}
      >
        <PlusIcon
          className="-right-[12.5px] -bottom-[12.5px] md:-left-[12.5px] absolute z-10 size-6 md:hidden text-ali"
          strokeWidth={1}
        />
      </LogoCard>

      <LogoCard
        className="border-b border-black/10 bg-transparent md:border-r md:border-b-0 md:bg-black/[0.02]"
        logo={{
          src: "https://svgl.app/library/clerk-wordmark-light.svg",
          alt: "Clerk Logo",
        }}
      />

      <LogoCard
        className="border-r border-black/10"
        logo={{
          src: "https://svgl.app/library/claude-ai-wordmark-icon_light.svg",
          alt: "Claude AI Logo",
        }}
      />

      <LogoCard
        className="bg-black/[0.02]"
        logo={{
          src: "https://svgl.app/library/vercel_wordmark.svg",
          alt: "Vercel Logo",
        }}
      />

      <div className="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-screen border-b border-black/10" />
    </div>
  );
}

function LogoCard({ logo, className, children, ...props }) {
  return (
    <div
      className={cn(
        "flex items-center justify-center bg-transparent px-4 py-8 md:p-8",
        className
      )}
      {...props}
    >
      <img
        alt={logo.alt}
        className="pointer-events-none h-4 select-none md:h-5 brightness-0 opacity-60 hover:opacity-100 transition-opacity"
        height={logo.height || "auto"}
        src={logo.src}
        width={logo.width || "auto"}
      />
      {children}
    </div>
  );
}
