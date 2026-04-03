import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-50 py-20 text-center">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>

      <div className="flex justify-center gap-6 text-xl">
        <a href="#"><FaEnvelope /></a>
        <a href="#"><FaGithub /></a>
        <a href="#"><FaLinkedin /></a>
      </div>
    </section>
  )
}