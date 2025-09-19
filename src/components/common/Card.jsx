import Motion from "./Motion";

export default function UniversalCard({
  tag,
  id,
  color,
  title,
  heading,
  desc,
  description,
  status,
  stats,
  classification,
}) {
  return (
    <Motion>
      {/* Card Content */}
      <div className="relative z-10">
        {/* Icon ID */}
        {id && color && (
          <div
            className={`${color} text-black font-bold w-12 h-12 flex items-center justify-center rounded-md mb-4`}
          >
            {id}
          </div>
        )}

        {/* Tag */}
        {tag && <p className="text-green-400 font-jetbrains mb-3">{tag}</p>}

        {/* Title / Heading */}
        {title && (
          <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
        )}
        {heading && (
          <h2 className="text-2xl font-bold mb-3 text-white">{heading}</h2>
        )}

        {/* Description */}
        {desc && <p className="text-gray-400 mb-4">{desc}</p>}
        {description && (
          <p className="text-gray-300 text-sm leading-relaxed mb-6">
            {description}
          </p>
        )}

        {/* Stats Section */}
        {stats && (
          <div className="grid grid-cols-3 gap-4 mb-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-green-400 text-xl font-bold">{stat.value}</p>
                <p className="text-gray-400 text-xs">{stat.label}</p>
              </div>
            ))}
          </div>
        )}
        
        {/* Status or Classification */}
        {status && (
          <p className="text-green-400 font-jetbrains text-sm">{status}</p>
        )}
        {classification && (
          <p className="text-green-400 text-sm font-jetbrains">
            CLASSIFICATION: {classification}
          </p>
        )}
      </div>
    </Motion>
  );
}
