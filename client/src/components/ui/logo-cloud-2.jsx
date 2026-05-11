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

      {/* Slot 1: Flipkart */}
      <LogoCard
        className="relative border-r border-b border-black/10 bg-black/[0.02]"
        logo={{ 
          src: "https://ik.imagekit.io/vxqem8zrj/Flipkart_logo__2026_.svg-removebg-preview.png", 
          alt: "Flipkart Logo" 
        }}
        imgClassName="h-20 md:h-24" // Significantly increased size
      >
        <PlusIcon
          className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 text-ali"
          strokeWidth={1}
        />
      </LogoCard>

      {/* Slot 2: Swiggy */}
      <LogoCard
        className="border-b border-r border-black/10"
        logo={{ 
          src: "https://ik.imagekit.io/vxqem8zrj/Swiggy_Logo_2024-removebg-preview.png", 
          alt: "Swiggy Logo" 
        }}
        imgClassName="h-16 md:h-20"
      />

      {/* Slot 3: Samsung */}
      <LogoCard
        className="relative border-r border-b border-black/10 md:bg-black/[0.02]"
        logo={{
          src: "https://ik.imagekit.io/vxqem8zrj/Samsung_logo_blue-removebg-preview.png",
          alt: "Samsung Logo",
        }}
        imgClassName="h-14 md:h-18"
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

      {/* Slot 4: Mahindra */}
      <LogoCard
        className="relative border-b border-black/10 bg-black/[0.02] md:bg-transparent"
        logo={{
          src: "https://ik.imagekit.io/vxqem8zrj/Mahindra-Logo-2012-removebg-preview.png",
          alt: "Mahindra Logo",
        }}
        imgClassName="h-16 md:h-20"
      />

      {/* Slot 5: Amazon */}
      <LogoCard
        className="relative border-r border-b border-black/10 bg-black/[0.02] md:border-b-0 md:bg-transparent"
        logo={{
          src: "https://ik.imagekit.io/vxqem8zrj/amazon-logo-amazon-icon-free-free-vector-removebg-preview.png",
          alt: "Amazon Logo",
        }}
        imgClassName="h-20 md:h-24" // Significantly increased size
      >
        <PlusIcon
          className="-right-[12.5px] -bottom-[12.5px] md:-left-[12.5px] absolute z-10 size-6 md:hidden text-ali"
          strokeWidth={1}
        />
      </LogoCard>

      {/* Slot 6: Myntra */}
      <LogoCard
        className="border-b border-black/10 bg-transparent md:border-r md:border-b-0 md:bg-black/[0.02]"
        logo={{ 
          src: "https://ik.imagekit.io/vxqem8zrj/eab6e12c5c11b94f0814c1b85dc31290-removebg-preview.png", 
          alt: "Myntra Logo" 
        }}
        imgClassName="h-16 md:h-20"
      />

      {/* Slot 7: Zepto */}
      <LogoCard
        className="border-r border-black/10"
        logo={{ 
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Zepto_Logo.svg/3840px-Zepto_Logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail", 
          alt: "Zepto Logo" 
        }}
        imgClassName="h-14 md:h-18"
      />

      {/* Slot 8: Lava */}
      <LogoCard
        className="bg-black/[0.02]"
        logo={{ 
          src: "https://ik.imagekit.io/vxqem8zrj/images-removebg-preview.png", 
          alt: "Lava Logo" 
        }}
        imgClassName="h-20 md:h-24" // Significantly increased size
      />

      <div className="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-screen border-b border-black/10" />
    </div>
  );
}

function LogoCard({ logo, className, imgClassName, children, ...props }) {
  return (
    <div
      className={cn(
        "flex items-center justify-center bg-transparent px-4 py-10 md:p-12 min-h-[140px] md:min-h-[160px]",
        className
      )}
      {...props}
    >
      {logo.src ? (
        <img
          alt={logo.alt}
          className={cn(
            "pointer-events-none w-auto object-contain select-none opacity-100 transition-all duration-300",
            imgClassName || "h-16 md:h-20" // Default larger size
          )}
          src={logo.src}
        />
      ) : (
        <div className="h-16 w-full" />
      )}
      {children}
    </div>
  );
}
