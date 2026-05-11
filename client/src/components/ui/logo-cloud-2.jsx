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
          src: "https://e7.pngegg.com/pngimages/355/980/png-clipart-logo-brand-flipkart-computer-icons-logo-for-online-shop-text-logo-thumbnail.png",
          alt: "Flipkart Logo",
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
          src: "https://icon2.cleanpng.com/lnd/20241213/pz/74d97a469873774f841633779c982d.webp",
          alt: "Amazon Logo",
        }}
      />

      <LogoCard
        className="relative border-r border-b border-black/10 md:bg-black/[0.02]"
        logo={{
          src: "https://www.pngall.com/wp-content/uploads/17/Myntra-Logo-Minimalist-Style-PNG-thumb.png",
          alt: "Myntra Logo",
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
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Zepto_Logo.svg/3840px-Zepto_Logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
          alt: "Zepto Logo",
        }}
      />

      <LogoCard
        className="relative border-r border-b border-black/10 bg-black/[0.02] md:border-b-0 md:bg-transparent"
        logo={{
          src: "https://www.clipartmax.com/png/middle/439-4391278_farm-logo-photo-mahindra-logo-png.png",
          alt: "Mahindra Logo",
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
          src: "https://p7.hiclipart.com/preview/429/554/533/lava-international-noida-company-business-lava-a97-others.jpg",
          alt: "Lava Logo",
        }}
      />

      <LogoCard
        className="border-r border-black/10"
        logo={{
          src: "https://img.favpng.com/4/20/3/logo-samsung-electronics-organization-samsung-galaxy-png-favpng-wsWzg4CPd3KsEUdZza0vdijFb.jpg",
          alt: "Samsung Logo",
        }}
      />

      <LogoCard
        className="bg-black/[0.02]"
        logo={{
          src: "https://img.favpng.com/9/0/3/swiggy-office-swiggy-corporate-online-food-ordering-discounts-and-allowances-coupon-png-favpng-r4Twb7Fvm5TViB9NBcgENDcAr_t.jpg",
          alt: "Swiggy Logo",
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
