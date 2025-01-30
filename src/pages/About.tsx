import { FaUserGroup } from "react-icons/fa6";
import { TbHeartBitcoin } from "react-icons/tb";

export default function About() {
  const teamMembers = [
    {
      name: "Emily Rodriguez",
      role: "Founder & CEO",
      image: "/src/assets/images/man/istockphoto-1335941248-612x612 (1).jpg",
      bio: "Passionate cyclist with 15 years of experience in the bicycle industry.",
    },
    {
      name: "Sarah Thompson",
      role: "Chief Technology Officer",
      image: "/src/assets/images/man/download.jpeg",
      bio: "Tech innovator driving the digital transformation of cycling technology.",
    },
    {
      name: "Michael Chen",
      role: "Head of Product Design",
      image: "/src/assets/images/man/istockphoto-1335941248-612x612.jpg",
      bio: "Award-winning designer dedicated to creating innovative Car  experiences.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-neutral mb-4">
          Welcome to DetailX: Pioneering car driving Excellence
        </h1>
        <p className="text-xl text-neutral max-w-3xl mx-auto">
          Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco.
        </p>
      </section>

      {/* Mission Values */}
      <section className="grid md:grid-cols-4 border-gray-100 gap-6 mb-12">
        <div className="bg-black border-2 hover:scale-110 transition-transform duration-300  p-6 rounded-lg  text-center">
          {/* <RocketIcon className="h-12 w-12 mx-auto text-primary mb-4" /> */}
          <h3 className="font-semibold text-xl mb-2">What We Do</h3>
          <p className="text-neutral">
            Innovative methods of car repair & tuning Constantly pushing the
            boundaries of bicycle design and technology.
          </p>
        </div>
        <div className="bg-black border-2 hover:scale-110 transition-transform duration-300 p-6 rounded-lg shadow-md text-center">
          <TbHeartBitcoin className="h-12 w-12 mx-auto text-secondary mb-4" />
          <h3 className="font-semibold text-xl mb-2">Passion</h3>
          <p className="text-neutral">
            Repairs, maintenance and detailing services, provided with
            experience, care, precision and expertise.
          </p>
        </div>
        <div className="bg-black border-2 hover:scale-110 transition-transform duration-300 p-6 rounded-lg shadow-md text-center">
          {/* <TrophyIcon className="h-12 w-12 mx-auto text-accent mb-4" /> */}
          <h3 className="font-semibold text-xl mb-2">Quality</h3>
          <p className="text-neutral">
            Curating only the highest quality cars and components.
          </p>
        </div>
        <div className="bg-black border-2 hover:scale-110 transition-transform duration-300 p-6 rounded-lg shadow-md text-center">
          <FaUserGroup className="h-12 w-12 mx-auto text-primary mb-4" />
          <h3 className="font-semibold text-xl mb-2">The Opportunities</h3>
          <p className="text-neutral">
            Building connections and supporting cars of all levels.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="mb-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold text-neutral mb-4">Our Story</h2>
          <p className="text-neutral mb-4">
            Founded in 2015, Car Store started as a small passion project in a
            garage. Today, we've grown into a leading online bicycle retailer,
            serving thousands of cyclists worldwide.
          </p>
          <p className="text-neutral">
            Our mission is simple: to make high-quality cycling accessible,
            enjoyable, and transformative for everyone.
          </p>
        </div>
        <img
          src="/src/assets/images/mechanic-changing-tires-car-service_1303-26889.avif"
          alt="Car Store Workshop"
          className="w-full rounded-lg shadow-md object-cover h-80"
        />
      </section>

      {/* Team Section */}
      <section>
        <h2 className="text-3xl font-bold text-neutral text-center mb-8">
          Meet Our Team
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-black rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="font-semibold text-xl">{member.name}</h3>
                <p className="text-neutral mb-2">{member.role}</p>
                <p className="text-sm text-neutral">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
