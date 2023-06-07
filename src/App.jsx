import React from 'react';
import './App.css';

function App() {
  const projects = [
    {
      image: "https://images.pexels.com/photos/1446504/pexels-photo-1446504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Clean Water Initiative",
      description: "Providing access to clean and safe drinking water to communities in need. Our project focuses on implementing sustainable solutions, such as water filtration systems and wells, to ensure better health and sanitation for all."
    },
    {
      image: "https://images.pexels.com/photos/16850257/pexels-photo-16850257/free-photo-of-carpenter-teaching-two-young-boys-in-the-workshop.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Education for All",
      description: "Empowering underprivileged children through education. Our project aims to break the cycle of poverty by providing quality education, school supplies, and scholarships to children who lack access to educational opportunities."
    },
    {
      image: "https://images.pexels.com/photos/6472413/pexels-photo-6472413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Healthcare Outreach Program",
      description: "Improving healthcare access and promoting well-being in underserved areas. Our project offers medical camps, health education programs, and essential healthcare services to vulnerable communities, ensuring better health outcomes and a higher quality of life."
    },
    {
      image: "https://images.pexels.com/photos/16105713/pexels-photo-16105713/free-photo-of-group-of-paramedics-walking-through-a-demolished-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Disaster Relief Efforts",
      description: "Responding swiftly to natural disasters and humanitarian crises. Our project provides immediate relief, including food, shelter, and medical aid, to affected communities. We also focus on long-term recovery efforts, rebuilding infrastructure, and offering support for rehabilitation."
    },
    {
      image: "https://images.pexels.com/photos/6646853/pexels-photo-6646853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Food Security Program",
      description: "Addressing hunger and malnutrition by providing food aid, establishing community gardens, and promoting sustainable agricultural practices."
    },
    {
      image: "https://images.pexels.com/photos/1250346/pexels-photo-1250346.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Youth Empowerment Initiative",
      description: "Empowering and supporting young people through mentorship, vocational training, leadership development, and entrepreneurship programs."
    },
    {
      image: "https://images.pexels.com/photos/5584973/pexels-photo-5584973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Refugee Assistance Project",
      description: "Providing protection, essential services, and support to refugees and displaced persons, including shelter, healthcare, education, and livelihood opportunities."
    },
    {
      image: "https://images.pexels.com/photos/3580281/pexels-photo-3580281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Environmental Conservation Campaign",
      description: "Promoting environmental awareness, conservation efforts, and sustainable practices to protect ecosystems, combat climate change, and preserve biodiversity."
    },
    {
      image: "https://images.pexels.com/photos/8107691/pexels-photo-8107691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Empowering Women and Girls",
      description: "Advocating for women's rights, gender equality, and access to education, healthcare, economic opportunities, and ending gender-based violence."
    },
    {
      image: "https://images.pexels.com/photos/15891442/pexels-photo-15891442/free-photo-of-photo-of-a-boy-writing-in-his-notebook-at-school.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Education for Refugees",
      description: "Providing access to quality education for refugee children and youth, ensuring they have the opportunity to learn and develop skills for a better future."
    },
    {
      image: "https://images.pexels.com/photos/6097711/pexels-photo-6097711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Medical Outreach Program",
      description: "Organizing medical camps and mobile clinics to provide healthcare services, screenings, and treatments to remote and underserved communities."
    },
    {
      image: "https://images.pexels.com/photos/7698235/pexels-photo-7698235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Disability Inclusion Initiative",
      description: "Advocating for the rights and inclusion of persons with disabilities, providing assistive devices, rehabilitation services, and promoting equal opportunities."
    },
    {
      image: "https://images.pexels.com/photos/15861730/pexels-photo-15861730/free-photo-of-tents-in-a-refugee-camp.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Emergency Shelter Project",
      description: "Providing temporary shelters, emergency relief kits, and support to displaced populations affected by conflicts, natural disasters, or other crises."
    },
    {
      image: "https://images.pexels.com/photos/3280130/pexels-photo-3280130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Community Development Program",
      description: "Empowering communities through capacity-building, infrastructure development, and income-generation projects to improve their overall well-being and sustainability."
    },
    {
      image: "https://images.pexels.com/photos/2306793/pexels-photo-2306793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Promoting Gender Equality",
      description: "Promoting gender equality and women's empowerment through initiatives that address gender-based violence, access to education, and economic opportunities."
    }
  ];

  return (
    <div>
      <header>
        <h1>Harmony</h1>
        <h4>"Empower Humanity: Inspiring Change, Creating Hope"</h4>
      </header>
      <main>
        <section className='about-section'>
          <h2 style={{color: 'white', textShadow: '1px 2px 4px black'}}>Who we are</h2>
          <div className='about-description'>
            <p>
              Welcome to Harmony. We are a dedicated team of individuals passionate about making a positive impact on the lives of people in need. With a shared vision of a more compassionate and equitable world, we strive to create lasting change through our humanitarian efforts.
            </p>
            <p>
              Our mission is to provide assistance, support, and resources to vulnerable communities around the world. We believe that every person deserves access to basic necessities, opportunities for growth, and a chance to thrive. By addressing critical issues such as poverty, hunger, education, healthcare, and disaster relief, we aim to uplift those in need and foster sustainable development.
            </p>
            <p>
              At Harmony, we recognize the power of collective action and collaboration. We work closely with local communities, partner organizations, and volunteers to maximize our impact. By pooling our resources, knowledge, and expertise, we are able to implement effective solutions and create meaningful change.
            </p>
            <p>
              Join us in our journey to create a better world for everyone. Together, we can make a difference and inspire hope. Whether you choose to volunteer your time, make a donation, or participate in our ongoing projects, your contribution matters. Together, let's build a more compassionate and harmonious future.
            </p>
          </div>
        </section>
        <section>
          <h2>Projects</h2>
          <div className="projects-container">
            {projects.map((project, index) => (
              <div className="project-card" key={index}>
                <img src={project.image} alt={`Project ${index + 1}`} />
                <div className="project-overlay">
                  <div className="overlay-content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="contact-section">
          <div className="contact-description">
            <h2>Contact Us</h2>
            <p>
              If you have any questions, suggestions, or would like to get involved,
              please fill out the form below. You can also join as a volunteer, make a
              donation, or participate in our ongoing projects.
            </p>
          </div>
          <div className="contact-form">
            <form>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />

              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" required></textarea>

              <button type="submit">Submit</button>
            </form>
          </div>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Humanitarian Organization. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
