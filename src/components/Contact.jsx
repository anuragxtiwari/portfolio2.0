import { FaGithub, FaLinkedin, FaEnvelope  } from 'react-icons/fa'
import { FaSquareInstagram } from 'react-icons/fa6'
import { SiLeetcode } from "react-icons/si";
export default function Contact() {
  return (
    <section id="contact" className="bg-gray-50 py-20 text-center relative overflow-hidden">
      {/* Paper Planes */}
      <div className="paper-plane plane1"></div>
      <div className="paper-plane plane2"></div>
      <div className="paper-plane plane3"></div>
      <div className="paper-plane plane4"></div>
      <div className="paper-plane plane5"></div>

      <h2 className="text-3xl font-bold mb-6">Contact</h2>

      <div className="flex justify-center gap-6 text-xl">
        <a href="mailto:anuragxtiwari@gmail.com"><FaEnvelope /></a>
        <a href="https://github.com/anuragxtiwari" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/anurag-tiwari-352226300" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://www.instagram.com/include.anurag" target="_blank" rel="noopener noreferrer"><FaSquareInstagram /></a>
        <a href="https://leetcode.com/u/anuragxtiwari/" target="_blank" rel="noopener noreferrer"><SiLeetcode /></a>
      </div>
    </section>
  )
}