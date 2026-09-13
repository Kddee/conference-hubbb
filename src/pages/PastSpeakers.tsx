import pankajImg from "@/assets/WhatsApp Image 2026-05-29 at 11.21.06 AM.jpeg";
import navinImg from "@/assets/navin.png";
import deepakSinghImg from "@/assets/WhatsApp Image 2026-07-25 at 10.08.48 AM.jpeg";
import talebHammadImg from "@/assets/image copy 15.png";
import souravSarkarImg from "@/assets/image copy 16.png";
import { PageHero } from "@/components/layout/PageHero";
import { Card } from "@/components/ui/card";
import { Globe, Sparkles, Mic, Presentation, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface Speaker {
  name: string;
  role: string;
  location: string;
  image: string;
}

const speakers: Speaker[] = [
  { name: "Prof. Dr. Alexander Bull", role: "IU International University", location: "Germany", image: "https://static.wixstatic.com/media/30814e_add55fc0895a4b0b9aebdd381f822484~mv2.jpeg", objectPosition: "center 20%" },
  { name: "Dr. Joe Perez", role: "NC Department of Health & Human Services", location: "Raleigh, NC, USA", image: "/speakers/dr-joe-perez.jpg", objectPosition: "center 20%" },
  { name: "Dr. Madeleine Pickles", role: "Associate Professor, Liverpool John Moores University", location: "United Kingdom", image: "/icaits26/dr.madeline-pickles.jpeg" },
  { name: "Dr. Aleksandra Gardasevic-Slavuljica", role: "Expert", location: "Montenegro", image: "https://static.wixstatic.com/media/30814e_bf1d23feb75d44208e57fb12c007e7ac~mv2.jpeg" },
  { name: "Dr. Carolina Barandiaran", role: "Academic Leader & Researcher, Academic Research & Innovation", location: "Argentina", image: "/speakers/dr-carolina-barandiaran.jpg" },
  { name: "Prof. Abdel Rahman Alzoubaidi", role: "Professor, Al Balqa Applied University", location: "Jordan", image: "https://static.wixstatic.com/media/30814e_e9b1616d369d4f1f8dc784bbb1379fc6~mv2.jpeg" },
  { name: "Dr. Yulia Kryvenko", role: "Istanbul Sabahattin Zaim University", location: "France", image: "https://static.wixstatic.com/media/30814e_1cc9e627ca8342d59e4122b9240e638d~mv2.png" },
  { name: "Jaco Visagie", role: "Professor of Statistics, North-West University", location: "South Africa", image: "/speakers/jaco-visagie.jpg", objectPosition: "center 20%" },
  { name: "Karl G. Sieg, M.D.", role: "University of Central Florida College of Medicine", location: "United States", image: "https://static.wixstatic.com/media/30814e_42822b0bd0f145f2a68dd68462fe499c~mv2.jpeg" },
  { name: "Prof. Cigdem Demir", role: "AHBV University, Ankara", location: "Turkey", image: "/icaits26/prof.Cigdem-demir.jpeg" },
  { name: "Dr. Tiansheng Yang", role: "University of South Wales", location: "United Kingdom", image: "https://static.wixstatic.com/media/30814e_3a6549a4d2904005a224db41ca5f9cd0~mv2.avif" },
  { name: "Dr. Danijela V. Pantović", role: "Assistant Professor", location: "Serbia", image: "https://static.wixstatic.com/media/30814e_b097c784e55f4e38837f599a1f7f735c~mv2.jpeg" },
  { name: "Dr. Aida Mehrad", role: "C3S Business School", location: "Spain", image: "https://static.wixstatic.com/media/502b14_2f32591e100346daa035a4aaf27ef7d7~mv2.jpeg" },
  { name: "Lawrence Mazaki Mashati", role: "Conference Patron | Community Development Professional, IMFC", location: "Kenya", image: "/speakers/lawrence-mashati.jpg" },
  { name: "Jim Saliba", role: "Principal Consultant", location: "San Jose, California", image: "/speakers/jim-saliba.png" },
  { name: "Mr. Akshay Sharma", role: "Pension Systems Expert", location: "USA", image: "/speakers/akshay-sharma.jpg" },
  { name: "Abhiram Sanjay Patil", role: "AI Engineer", location: "USA", image: "/icaits26/abhiram-sanjay-patil.png" },
  { name: "Abdullah Al Abri", role: "VP Sustainability, Sohar Port", location: "Oman", image: "https://static.wixstatic.com/media/30814e_e4eab5a58c524432a47ca4e3e9afffe0~mv2.jpeg" },
  { name: "Mr. Amber Rastogi", role: "Distributed Systems & Cloud Computing", location: "USA", image: "https://static.wixstatic.com/media/30814e_e16da5320136479198a3e09ce0193ff2~mv2.jpeg" },
  { name: "Anshuman Khandelwal", role: "Cloud Computing Architect", location: "USA", image: "https://static.wixstatic.com/media/30814e_2cb5972bc61d457eb6a1c8153a563e05~mv2.jpeg" },
  { name: "Aleksandra Ikonov", role: "Professor", location: "Serbia", image: "https://static.wixstatic.com/media/30814e_ba31cc42a6d34171bc4ac11bf014871e~mv2.jpeg" },
  { name: "Anup Gupta", role: "Associate Director – Digital Transformation Leader", location: "USA", image: "https://static.wixstatic.com/media/30814e_916aabc5c238468882d8066892ff6a27~mv2.jpg" },
  { name: "Anup Kagalkar", role: "Product Technical Expert", location: "United States", image: "https://static.wixstatic.com/media/30814e_38bae8e1c58e4626b639ff27e74b615f~mv2.jpeg" },
  { name: "Aynur Mahmudova", role: "Technical Manager, Saipem", location: "Azerbaijan", image: "https://static.wixstatic.com/media/30814e_096b8766915a49b9b4f964848f812618~mv2.jpg" },
  { name: "Bhavya Mehta", role: "Independent Researcher", location: "USA", image: "https://static.wixstatic.com/media/502b14_89220e1abdb549c79f1981b88df127d0~mv2.png" },
  { name: "Mr. Bhushan Balkrishna Chaudhari", role: "Senior Technology Lead", location: "New Jersey, USA", image: "/speakers/bhushan-chaudhari.jpg" },
  { name: "Dr. Ayoub Regragui", role: "Mohammed V University, Rabat", location: "Morocco", image: "https://static.wixstatic.com/media/30814e_01571faffb8f491e9d9719a975bdbc88~mv2.avif" },
  { name: "Deepak Singh", role: "Principal Solution Architect, Healthcare Technology (Health IT)", location: "USA", image: deepakSinghImg },
  { name: "Dr. Elizabeth Sarah George", role: "RV University", location: "India", image: "https://static.wixstatic.com/media/30814e_821d66fc49f64b71a44eb747ef514580~mv2.jpeg" },
  { name: "BERKANI Samir", role: "Professor, University of Bouerdes", location: "Algeria", image: "https://static.wixstatic.com/media/30814e_e76d7e27c8cd48b3845ce3627ec85821~mv2.jpeg" },
  { name: "Hardeep Singh Tiwana", role: "Golden Kubestronaut, The Kubernetes Show Creator", location: "USA", image: "/speakers/hardeep-singh-tiwana.jpg" },
  { name: "Hari Rowtu", role: "AI-Driven Technologies", location: "USA", image: "/speakers/hari-rowtu.jpg" },
  { name: "Dr. Darja Antolin Dresar", role: "Ph.D., Associate Professor", location: "Slovenia", image: "https://static.wixstatic.com/media/30814e_d89f6d1fda8143458c4f407543d1460f~mv2.jpeg" },
  { name: "Harikrishnan R. Pillai", role: "AI & Distributed Systems", location: "USA", image: "https://static.wixstatic.com/media/30814e_73c89054e75f4b3bb9bf0c838418960f~mv2.png" },
  { name: "Harsh Jangid", role: "Director of Engineering & Products", location: "USA", image: "/icaits26/harsh-jangid.png" },
  { name: "Dr. Dina Alkhodary", role: "Associate Professor of Business Administration, Middle East University", location: "Jordan", image: "/speakers/dr-dina-alkhodary.jpg" },
  { name: "Hastimal Jangid", role: "University of Missouri–Kansas City", location: "USA", image: "/icaits26/hastimal-jangid.png" },
  { name: "Hemang Upadhyay", role: "AI, E-commerce & Analytics", location: "USA", image: "https://static.wixstatic.com/media/30814e_d8f3f76a4383421eb967c779a89ac17f~mv2.jpeg" },
  { name: "Assoc. Prof. Dr. Muliati Hj. Sedek", role: "Deputy Director (Scholarship Excellence), CAES, Universiti Teknikal Malaysia Melaka (UTeM)", location: "Malaysia", image: "/speakers/dr-muliati-sedek.jpg" },
  { name: "Karthikeyan Srinivasan", role: "Software Engineering & Architecture", location: "USA", image: "https://static.wixstatic.com/media/30814e_57facf9d3e004a5794bee03a1ce9feb6~mv2.jpeg" },
  { name: "Manoj Bahirgonde", role: "Digital Transformation Leadership", location: "USA", image: "https://static.wixstatic.com/media/30814e_0f9939591f474b57b412a1f5f02a3efe~mv2.jpeg" },
  { name: "Dr. Edralin Rebancos Raro", role: "Assistant Professor", location: "Philippines", image: "https://static.wixstatic.com/media/30814e_cf15be7087af4a078f1254ff3c08fea8~mv2.jpeg" },
  { name: "Manuja Bandal", role: "Software Engineer & Innovator", location: "USA", image: "https://static.wixstatic.com/media/30814e_871155ce5f72470c95772f064886f06e~mv2.jpeg" },
  { name: "Mayank Atreya", role: "Technology & Engineering Leader, Enterprise Architecture & AI/ML", location: "USA", image: "/speakers/mayank-atreya.jpg" },
  { name: "Eka Devidze", role: "Chardins Voyages, International Black Sea University", location: "Georgia", image: "/speakers/dr-eka-devidze.jpg" },
  { name: "Dr. Mehwish (Mishy) Rashid", role: "Keiser University", location: "USA", image: "https://static.wixstatic.com/media/30814e_d030e1dbf7ef4028909beba2b99a69be~mv2.jpeg" },
  { name: "Mrugendra Madalagi", role: "Solution Architect", location: "USA", image: "/speakers/mrugendra-madalagi.jpg" },
  { name: "Emem Akpabio", role: "Invited Delegate, International Conference Participant", location: "South Africa", image: "https://static.wixstatic.com/media/30814e_2dad2d939abb4236bcb405093be55872~mv2.jpg" },
  { name: "Nandan Sharma", role: "Information Security Leader, BC Public Service", location: "Canada", image: "https://static.wixstatic.com/media/30814e_3cdb660543a146ab81e18da144efabad~mv2.jpg" },
  { name: "Navin Kumar Chhibber", role: "AI/ML, GenAI and Data Platforms Leader, Product Engineering and Digital Transformation Expert, USA", location: "USA", image: navinImg },
  { name: "Dr. Entela Shkodrani", role: "University Hospital Center, Tirana", location: "Albania", image: "https://static.wixstatic.com/media/30814e_1729c779d5bf4cbc9d0b4b2e1d51e148~mv2.jpeg" },
  { name: "Nilesh Charankar", role: "AI Technology Leader and Independent Researcher", location: "USA", image: "/speakers/nilesh-charankar.jpg" },
  { name: "Nomi Khedawala", role: "Sr. Technical Program Manager", location: "San Francisco", image: "https://static.wixstatic.com/media/30814e_4dddbaf5110540e7b8c0d5ed7826a8e5~mv2.jpeg" },
  { name: "Ezinne Esther Arisa", role: "Candy Rainbow Creations", location: "South Africa", image: "https://static.wixstatic.com/media/502b14_3adc2682f9064817b4728eca9cd4a0b1~mv2.jpeg" },
  { name: "Pankaj Arora", role: "Healthcare Supply Chain Transformation Leader, Raleigh, North Carolina", location: "USA", image: pankajImg },
  { name: "Parikshit Sahagal", role: "Technical Project Manager, CoStar Group Inc", location: "USA", image: "/speakers/parikshit-sahagal.jpg" },
  { name: "Dr. Firas Zeidan", role: "Higher Education & Research", location: "Lebanon", image: "https://static.wixstatic.com/media/30814e_571b3e70d8ff476f8b1272ef84538d8f~mv2.jpeg" },
  { name: "Piyush Shukla", role: "Technology & Engineering Leader, Enterprise Engineering & Cloud Leadership", location: "USA", image: "/speakers/piyush-shukla.jpg" },
  { name: "Ponsankar Shanmugam S", role: "Distributed & AI Systems", location: "USA", image: "https://static.wixstatic.com/media/30814e_4a4018f89ef94597bca4b870f45069b0~mv2.jpeg" },
  { name: "Dr. Ghazal Abdolbaghi", role: "Shahid Beheshti University, Tehran", location: "Iran", image: "/icaits26/Dr.Ghazal-Abdolbaghi.jpeg" },
  { name: "Pradeep Kachakayala", role: "Cloud Computing & AI Solutions", location: "USA", image: "https://static.wixstatic.com/media/30814e_45aeebc11e0045a8bd8941721d274f1a~mv2.png" },
  { name: "Prajakta Talathi", role: "Education Finance", location: "USA", image: "https://static.wixstatic.com/media/30814e_bf9d3d9fb4974bc0ba217b4bb03ea14d~mv2.jpg" },
  { name: "Gregg Clunis", role: "Founder, Kojo", location: "United States", image: "/speakers/gregg-clunis.jpg" },
  { name: "Prathap Raghavan", role: "Santander", location: "USA", image: "https://static.wixstatic.com/media/30814e_5167abbef7fa4549b18fcf6bdf6bbdbd~mv2.png" },
  { name: "Pravin Barapatre", role: "AI & Robotics Leader", location: "USA", image: "/speakers/pravin-barapatre.jpg" },
  { name: "Hassan Mohammad Karimi", role: "Researcher, Amirkabir University of Technology", location: "Iran", image: "/icaits26/hassan-mohammad-karimi.png" },
  { name: "Dr. Rahul Azmeera", role: "Independent Researcher, University Of The Cumberlands", location: "USA", image: "/icaits26/rahul-azmeera.png" },
  { name: "Mr. Rajaguru Ganesan", role: "System Modernization & Cloud", location: "USA", image: "https://static.wixstatic.com/media/30814e_7e8d8afea4824824b0a36dc883235730~mv2.jpeg" },
  { name: "Hicham ELKHOUAJA", role: "Researcher", location: "Morocco", image: "https://static.wixstatic.com/media/30814e_d1c8c65f9d4d4bd59632c05aa894aa71~mv2.jpeg" },
  { name: "Rajendra Ugrani", role: "AI, ML, Security", location: "USA", image: "https://static.wixstatic.com/media/30814e_bc3782d50a1d430d8cc0ab38bfa0b6c5~mv2.jpeg" },
  { name: "Mr. Rakesh Ramakrishna Pai", role: "Independent Researcher", location: "USA", image: "https://static.wixstatic.com/media/30814e_3885202ba5374de6b70a506164566564~mv2.jpeg" },
  { name: "Hina Shahbaz", role: "Principal, Progressive Model College", location: "Spain", image: "https://static.wixstatic.com/media/30814e_1d40f47c75c84e399f11834d905fdfca~mv2.jpeg" },
  { name: "Sandeep Kumar Khandelwal", role: "AI, DevOps & Cloud Computing Expert, Enterprise Cloud & AI Solutions", location: "USA", image: "/speakers/sandeep-kumar-khandelwal.jpg" },
  { name: "Sanjay Poddar", role: "Secure Cloud Strategist", location: "USA", image: "https://static.wixstatic.com/media/30814e_d78a35a5685040edb9f9ad90272fa830~mv2.jpeg" },
  { name: "Prof. Intakhab Alam Khan", role: "King Abdulaziz University & Visiting Prof, Samarkand State University", location: "Saudi Arabia", image: "/speakers/prof-intakhab-alam-khan.jpg" },
  { name: "Dr. Santosh Reddy Addula", role: "Department of Information Technology, University of the Cumberlands", location: "USA", image: "/speakers/dr-santosh-reddy-addula.png" },
  { name: "Mr. Saptarshi Debnath", role: "Scalable Systems & Cloud Architecture", location: "USA", image: "https://static.wixstatic.com/media/30814e_1b4918e0fd854271a429a912bcb71060~mv2.jpeg" },
  { name: "Irandoust-pakchin", role: "Associate Professor, University of Tabriz", location: "Iran", image: "https://static.wixstatic.com/media/30814e_105366170c1b4be7995469e3ae42f001~mv2.jpeg" },
  { name: "Mr. Satish Kabade", role: "Product Technical Expert", location: "New York, USA", image: "https://static.wixstatic.com/media/30814e_a31d532fb603465e846aceccb082827c~mv2.jpeg" },
  { name: "Mr. Satyabrata Pradhan", role: "Automotive Engineer", location: "USA", image: "https://static.wixstatic.com/media/502b14_603e64a9735f4b8d844465896d5fba01~mv2.png" },
  { name: "Dr. Jacinthe Rihan", role: "Professor, Ain Shams University, Cairo", location: "Egypt", image: "/icaits26/dr.jacinthe-rihan.png" },
  { name: "Shamal Chandrakant Bhole", role: "Technical Leader, Crypto Risk & Compliance Infrastructure", location: "USA", image: "/icaits26/shamal-chandrakant-bhole.png" },
  { name: "Shikhar Singhal", role: "Data Analytics & Insurance Tech", location: "USA", image: "https://static.wixstatic.com/media/30814e_00654a10251849539ec26353342c5dbf~mv2.jpg" },
  { name: "Jawaher Al-Zeidi", role: "English Language Lecturer", location: "Oman", image: "https://static.wixstatic.com/media/30814e_e23eb1bb3dab4126bc28ec5d56fc238f~mv2.jpg" },
  { name: "Sourav Sarkar", role: "Senior Worldwide Specialist Solutions Architect", location: "USA", image: souravSarkarImg },
  { name: "Dr. Sravanthi Dontu", role: "Independent Researcher & Corporate Professional, University of the Cumberlands", location: "USA", image: "/speakers/dr-sravanthi-dontu.jpg" },
  { name: "Kadenova Zuurakan Azhimamatovna", role: "Head of Laboratory", location: "Kyrgyzstan", image: "https://static.wixstatic.com/media/30814e_e8b8b992c26a49cf99035616610f5216~mv2.jpeg" },
  { name: "Sri Harsha Anand Pushkala", role: "Atlanticus Holdings", location: "USA", image: "https://static.wixstatic.com/media/30814e_cb5e002dc53f465688ce32280a1a93f3~mv2.jpeg" },
  { name: "Sudeep Annappa Shanubhog", role: "Tential Inc.", location: "USA", image: "https://static.wixstatic.com/media/30814e_d49cf5c47ba64a629f0bb3c0618967e6~mv2.jpeg" },
  { name: "Katarzyna Antosz", role: "Rzeszow University of Technology", location: "Poland", image: "https://static.wixstatic.com/media/30814e_d511f14d64114d2785f3aa065a35cbb9~mv2.jpeg" },
  { name: "Mr. Sudipkumar Ghanvat", role: "Sr. Director & Head - Data & AI", location: "United States", image: "https://static.wixstatic.com/media/30814e_72dbfb478bd540e9abbca0d3811dfe48~mv2.jpeg" },
  { name: "Suyash Rai", role: "Telecom Systems Expert", location: "USA", image: "https://static.wixstatic.com/media/30814e_73a9a72f460b41268da5f5a621c388c3~mv2.jpeg" },
  { name: "Lali Mikeladze", role: "Head of the BA Program in Tourism, Caucasus International University", location: "Georgia", image: "/speakers/lali-mikeladze.jpg" },
  { name: "Trupti Raikar", role: "SAP Technology Architect", location: "USA", image: "https://static.wixstatic.com/media/30814e_ca6075e6cef84116937f732636db6914~mv2.jpeg" },
  { name: "Utkarsh Sharma", role: "AI–FinTech Leader", location: "USA", image: "https://static.wixstatic.com/media/30814e_150514da48cb41598e25829a5c686936~mv2.jpeg" },
  { name: "Dr. Marek Wasiluk", role: "Clinical Research Expert, Poland", location: "Poland", image: "https://static.wixstatic.com/media/30814e_adff5072ac724ad69a6f9634c9d672e0~mv2.jpg" },
  { name: "Veeramani Sampathkumar", role: "Fintech Technology Leader", location: "USA", image: "https://static.wixstatic.com/media/30814e_9166636afad548f9aab5e2b2d1b35e97~mv2.jpeg" },
  { name: "Vijayachandar Sanikal", role: "IEEE Senior Member", location: "USA", image: "https://static.wixstatic.com/media/502b14_0269601f3e7b4a9ba877aec373e7f5ee~mv2.png" },
  { name: "Marghescu Cristina-Florentina", role: "University Politehnica of Bucharest", location: "Romania", image: "https://static.wixstatic.com/media/30814e_fb0f8a532d8a413abf8b61b143684fed~mv2.png" },
  { name: "Yesha Patel", role: "Senior Solution Architect", location: "United States", image: "https://static.wixstatic.com/media/30814e_6354e00a70db405c823ee8721026e4f1~mv2.avif" },
  { name: "Yukti Goyal", role: "Lead Software Engineer", location: "Tampa, FL", image: "https://static.wixstatic.com/media/30814e_f4baaf1857454707a3b7c0c8e5e10963~mv2.avif" },
  { name: "Dr. Mbombi Khizamane", role: "Advisory Board Member, Nursing College Limpopo", location: "South Africa", image: "/speakers/dr-mbombi.jpg" },
  { name: "Dr. Zoha Rahman", role: "Centre for Big Data & Machine Learning", location: "USA", image: "/speakers/dr-zoha-rahman.jpg" },
  { name: "Meryem Gurel", role: "Point Energy Intelligence Services", location: "Turkey", image: "https://static.wixstatic.com/media/30814e_6346862f510f41209c68b590a9da5215~mv2.jpeg" },
  { name: "Dr. Mohamed Rebbouj", role: "Hassan II University of Casablanca", location: "Morocco", image: "/speakers/dr-mohamed-rebbouj.jpg" },
  { name: "Mouhssin Ait El Mouden", role: "Ibn Tofail University", location: "Morocco", image: "https://static.wixstatic.com/media/30814e_b0c50d221b41483fa5ab8bfb50f719e5~mv2.avif" },
  { name: "Dr. Muhammad Tahir Jan", role: "Associate Professor", location: "Malaysia", image: "/speakers/tahir.jpeg" },
  { name: "Dr. Nadia Adnan", role: "Assistant Professor & Research Scientist", location: "Saudi Arabia", image: "/speakers/dr-nadia-adnan.jpg" },
  { name: "Nadine Zeinoun", role: "President, ICF Chapter Ottawa", location: "Lebanon", image: "https://static.wixstatic.com/media/30814e_332bdfce1cc5480f975812b50be780a8~mv2.jpeg" },
  { name: "Nikola Ilić", role: "Assistant Professor", location: "Serbia", image: "https://static.wixstatic.com/media/30814e_cf46fb74cc9446b287ec144125a1c54e~mv2.jpeg", objectPosition: "center 15%" },
  { name: "Nino Devidze", role: "Tourism Educator & Program Manager, The University of Georgia", location: "Georgia", image: "/speakers/nino-devidze.jpg" },
  { name: "Osman ARAYICI", role: "Professor, Mimar Sinan University", location: "Turkey", image: "https://static.wixstatic.com/media/30814e_f0f7674fd55346bfb2eaba4b48b3d669~mv2.jpeg" },
  { name: "Pearce Korb", role: "Clinical Educator", location: "United States", image: "https://static.wixstatic.com/media/30814e_2c8d6049087942e4842f1d6f434e040e~mv2.jpg" },
  { name: "Dr. Peter Kamau, CPA-K", role: "Founder & CEO, PETKAM Solutions Ltd | Govt. Consultant, National Employment Authority", location: "Kenya", image: "/speakers/dr-peter-kamau.jpg" },
  { name: "Dr. Prodhan Mahbub Ibna Seraj", role: "Associate Professor", location: "Bangladesh", image: "https://static.wixstatic.com/media/30814e_e2e5efeee2d54b41bd193b968595b89b~mv2.jpeg" },
  { name: "Dr. Rana El Khawand", role: "Technical Expert, UN-Habitat", location: "Lebanon", image: "/speakers/dr-rana-el-khawand.jpg" },
  { name: "RC Holmes", role: "Wealthy Results LLC", location: "USA", image: "https://static.wixstatic.com/media/502b14_25f6163bd55c4354a06f544c5e8ffa9e~mv2.png" },
  { name: "Prof. Rehab Hegazy, PhD", role: "Professor of Pharmacology, Medical Research and Clinical Studies Institute, National Research Centre (NRC)", location: "Egypt", image: "/speakers/prof-rehab-hegazy.jpg" },
  { name: "Roksolana Trach", role: "Independent Crypto Analyst & International Financial Market Analyst", location: "USA", image: "/icaits26/roksolana-trach.png" },
  { name: "Dr. Ruth Abiola Adimula", role: "University of Ilorin", location: "Nigeria", image: "https://static.wixstatic.com/media/30814e_164d8ef597e74e1a89f4e800e7c38a3f~mv2.jpeg" },
  { name: "Dr. Sadia Nazneen Karobi", role: "School of Environment and Life Sciences", location: "Global", image: "https://static.wixstatic.com/media/30814e_d7b9cf9312084baa9e85220ae3d0f383~mv2.png" },
  { name: "Sam Lawe", role: "Navico Group", location: "New Zealand", image: "https://static.wixstatic.com/media/30814e_485133b243e34681b345c2286ad708b2~mv2.jpeg" },
  { name: "Taleb Hammad", role: "DBA / Executive Director", location: "USA", image: talebHammadImg },
  { name: "Dr. Tintin Flores", role: "Advisory Board Member, Biomedical & Healthcare Technology, Valenzuela", location: "Philippines", image: "/speakers/dr-tintin-flores.jpg" },
  { name: "Assoc. Prof. Ts. Dr. Noor Suhana Binti Sulaiman", role: "Dean, Research & Postgraduate Management (JPPS), University College TATI (UC TATI)", location: "Malaysia", image: "/speakers/dr-noor-suhana.jpg" },
  { name: "Dr. Uma A. Alkhudary", role: "Middle East University", location: "Jordan", image: "/speakers/dr-uma-alkhudary.jpg" },
  { name: "Wiktoria Gromowa-Cieślik", role: "CEO & Chief Metrics Officer, Human-Tech Fusion (HTFusion)", location: "Poland", image: "/speakers/wiktoria-gromowa-cieslik.jpg" },
];

const PastSpeakers = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <PageHero
        eyebrow="Hall of Voices"
        title="Featured Past Speakers"
        description="Discover the distinguished experts, industry leaders, and academic pioneers who have shared their groundbreaking insights at Eminsphere summits."
        variant="particles"
      />

      {/* STATS */}
      <section className="container max-w-5xl relative z-20 -mt-8 sm:-mt-10 mb-12 sm:mb-20 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <Card className="glass-strong border-white/10 p-5 sm:p-6 rounded-2xl sm:rounded-3xl flex items-center gap-4 sm:gap-6 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
            <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <Mic className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-white mb-0.5 sm:mb-1">200+</div>
              <div className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground font-bold">Keynote Speakers</div>
            </div>
          </Card>
          <Card className="glass-strong border-white/10 p-5 sm:p-6 rounded-2xl sm:rounded-3xl flex items-center gap-4 sm:gap-6 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
            <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
              <Globe className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-white mb-0.5 sm:mb-1">50+</div>
              <div className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground font-bold">Nations Represented</div>
            </div>
          </Card>
          <Card className="glass-strong border-white/10 p-5 sm:p-6 rounded-2xl sm:rounded-3xl flex items-center gap-4 sm:gap-6 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
            <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <Presentation className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-white mb-0.5 sm:mb-1">500+</div>
              <div className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground font-bold">Hours of Insights</div>
            </div>
          </Card>
        </div>
      </section>

      {/* SINGLE UNIFIED SECTION: ALL FEATURED SPEAKERS */}
      <section className="container py-8 sm:py-16 relative z-10 max-w-7xl px-4">
        <div className="flex flex-col items-center text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-accent mb-3 sm:mb-4">
            <Sparkles className="h-4 w-4" /> Distinguished Scholars & Keynotes
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-3">All Featured Speakers</h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl">
            Researchers, academic pioneers, and industry leaders from across the globe who have presented at Eminsphere international conferences.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-6">
          {speakers.map((s, i) => (
            <Card key={i} className="overflow-hidden glass border-white/5 bg-card/30 hover:bg-card/60 transition-all duration-300 group flex flex-col items-center text-center p-3 sm:p-5 rounded-2xl sm:rounded-3xl hover:-translate-y-1 hover:border-primary/30">
              <div className="relative w-full aspect-square max-w-[120px] sm:max-w-[150px] mb-3 sm:mb-4 overflow-hidden rounded-xl sm:rounded-2xl border border-white/10 group-hover:border-primary/50 transition-all shadow-md shrink-0 bg-slate-950/80 flex items-center justify-center">
                {/* Ambient blur fill so frame is richly filled with matching image tones */}
                <img
                  src={s.image}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover blur-md opacity-35 scale-125 pointer-events-none"
                />
                {/* Contained image so the full face, head, and shoulders fit 100% inside the frame */}
                <img
                  src={s.image}
                  alt={s.name}
                  className="relative z-10 h-full w-full object-contain p-1 transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="font-serif font-bold text-white leading-tight mb-1 group-hover:text-primary transition-colors text-xs sm:text-sm">{s.name}</h3>
              <div className="text-[11px] sm:text-xs text-muted-foreground font-medium mb-2 sm:mb-3 line-clamp-2 leading-relaxed">{s.role}</div>
              {s.location && (
                <div className="mt-auto inline-flex items-center gap-1 text-[9px] sm:text-[10px] font-bold text-accent/80 uppercase tracking-wider group-hover:text-accent transition-colors">
                  <Globe className="h-3 w-3" /> {s.location}
                </div>
              )}
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 md:py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />
        <div className="container max-w-3xl relative z-10 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold text-white mb-4 sm:mb-6 text-balance">Take the Stage. <br/><span className="text-primary">Share Your Vision.</span></h2>
          <p className="text-base sm:text-xl text-muted-foreground mb-8 sm:mb-12 leading-relaxed">
            Are you leading groundbreaking research? Join our prestigious roster of global speakers and present your work to an international audience.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 sm:h-16 px-8 sm:px-12 rounded-full font-bold text-base sm:text-lg shadow-gold hover:-translate-y-1 transition-all w-full sm:w-auto text-center justify-center">
            <Link to="/registration">Apply to Speak <ArrowRight className="ml-3 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default PastSpeakers;
