import { Mail, Github, Instagram, Facebook } from 'lucide-react';

const Footer  = ({logo, aboutUs, companyName, companyURL, socialLinks}) => {
    // Default logo as a fallback
    const defaultLogo = "placeholder";

    // Map social platforms to their respective icons
    const socialIcons = {
    github: Github,
    instagram: Instagram,
    facebook: Facebook,
    mail: Mail
    };

    return (
        <footer className="bg-white dark:bg-gray-900">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                <div className="mb-6 md:mb-0">
                    <a href={companyURL} className="flex items-center">
                        <img
                            src={logo || defaultLogo}
                            alt={companyName} 
                            className="h-8 me-3" 
                        />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">{companyName}</span>
                    </a>
                </div>
                <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <a href="https://flowbite.com/" className="hover:underline">Flowbite</a>
                            </li>
                            <li>
                                <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Github</a>
                            </li>
                            <li>
                                <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Discord</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <a href="" className="hover:underline">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="" className="hover:underline">Terms &amp; Conditions</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024<a href={companyURL} className="hover:underline">{companyName}™</a>. All Rights Reserved.
                </span>
                <div className="flex mt-4 sm:justify-center sm:mt-0">
                {Object.entries(socialLinks).map(([platform, url]) => {
                    const Icon = socialIcons[platform];
                    if (!Icon) return null;

                    return (
                    <>
                        <a
                            key={platform}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
                        >
                            <Icon size={24} />
                        </a>
                    </>
                    );
                })}
                </div>
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
            socialLinks: {
            github: "https://github.com/johndoe",
            instagram: "https://instagram.com/johndoe",
            facebook: "https://facebook.com/johndoe",
            mail: "johndoe@example.com"
            }
        },
    ]

    return (
        info.map((infomation, index) => (
            <Footer key={index} {...infomation} />
        ))
    )
}

export default footerInfo;