import { Mail, Github, Instagram, Facebook } from 'lucide-react';

const ProfileCard = ({ profileImage, firstName, lastName, email, socialLinks }) => {
  // Default image as a fallback
    const defaultImage = "/api/placeholder/150/150";

  // Map social platforms to their respective icons
    const socialIcons = {
    github: Github,
    instagram: Instagram,
    facebook: Facebook
    };

return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm hover:shadow-xl transition-shadow duration-300 flex flex-col items-center">
      {/* Profile Image */}
        <div className="mb-4 relative">
        <img
            src={profileImage || defaultImage}
            alt={`${firstName} ${lastName}`}
            className="w-24 h-24 rounded-full object-cover border-4 border-gray-100"
        />
        </div>

      {/* Name */}
        <h2 className="text-xl font-bold text-gray-800 mb-2">
        {firstName} {lastName}
        </h2>

      {/* Email */}
        <a
        href={`mailto:${email}`}
        className="flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-4 transition-colors duration-200"
        >
        <Mail size={16} />
        <span>{email}</span>
        </a>

      {/* Social Links */}
        <div className="flex gap-4 mt-2">
        {Object.entries(socialLinks).map(([platform, url]) => {
            const Icon = socialIcons[platform];
            if (!Icon) return null;

            return (
            <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
                <Icon size={24} />
            </a>
            );
        })}
        </div>
    </div>
    );
};

// Showing a grid of profile cards
const ProfileGrid = () => {
    const profiles = [
    {
        profileImage: "placeholder",
        firstName: "John",
        lastName: "Doe",
        email: "johndoe@example.com",
        socialLinks: {
        github: "https://github.com/johndoe",
        instagram: "https://instagram.com/johndoe",
        facebook: "https://facebook.com/johndoe"
        }
    },
    {
        profileImage: "placeholder",
        firstName: "Jane",
        lastName: "Smith",
        email: "janesmith@example.com",
        socialLinks: {
        github: "https://github.com/janesmith",
        instagram: "https://instagram.com/janesmith"
        }
    },
    // Add more profiles as needed
    ];

    return (
    <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {profiles.map((profile, index) => (
            <ProfileCard key={index} {...profile} />
        ))}
        </div>
    </div>
    );
};

export default ProfileGrid;