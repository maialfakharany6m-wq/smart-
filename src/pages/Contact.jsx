import Section from "../components/Section";

export default function Contact() {
  return (
    <Section title="Contact Us" subtitle="CONNECT">

      <div className="grid md:grid-cols-2 gap-10">

        <div className="p-8 border rounded-xl">
          <p>Email: info@smartsmileway.com</p>
          <p>Phone: +20 155 920 2015</p>
          <p>Cairo, Egypt</p>
        </div>

        <div className="p-8 border rounded-xl">
          <input className="border p-3 w-full mb-4" placeholder="Name" />
          <input className="border p-3 w-full mb-4" placeholder="Email" />
          <textarea className="border p-3 w-full h-32" placeholder="Message" />
        </div>

      </div>

    </Section>
  );
}