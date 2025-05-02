import { FaPhone, FaMapMarkerAlt, FaClock, FaEnvelope } from 'react-icons/fa';

const PreHeader = () => {
  const contactInfo = [
    { icon: <FaPhone />, text: '+201065309906', href: 'tel:+201065309906' },
    { icon: <FaPhone />, text: '+201159092590', href: 'tel:+201159092590' },
    { icon: <FaEnvelope />, text: 'info@resala-abuhammad.org', href: 'mailto:info@resala-abuhammad.org' },
    { icon: <FaMapMarkerAlt />, text: 'أبو حماد (بجوار المزلقان الجديد)، الشرقية، مصر',, href: 'https://maps.app.goo.gl/AYhLxvkZGFpfky8x6' },
    { icon: <FaClock />, text: 'الأحد-الخميس ٩:٠٠ ص - ٥:٠٠ م' }
  ];

  return (
    <div className="hidden lg:block fixed w-full z-40 bg-gray-900/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-12 text-sm">
          <div className="flex items-center space-x-reverse space-x-6">
            {contactInfo.slice(0, 2).map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex items-center text-gray-300 hover:text-white transition-colors duration-300 group"
              >
                <span className="ml-2 text-[var(--gradient-start)] group-hover:text-[var(--gradient-end)] transition-colors duration-300">
                  {item.icon}
                </span>
                <span>{item.text}</span>
              </a>
            ))}
          </div>
          
          <div className="flex items-center space-x-reverse space-x-6">
            {contactInfo.slice(2).map((item, index) => (
              <div
                key={index}
                className={`flex items-center text-gray-300 ${item.href ? 'hover:text-white cursor-pointer' : ''} group`}
              >
                <span className="ml-2 text-[var(--gradient-start)] group-hover:text-[var(--gradient-end)] transition-colors duration-300">
                  {item.icon}
                </span>
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.text}
                  </a>
                ) : (
                  <span>{item.text}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreHeader;
