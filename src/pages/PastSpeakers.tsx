import ganeshImg from "@/assets/image copy 2.png";
import pankajImg from "@/assets/WhatsApp Image 2026-05-29 at 11.21.06 AM.jpeg";
import navinImg from "@/assets/navin.png";
import { PageHero } from "@/components/layout/PageHero";
import { Card } from "@/components/ui/card";
import { Globe, MapPin, Quote, Sparkles, Mic, Presentation, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const speakers = [
  { name: "Prof. (Dr.) Tanaji Dabade", role: "Navsahyadri Education Society Group of Institutions", location: "India", image: "https://static.wixstatic.com/media/30814e_85d4d1b8288f40749bae07d46b5a9683~mv2.jpeg" },
  { name: "Prof. Abdel Rahman Alzoubaidi", role: "Professor, Al Balqa Applied University", location: "Jordan", image: "https://static.wixstatic.com/media/30814e_e9b1616d369d4f1f8dc784bbb1379fc6~mv2.jpeg" },
  { name: "Abdullah Al Abri", role: "VP Sustainability, Sohar Port", location: "Oman", image: "https://static.wixstatic.com/media/30814e_e4eab5a58c524432a47ca4e3e9afffe0~mv2.jpeg" },
  { name: "Dr. Aida Mehrad", role: "C3S Business School", location: "Spain", image: "https://static.wixstatic.com/media/502b14_2f32591e100346daa035a4aaf27ef7d7~mv2.jpeg" },
  { name: "Aishwarya Tyagi", role: "10x Salesforce Certified, Global Process Analyst, Senior Solutions Consultant, San Francisco, USA", location: "USA", image: "https://static.wixstatic.com/media/30814e_9761c6907e784a2eaf242aa98ee4fb8c~mv2.jpg" },
  { name: "Akshay", role: "Speaker", location: "", image: "https://static.wixstatic.com/media/30814e_3aef18109d86468da8e5fbbf55d37268~mv2.jpg" },
  { name: "Mr. Akshay Sharma", role: "Pension Systems Expert", location: "USA", image: "https://ui-avatars.com/api/?name=Akshay+Sharma&background=00a896&color=fff&size=200" },
  { name: "Dr. Aleksandra Gardasevic-Slavuljica", role: "Expert", location: "Montenegro", image: "https://static.wixstatic.com/media/30814e_bf1d23feb75d44208e57fb12c007e7ac~mv2.jpeg" },
  { name: "Aleksandra Ikonov", role: "Professor", location: "Serbia", image: "https://static.wixstatic.com/media/30814e_ba31cc42a6d34171bc4ac11bf014871e~mv2.jpeg" },
  { name: "Mr. Amber Rastogi", role: "Distributed Systems & Cloud Computing", location: "USA", image: "https://static.wixstatic.com/media/30814e_e16da5320136479198a3e09ce0193ff2~mv2.jpeg" },
  { name: "Dr. Amit Kukker", role: "SRM Institute of Science and Technology", location: "India", image: "https://static.wixstatic.com/media/30814e_202af98a01b44a83a30ccb73a0e07ce8~mv2.jpeg" },
  { name: "Anshuman Khandelwal", role: "Cloud Computing Architect", location: "USA", image: "https://static.wixstatic.com/media/30814e_2cb5972bc61d457eb6a1c8153a563e05~mv2.jpeg" },
  { name: "Anup Kagalkar", role: "Product Technical Expert", location: "United States", image: "https://static.wixstatic.com/media/30814e_38bae8e1c58e4626b639ff27e74b615f~mv2.jpeg" },
  { name: "Aynur Mahmudova", role: "Technical Manager, Saipem", location: "Azerbaijan", image: "https://static.wixstatic.com/media/30814e_096b8766915a49b9b4f964848f812618~mv2.jpg" },
  { name: "Dr. Ayoub Regragui", role: "Mohammed V University, Rabat", location: "Morocco", image: "https://static.wixstatic.com/media/30814e_01571faffb8f491e9d9719a975bdbc88~mv2.avif" },
  { name: "BERKANI Samir", role: "Professor, University of Bouerdes", location: "Algeria", image: "https://static.wixstatic.com/media/30814e_e76d7e27c8cd48b3845ce3627ec85821~mv2.jpeg" },
  { name: "Bhavya Mehta", role: "Independent Researcher", location: "USA", image: "https://static.wixstatic.com/media/502b14_89220e1abdb549c79f1981b88df127d0~mv2.png" },
  { name: "Mr. Bhushan B. Chaudhari", role: "Senior Technology Lead", location: "USA", image: "/speakers/bhushan-chaudhari.jpg" },
  { name: "Mr. Bhushan Balkrishna Chaudhari", role: "Senior Technology Lead", location: "New Jersey, USA", image: "https://static.wixstatic.com/media/30814e_80c3ba4b5ad34cc1817090e1e30c7b8e~mv2.jpeg" },
  { name: "Dr. Danijela V. Pantović", role: "Assistant Professor", location: "Serbia", image: "https://static.wixstatic.com/media/30814e_b097c784e55f4e38837f599a1f7f735c~mv2.jpeg" },
  { name: "Dr. Darja Antolin Dresar", role: "Ph.D., Associate Professor", location: "Slovenia", image: "https://static.wixstatic.com/media/30814e_d89f6d1fda8143458c4f407543d1460f~mv2.jpeg" },
  { name: "Prof. Deepak K. Sharma", role: "Co-Convener | Head of AIDS and IQAC", location: "India", image: "https://ui-avatars.com/api/?name=Deepak+Sharma&background=00a896&color=fff&size=200" },
  { name: "Prof. Dr. Alexander Bull", role: "IU International University", location: "Germany", image: "https://static.wixstatic.com/media/30814e_add55fc0895a4b0b9aebdd381f822484~mv2.jpeg" },
  { name: "Dr. Edralin Rebancos Raro", role: "Assistant Professor", location: "Philippines", image: "https://static.wixstatic.com/media/30814e_cf15be7087af4a078f1254ff3c08fea8~mv2.jpeg" },
  { name: "Dr. Elizabeth Sarah George", role: "RV University", location: "India", image: "https://static.wixstatic.com/media/30814e_821d66fc49f64b71a44eb747ef514580~mv2.jpeg" },
  { name: "Dr. Entela Shkodrani", role: "University Hospital Center, Tirana", location: "Albania", image: "https://static.wixstatic.com/media/30814e_1729c779d5bf4cbc9d0b4b2e1d51e148~mv2.jpeg" },
  { name: "Ezinne Esther Arisa", role: "Candy Rainbow Creations", location: "South Africa", image: "https://static.wixstatic.com/media/502b14_3adc2682f9064817b4728eca9cd4a0b1~mv2.jpeg" },
  { name: "Dr. Firas Zeidan", role: "Higher Education & Research", location: "Lebanon", image: "https://static.wixstatic.com/media/30814e_571b3e70d8ff476f8b1272ef84538d8f~mv2.jpeg" },
  { name: "Dr. Ganesh Hinge", role: "Principal, Navsahyadri Group of Institutes, College of Engineering", location: "India", image: ganeshImg },
  { name: "Gregg Clunis", role: "Founder, Kojo", location: "United States", image: "/speakers/gregg-clunis.jpg" },
  { name: "Hari Rowtu", role: "AI-Driven Technologies", location: "USA", image: "/speakers/hari-rowtu.jpg" },
  { name: "Harikrishnan R. Pillai", role: "AI & Distributed Systems", location: "USA", image: "https://static.wixstatic.com/media/30814e_73c89054e75f4b3bb9bf0c838418960f~mv2.png" },
  { name: "Hemang Upadhyay", role: "AI, E-commerce & Analytics", location: "USA", image: "https://static.wixstatic.com/media/30814e_d8f3f76a4383421eb967c779a89ac17f~mv2.jpeg" },
  { name: "Hicham ELKHOUAJA", role: "Researcher", location: "Morocco", image: "https://static.wixstatic.com/media/30814e_d1c8c65f9d4d4bd59632c05aa894aa71~mv2.jpeg" },
  { name: "Hina Shahbaz", role: "Principal, Progressive Model College", location: "Spain", image: "https://static.wixstatic.com/media/30814e_1d40f47c75c84e399f11834d905fdfca~mv2.jpeg" },
  { name: "Irandoust-pakchin", role: "Associate Professor, University of Tabriz", location: "Iran", image: "https://static.wixstatic.com/media/30814e_105366170c1b4be7995469e3ae42f001~mv2.jpeg" },
  { name: "Jawaher Al-Zeidi", role: "English Language Lecturer", location: "Oman", image: "https://static.wixstatic.com/media/30814e_e23eb1bb3dab4126bc28ec5d56fc238f~mv2.jpg" },
  { name: "Jim Saliba", role: "Principal Consultant", location: "San Jose, California", image: "/speakers/jim-saliba.png" },
  { name: "Dr. Jitendra Pandey", role: "Technical Program Committee Chair | Senior Faculty Member, Middle East College", location: "Oman", image: "https://static.wixstatic.com/media/30814e_bf66c69035bc4e41bc50c2345187c6f2~mv2.jpeg" },
  { name: "Dr. Joe Perez", role: "NC Department of Health & Human Services", location: "Raleigh, NC, USA", image: "/speakers/dr-joe-perez.jpg" },
  { name: "Kadenova Zuurakan Azhimamatovna", role: "Head of Laboratory", location: "Kyrgyzstan", image: "https://static.wixstatic.com/media/30814e_e8b8b992c26a49cf99035616610f5216~mv2.jpeg" },
  { name: "Karan Kumar Ratra", role: "Retail Technology", location: "USA", image: "https://static.wixstatic.com/media/30814e_b013ae4c49494f099151f25bbffb92fe~mv2.jpeg" },
  { name: "Karl G. Sieg, M.D.", role: "University of Central Florida College of Medicine", location: "United States", image: "https://static.wixstatic.com/media/30814e_42822b0bd0f145f2a68dd68462fe499c~mv2.jpeg" },
  { name: "Karthikeyan Srinivasan", role: "Software Engineering & Architecture", location: "USA", image: "https://static.wixstatic.com/media/30814e_57facf9d3e004a5794bee03a1ce9feb6~mv2.jpeg" },
  { name: "Katarzyna Antosz", role: "Rzeszow University of Technology", location: "Poland", image: "https://static.wixstatic.com/media/30814e_d511f14d64114d2785f3aa065a35cbb9~mv2.jpeg" },
  { name: "Lawrence Mazaki Mashati", role: "Conference Patron | Community Development Professional, IMFC", location: "Kenya", image: "https://static.wixstatic.com/media/502b14_ec9a529cdc7c4e6e852442836e4fed51~mv2.png" },
  { name: "Manoj Bahirgonde", role: "Digital Transformation Leadership", location: "USA", image: "https://static.wixstatic.com/media/30814e_0f9939591f474b57b412a1f5f02a3efe~mv2.jpeg" },
  { name: "Manuja Bandal", role: "Software Engineer & Innovator", location: "USA", image: "https://static.wixstatic.com/media/30814e_871155ce5f72470c95772f064886f06e~mv2.jpeg" },
  { name: "Dr. Marek Wasiluk", role: "Clinical Research Expert, Poland", location: "Poland", image: "https://static.wixstatic.com/media/30814e_adff5072ac724ad69a6f9634c9d672e0~mv2.jpg" },
  { name: "Marghescu Cristina-Florentina", role: "University Politehnica of Bucharest", location: "Romania", image: "https://static.wixstatic.com/media/30814e_fb0f8a532d8a413abf8b61b143684fed~mv2.png" },
  { name: "Dr. Mehwish (Mishy) Rashid", role: "Keiser University", location: "USA", image: "https://static.wixstatic.com/media/30814e_d030e1dbf7ef4028909beba2b99a69be~mv2.jpeg" },
  { name: "Dr. Mohamed Rebbouj", role: "Hassan II University of Casablanca", location: "Morocco", image: "https://static.wixstatic.com/media/30814e_1fbcfb0ce35f425eabb9dd005a658e05~mv2.jpeg" },
  { name: "Mouhssin Ait El Mouden", role: "Ibn Tofail University", location: "Morocco", image: "https://static.wixstatic.com/media/30814e_b0c50d221b41483fa5ab8bfb50f719e5~mv2.avif" },
  { name: "Mrugendra Madalagi", role: "Solution Architect", location: "USA", image: "https://static.wixstatic.com/media/30814e_91f0775a99254778a49bbb97171dfadb~mv2.jpeg" },
  { name: "Dr. Muhammad Tahir Jan", role: "Associate Professor", location: "Malaysia", image: "https://static.wixstatic.com/media/30814e_c8a29d72204a4175811ef562943091af~mv2.jpeg" },
  { name: "Dr. Nadia Adnan", role: "Assistant Professor & Research Scientist", location: "Saudi Arabia", image: "https://static.wixstatic.com/media/30814e_68479290bb114146b46b56f021a75155~mv2.png" },
  { name: "Nadine Zeinoun", role: "President, ICF Chapter Ottawa", location: "Lebanon", image: "https://static.wixstatic.com/media/30814e_332bdfce1cc5480f975812b50be780a8~mv2.jpeg" },
  { name: "Navin Kumar Chhibber", role: "AI/ML, GenAI and Data Platforms Leader, Product Engineering and Digital Transformation Expert, USA", location: "USA", image: navinImg },
  { name: "Prof. Neha Singh", role: "Assistant Professor", location: "India", image: "https://static.wixstatic.com/media/30814e_f258ef8fd1a74b9b9c778f12bcdc9128~mv2.jpeg" },
  { name: "Nikola Ilić", role: "Assistant Professor", location: "Serbia", image: "https://static.wixstatic.com/media/30814e_cf46fb74cc9446b287ec144125a1c54e~mv2.jpeg" },
  { name: "Nilesh Charankar", role: "AI Technology Leader and Independent Researcher", location: "USA", image: "https://static.wixstatic.com/media/30814e_70debe4180c34f9f83be4d5219c41358~mv2.jpeg" },
  { name: "Nomi Khedawala", role: "Sr. Technical Program Manager", location: "San Francisco", image: "https://static.wixstatic.com/media/30814e_4dddbaf5110540e7b8c0d5ed7826a8e5~mv2.jpeg" },
  { name: "Osman ARAYICI", role: "Professor, Mimar Sinan University", location: "Turkey", image: "https://static.wixstatic.com/media/30814e_f0f7674fd55346bfb2eaba4b48b3d669~mv2.jpeg" },
  { name: "Pankaj Arora", role: "Healthcare Supply Chain Transformation Leader, Raleigh, North Carolina", location: "USA", image: pankajImg },
  { name: "Pearce Korb", role: "Clinical Educator", location: "United States", image: "https://static.wixstatic.com/media/30814e_2c8d6049087942e4842f1d6f434e040e~mv2.jpg" },
  { name: "Ponsankar Shanmugam S", role: "Distributed & AI Systems", location: "USA", image: "https://static.wixstatic.com/media/30814e_4a4018f89ef94597bca4b870f45069b0~mv2.jpeg" },
  { name: "Pradeep Kachakayala", role: "Cloud Computing & AI Solutions", location: "USA", image: "https://static.wixstatic.com/media/30814e_45aeebc11e0045a8bd8941721d274f1a~mv2.png" },
  { name: "Prajakta Talathi", role: "Education Finance", location: "USA", image: "https://static.wixstatic.com/media/30814e_bf9d3d9fb4974bc0ba217b4bb03ea14d~mv2.jpg" },
  { name: "Dr. Prashant Patil", role: "NGI", location: "India", image: "https://static.wixstatic.com/media/30814e_c250e513d1c9430aac76d8bdd850e13e~mv2.jpg" },
  { name: "Prathap Raghavan", role: "Santander", location: "USA", image: "https://static.wixstatic.com/media/30814e_5167abbef7fa4549b18fcf6bdf6bbdbd~mv2.png" },
  { name: "Pravin Barapatre", role: "AI & Robotics Leader", location: "USA", image: "https://static.wixstatic.com/media/30814e_b190cb540fe940dcb0c96cd2ceab143f~mv2.png" },
  { name: "Dr. Prodhan Mahbub Ibna Seraj", role: "Associate Professor", location: "Bangladesh", image: "https://static.wixstatic.com/media/30814e_e2e5efeee2d54b41bd193b968595b89b~mv2.jpeg" },
  { name: "Mr. Rajaguru Ganesan", role: "System Modernization & Cloud", location: "USA", image: "https://static.wixstatic.com/media/30814e_7e8d8afea4824824b0a36dc883235730~mv2.jpeg" },
  { name: "Rajendra Ugrani", role: "AI, ML, Security", location: "USA", image: "https://static.wixstatic.com/media/30814e_bc3782d50a1d430d8cc0ab38bfa0b6c5~mv2.jpeg" },
  { name: "Mr. Rakesh Ramakrishna Pai", role: "Independent Researcher", location: "USA", image: "https://static.wixstatic.com/media/30814e_3885202ba5374de6b70a506164566564~mv2.jpeg" },
  { name: "Dr. Rana El Khawand", role: "UN-Habitat", location: "UN HABITAT", image: "https://static.wixstatic.com/media/502b14_e3b96c6fde384f0ba16dd14be8710af3~mv2.png" },
  { name: "Dr. Ranà El Khawand", role: "Technical Expert (UN-Habitat)", location: "Lebanon", image: "https://static.wixstatic.com/media/30814e_c0812b3e98ff416db27e799833d12e86~mv2.jpeg" },
  { name: "Dr. Ratna Raja Kumar Jambi", role: "G S Moze College of Engineering", location: "India", image: "https://static.wixstatic.com/media/30814e_68b76caedcdf48b6988367c0c06ab3c8~mv2.jpeg" },
  { name: "Dr. Ratnaraja Kumar Jambi", role: "Conference Convener | Principal, G. S. Moze COE", location: "India", image: "https://static.wixstatic.com/media/30814e_68b76caedcdf48b6988367c0c06ab3c8~mv2.jpeg" },
  { name: "RC Holmes", role: "Wealthy Results LLC", location: "USA", image: "https://static.wixstatic.com/media/502b14_25f6163bd55c4354a06f544c5e8ffa9e~mv2.png" },
  { name: "Roksolana Trach", role: "Independent Crypto Analyst & International Financial Market Analyst", location: "USA", image: "/icaits26/roksolana-trach.png" },
  { name: "Dr. Ruth Abiola Adimula", role: "University of Ilorin", location: "Nigeria", image: "https://static.wixstatic.com/media/30814e_164d8ef597e74e1a89f4e800e7c38a3f~mv2.jpeg" },
  { name: "Dr. Sadia Nazneen Karobi", role: "School of Environment and Life Sciences", location: "Global", image: "https://static.wixstatic.com/media/30814e_d7b9cf9312084baa9e85220ae3d0f383~mv2.png" },
  { name: "Sanjay Poddar", role: "Secure Cloud Strategist", location: "USA", image: "https://static.wixstatic.com/media/30814e_d78a35a5685040edb9f9ad90272fa830~mv2.jpeg" },
  { name: "Mr. Saptarshi Debnath", role: "Scalable Systems & Cloud Architecture", location: "USA", image: "https://static.wixstatic.com/media/30814e_1b4918e0fd854271a429a912bcb71060~mv2.jpeg" },
  { name: "Mr. Satish Kabade", role: "Product Technical Expert", location: "New York, USA", image: "https://static.wixstatic.com/media/30814e_a31d532fb603465e846aceccb082827c~mv2.jpeg" },
  { name: "Mr. Satyabrata Pradhan", role: "Automotive Engineer", location: "USA", image: "https://static.wixstatic.com/media/502b14_603e64a9735f4b8d844465896d5fba01~mv2.png" },
  { name: "Dr. Shashi Bala Rai", role: "Panipat Institute of Engineering & Technology, Haryana", location: "India", image: "https://static.wixstatic.com/media/30814e_4be5926d8adc4e43bff352ea1ccb6c2a~mv2.jpeg" },
  { name: "Shikhar Singhal", role: "Data Analytics & Insurance Tech", location: "USA", image: "https://static.wixstatic.com/media/30814e_00654a10251849539ec26353342c5dbf~mv2.jpg" },
  { name: "Hon. Shri. Rambhau Moze", role: "Chief Patron | President, Former MLA", location: "India", image: "https://ui-avatars.com/api/?name=Rambhau+Moze&background=f7b731&color=fff&size=200" },
  { name: "Prof. Shweta N. Banait", role: "Assistant Professor", location: "India", image: "https://static.wixstatic.com/media/30814e_110f0c5464f34aea993c7055dac271b2~mv2.jpeg" },
  { name: "Prof. Shweta N. Bansal", role: "D.Y. Patil College of Engineering", location: "India", image: "https://ui-avatars.com/api/?name=Shweta+Bansal&background=1a3d5c&color=fff&size=200" },
  { name: "Shyam Kumar Gajula", role: "Cybersecurity Researcher", location: "United States", image: "https://static.wixstatic.com/media/30814e_c5f4a33e93c34938bf4f267806ac057c~mv2.jpg" },
  { name: "Sri Harsha Anand Pushkala", role: "Atlanticus Holdings", location: "USA", image: "https://static.wixstatic.com/media/30814e_cb5e002dc53f465688ce32280a1a93f3~mv2.jpeg" },
  { name: "Sudeep Annappa Shanubhog", role: "Tential Inc.", location: "USA", image: "https://static.wixstatic.com/media/30814e_d49cf5c47ba64a629f0bb3c0618967e6~mv2.jpeg" },
  { name: "Mr. Sudipkumar Ghanvat", role: "Sr. Director & Head - Data & AI", location: "United States", image: "https://static.wixstatic.com/media/30814e_72dbfb478bd540e9abbca0d3811dfe48~mv2.jpeg" },
  { name: "Suyash Rai", role: "Telecom Systems Expert", location: "USA", image: "https://static.wixstatic.com/media/30814e_73a9a72f460b41268da5f5a621c388c3~mv2.jpeg" },
  { name: "Dr. Thillainayagam Sankaravel", role: "MedArb International", location: "India", image: "https://static.wixstatic.com/media/502b14_798238cd07c2464b8935f17ff4bc40be~mv2.png" },
  { name: "Dr. Tiansheng Yang", role: "University of South Wales", location: "United Kingdom", image: "https://static.wixstatic.com/media/30814e_3a6549a4d2904005a224db41ca5f9cd0~mv2.avif" },
  { name: "Trupti Raikar", role: "SAP Technology Architect", location: "USA", image: "https://static.wixstatic.com/media/30814e_ca6075e6cef84116937f732636db6914~mv2.jpeg" },
  { name: "Dr. Uma A. Alkhudary", role: "Middle East University", location: "Jordan", image: "https://ui-avatars.com/api/?name=Uma+Alkhudary&background=f7b731&color=fff&size=200" },
  { name: "Dr. Ushadevi Patil", role: "Co-Convener | Dean of R&D", location: "India", image: "https://ui-avatars.com/api/?name=Ushadevi+Patil&background=ff6b35&color=fff&size=200" },
  { name: "Utkarsh Sharma", role: "AI–FinTech Leader", location: "USA", image: "https://static.wixstatic.com/media/30814e_150514da48cb41598e25829a5c686936~mv2.jpeg" },
  { name: "Veeramani Sampathkumar", role: "Fintech Technology Leader", location: "USA", image: "https://static.wixstatic.com/media/30814e_9166636afad548f9aab5e2b2d1b35e97~mv2.jpeg" },
  { name: "Vijayachandar Sanikal", role: "IEEE Senior Member", location: "USA", image: "https://static.wixstatic.com/media/502b14_0269601f3e7b4a9ba877aec373e7f5ee~mv2.png" },
  { name: "Dr. Walida Ounruean", role: "International Education Ambassador", location: "Thailand", image: "https://static.wixstatic.com/media/30814e_73060115e6b34cb882286565559ff5e2~mv2.jpeg" },
  { name: "Yesha Patel", role: "Senior Solution Architect", location: "United States", image: "https://static.wixstatic.com/media/30814e_6354e00a70db405c823ee8721026e4f1~mv2.avif" },
  { name: "Yukti Goyal", role: "Lead Software Engineer", location: "Tampa, FL", image: "https://static.wixstatic.com/media/30814e_f4baaf1857454707a3b7c0c8e5e10963~mv2.avif" },
  { name: "Dr. Yulia Kryvenko", role: "Istanbul Sabahattin Zaim University", location: "France", image: "https://static.wixstatic.com/media/30814e_1cc9e627ca8342d59e4122b9240e638d~mv2.png" },
  { name: "Dr. Zoha Rahman", role: "Centre for Big Data & Machine Learning", location: "USA", image: "https://ui-avatars.com/api/?name=Zoha+Rahman&background=1e3a5f&color=fff&size=200" },
];

const PastSpeakers = () => {
  const featured = speakers.slice(0, 6);
  const globalVoices = speakers.slice(6);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <PageHero
        eyebrow="Hall of Voices"
        title="Our Global Speakers"
        description="Discover the distinguished experts, industry leaders, and academic pioneers who have shared their groundbreaking insights at Eminsphere summits."
        variant="particles"
      />

      {/* STATS */}
      <section className="container max-w-5xl relative z-20 -mt-10 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="glass-strong border-white/10 p-6 rounded-3xl flex items-center gap-6 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
            <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <Mic className="h-6 w-6 text-primary" />
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-1">200+</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Keynote Speakers</div>
            </div>
          </Card>
          <Card className="glass-strong border-white/10 p-6 rounded-3xl flex items-center gap-6 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
            <div className="h-14 w-14 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
              <Globe className="h-6 w-6 text-accent" />
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-1">50+</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Nations Represented</div>
            </div>
          </Card>
          <Card className="glass-strong border-white/10 p-6 rounded-3xl flex items-center gap-6 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
            <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <Presentation className="h-6 w-6 text-primary" />
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-1">500+</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Hours of Insights</div>
            </div>
          </Card>
        </div>
      </section>

      {/* FEATURED KEYNOTES */}
      <section className="container py-16 relative z-10 max-w-7xl">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-accent mb-4">
            <Sparkles className="h-4 w-4" /> Distinguished Experts
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">Featured Keynotes</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((s, i) => (
            <Card key={i} className="relative overflow-hidden group glass border-white/5 bg-card/40 hover:bg-card/80 transition-all duration-500 rounded-[2rem] p-8 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(152,227,152,0.15)] flex flex-col items-center text-center">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors pointer-events-none" />
              
              <div className="relative w-full aspect-[4/4.5] max-w-[200px] mb-6 overflow-hidden rounded-2xl border-2 border-primary/20 bg-muted/60 shadow-lg group-hover:border-accent/50 group-hover:shadow-xl transition-all">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
                <img src={s.image} alt={s.name} className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              </div>
              
              <h3 className="font-serif text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{s.name}</h3>
              <p className="text-muted-foreground font-medium mb-6 leading-relaxed">{s.role}</p>
              
              {s.location && (
                <div className="mt-auto inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-white tracking-widest uppercase shadow-sm group-hover:bg-accent/10 group-hover:border-accent/30 group-hover:text-accent transition-colors">
                  <MapPin className="h-3 w-3" /> {s.location}
                </div>
              )}
            </Card>
          ))}
        </div>
      </section>

      {/* GLOBAL VOICES */}
      <section className="bg-primary/5 border-y border-white/5 py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="container relative z-10 max-w-7xl">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">Global Voices</h2>
            <p className="text-xl text-muted-foreground">Researchers and practitioners from across the world.</p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {globalVoices.map((s, i) => (
              <Card key={i} className="overflow-hidden glass border-white/5 bg-card/30 hover:bg-card/60 transition-all duration-300 group flex flex-col items-center text-center p-6 rounded-3xl hover:-translate-y-1 hover:border-primary/30">
                <div className="relative w-full aspect-[4/4.5] max-w-[120px] mb-4 overflow-hidden rounded-xl border border-white/10 group-hover:border-primary/50 transition-colors shadow-md shrink-0">
                  <img src={s.image} alt={s.name} className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105" loading="lazy" />
                </div>
                <h3 className="font-serif font-bold text-white leading-tight mb-1 group-hover:text-primary transition-colors text-sm">{s.name}</h3>
                <div className="text-xs text-muted-foreground font-medium mb-3 line-clamp-2">{s.role}</div>
                {s.location && (
                  <div className="mt-auto inline-flex items-center gap-1 text-[10px] font-bold text-accent/70 uppercase tracking-wider group-hover:text-accent transition-colors">
                    <Globe className="h-3 w-3" /> {s.location}
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />
        <div className="container max-w-3xl relative z-10">
          <Quote className="h-16 w-16 mx-auto text-primary/30 mb-8" />
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 text-balance">Take the Stage. <br/><span className="text-primary">Share Your Vision.</span></h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Are you leading groundbreaking research? Join our prestigious roster of global speakers and present your work to an international audience.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground h-16 px-12 rounded-full font-bold text-lg shadow-gold hover:-translate-y-1 transition-all">
            <Link to="/registration">Apply to Speak <ArrowRight className="ml-3 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default PastSpeakers;
