import { Mail, Github, Instagram, Facebook } from 'lucide-react';

const Footer = ({
    logo = "placeholder",
    companyName,
    socialLinks = {},
    resources = {
        title: "RESOURCES",
        links: [
        { text: "React", url: "#" },
        { text: "Tailwind CSS", url: "#" }
        ]
    },
    followUs = {
        title: "FOLLOW US",
        links: [
        { text: "Github", url: "#" },
        { text: "Discord", url: "#" }
        ]
    },
    legal = {
        title: "LEGAL",
        links: [
        { text: "Privacy Policy", url: "#" },
        { text: "Terms & Conditions", url: "#" }
        ]
    }
    }) => {
    // Map social platforms to their respective icons
    const socialIcons = {
        github: Github,
        instagram: Instagram,
        facebook: Facebook,
        mail: Mail
    };

    return (
        <footer className="max-w-screen-xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            {/* Logo and Company Name */}
            <div className="flex items-center">
            <img src={logo} alt={companyName} className="h-6 me-2" />
            <span className="text-xl font-medium">{companyName}</span>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-wrap justify-end gap-x-16 gap-y-8">
            {/* Resources Section */}
            <div>
                <h2 className="text-sm font-semibold mb-4">{resources.title}</h2>
                <ul className="space-y-3">
                {resources.links.map((link, index) => (
                    <li key={index}>
                    <a href={link.url} className="text-gray-600 hover:text-gray-900">
                        {link.text}
                    </a>
                    </li>
                ))}
                </ul>
            </div>

            {/* Follow Us Section */}
            <div>
                <h2 className="text-sm font-semibold mb-4">{followUs.title}</h2>
                <ul className="space-y-3">
                {followUs.links.map((link, index) => (
                    <li key={index}>
                    <a href={link.url} className="text-gray-600 hover:text-gray-900">
                        {link.text}
                    </a>
                    </li>
                ))}
                </ul>
            </div>

            {/* Legal Section */}
            <div>
                <h2 className="text-sm font-semibold mb-4">{legal.title}</h2>
                <ul className="space-y-3">
                {legal.links.map((link, index) => (
                    <li key={index}>
                    <a href={link.url} className="text-gray-600 hover:text-gray-900">
                        {link.text}
                    </a>
                    </li>
                ))}
                </ul>
            </div>
            </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-200" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="text-sm text-gray-600">
            © {new Date().getFullYear()}{companyName}™. All Rights Reserved.
            </span>
            <div className="flex gap-6">
            {Object.entries(socialLinks).map(([platform, url]) => {
                const Icon = socialIcons[platform];
                if (!Icon) return null;

                return (
                <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900"
                >
                    <Icon size={20} />
                </a>
                );
            })}
            </div>
        </div>
        </footer>
    )
}

const footerInfo = () => {
    const info = [
        {
        logo: "placeholder",
        companyName: "John",
        companyURL: "johndoeexample.com",
        resources: {
            title: "RESOURCES",
            links: [
            { text: "React", url: "#" },
            { text: "Tailwind CSS", url: "#" }
            ]
        },
        followUs: {
            title: "FOLLOW US",
            links: [
            { text: "Twitter", url: "#" },
            { text: "Facebook", url: "#" }
            ]
        },
        legal: {
            title: "LEGAL",
            links: [
            { text: "Privacy Policy", url: "#" },
            { text: "Terms & Conditions", url: "#" }
            ]
        },
        socialLinks: {
            github: "https://github.com/johndoe",
            instagram: "https://instagram.com/johndoe",
            facebook: "https://facebook.com/johndoe",
            mail: "mailto:johndoe@example.com"
        }
        }
    ]

    return info.map((information, index) => (
        <Footer key={index} {...information} />
    ))
}

export default footerInfo;