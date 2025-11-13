import Image from 'next/image';

export default function CapabilityCard({ title, icon, description, image }) {
  return (
    <div className="group bg-steel-900 border border-line-gray rounded-xl p-6 min-h-[220px] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-brand-orange/20 hover:border-brand-orange/50">
      {/* Image Background */}
      {image && (
        <div className="relative w-full h-32 mb-4 rounded-lg overflow-hidden" aria-hidden="true" tabIndex={-1}>
          <Image
            src={image}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-steel-900 via-steel-900/60 to-transparent"></div>
        </div>
      )}

      {/* Icon & Title */}
      <div className="flex items-center gap-4 mb-3">
        <div className="icon w-12 h-12 flex items-center justify-center text-brand-orange group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
          {icon}
        </div>
        <h3 className="font-montserrat font-semibold text-xl text-white">
          {title}
        </h3>
      </div>

      {/* Description */}
      <p className="font-inter text-sm text-neutral-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
