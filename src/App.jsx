import ProfileCard from './components/ProfileCard';

function Test() {
    return (
    <ProfileCard 
        profileImage="/path/to/image.jpg"
        firstName="John"
        lastName="Doe"
        email="johndoe@example.com"
        socialLinks={{
        github: "https://github.com/johndoe",
        instagram: "https://instagram.com/johndoe",
        facebook: "https://facebook.com/johndoe"
        }}
    />
    );
}

export default Test;
