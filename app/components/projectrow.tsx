type ProjectRowProps = {
  title: string;
  description: string;
  imageSrc: string;
  href: string;
  meta?: string;
};

export function ProjectRow({
  title,
  description,
  imageSrc,
  href,
  meta,
}: ProjectRowProps) {
  return (
    <a
      className="group grid grid-cols-1 gap-6 sm:grid-cols-[2fr_3fr]"
    >
      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden rounded-xl bg-neutral-100">
        <img
          src={imageSrc}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Text */}
      <div className="flex flex-col justify-center">
        <h3 className="text-xl font-semibold">{title}</h3>

        <p className="mt-3 max-w-md text-neutral-600 leading-relaxed">
          {description}
        </p>

        {meta && (
          <span className="mt-4 text-sm text-neutral-500">
            {meta}
          </span>
        )}
      </div>
    </a>
  );
}