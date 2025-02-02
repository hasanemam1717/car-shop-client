import { motion } from "framer-motion";

const Testimonials = () => {
  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Hasan Emam",
      role: "Car Enthusiast",
      comment:
        "This is the best car dealership I've ever worked with. Their service is top-notch!",
      image:
        "https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?t=st=1738326623~exp=1738330223~hmac=1b373c63b33d7abb5aa9ffaa1213289348f87ee1ecb628fb021a9a009d8a41a9&w=1380", // Replace with actual image URL
    },
    {
      id: 2,
      name: "K.M Ariful",
      role: "Car Collector",
      comment:
        "I found my dream car here. The team was very helpful and professional.",
      image:
        "https://img.freepik.com/free-photo/brunet-man-with-round-eyeglasses_273609-10124.jpg?t=st=1738326754~exp=1738330354~hmac=f19b70fb5323dee5010ec39d0d676dd38adaf8801f4bf62854ed880e9897a63a&w=1380", // Replace with actual image URL
    },
    {
      id: 3,
      name: "Alen Shopon",
      role: "Racing Driver",
      comment:
        "The quality of cars here is unmatched. Highly recommend this place!",
      image:
        "https://img.freepik.com/free-photo/young-bearded-man-with-white-t-shirt_273609-7190.jpg?t=st=1738326789~exp=1738330389~hmac=6cf3aa78d70c20345d2408e3264e77e06260b8c35e2d7b6e7af82ed3fb4c879d&w=1380", // Replace with actual image URL
    },
  ];

  return (
    <div
      className="relative py-16 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://img.freepik.com/free-photo/young-bearded-man-with-white-t-shirt_273609-7190.jpg?t=st=1738326789~exp=1738330389~hmac=6cf3aa78d70c20345d2408e3264e77e06260b8c35e2d7b6e7af82ed3fb4c879d&w=1380')`, // Replace with your background image URL
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-950 bg-opacity-50"></div>

      {/* Content */}
      <div className="relative container mx-auto px-4">
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="bg-gray-900 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {/* Testimonial Image */}
              <div className="flex justify-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full object-cover"
                />
              </div>

              {/* Testimonial Content */}
              <div className="mt-4 text-center text-white">
                <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                <p className="text-white">{testimonial.role}</p>
                <p className="mt-4 text-white">{testimonial.comment}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
