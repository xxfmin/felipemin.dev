import Image from "next/image";

export function Traveling() {
  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <h2 className="section-title">Traveling</h2>
        <p className="text-secondary">
          Born and raised in Brazil with South Korean roots, I&apos;ve always
          lived at the intersection of vibrant cultures. Moving to Florida at a
          young age expanded my worldview and deepened my appreciation for new
          people, ideas, and ways of thinking.
        </p>
      </div>

      <div className="space-y-3.5">
        <div className="flex gap-3.5 w-full">
          <div className="relative flex-1 overflow-hidden rounded-lg">
            <Image
              src="/pics/japan1.jpg"
              alt="Japan"
              width={800}
              height={600}
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="relative flex-1 overflow-hidden rounded-lg">
            <Image
              src="/pics/japan2.jpg"
              alt="Japan"
              width={800}
              height={600}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
        <div className="flex gap-3.5 w-full">
          <div className="relative flex-1 overflow-hidden rounded-lg">
            <Image
              src="/pics/paris.jpg"
              alt="Paris"
              width={600}
              height={800}
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="relative flex-1 overflow-hidden rounded-lg">
            <Image
              src="/pics/england.jpg"
              alt="England"
              width={600}
              height={800}
              className="w-full h-auto object-contain"
            />
          </div>

          <div className="relative flex-1 overflow-hidden rounded-lg">
            <Image
              src="/pics/spain.jpg"
              alt="Spain"
              width={600}
              height={800}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
        <div className="flex gap-3.5 w-full">
          <div className="relative flex-1 overflow-hidden rounded-lg">
            <Image
              src="/pics/korea.JPG"
              alt="Korea"
              width={800}
              height={600}
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="relative flex-1 overflow-hidden rounded-lg">
            <Image
              src="/pics/rome.jpg"
              alt="Rome"
              width={800}
              height={600}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
        <div className="flex gap-3.5 w-full">
          <div className="relative flex-1 overflow-hidden rounded-lg">
            <Image
              src="/pics/utah.jpg"
              alt="Utah"
              width={600}
              height={800}
              className="w-full h-auto object-contain"
            />
          </div>

          <div className="relative flex-1 overflow-hidden rounded-lg">
            <Image
              src="/pics/yosemite.jpg"
              alt="Portugal"
              width={600}
              height={800}
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="relative flex-1 overflow-hidden rounded-lg">
            <Image
              src="/pics/mexico.jpg"
              alt="Mexico"
              width={600}
              height={800}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
        <div className="flex gap-3.5 w-full">
          <div className="relative flex-1 overflow-hidden rounded-lg">
            <Image
              src="/pics/la.jpg"
              alt="Los Angeles"
              width={800}
              height={600}
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="relative flex-1 overflow-hidden rounded-lg">
            <Image
              src="/pics/colorado.jpg"
              alt="Colorado"
              width={800}
              height={600}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
