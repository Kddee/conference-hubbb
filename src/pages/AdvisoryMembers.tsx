import { PageHero } from "@/components/layout/PageHero";
import { Card } from "@/components/ui/card";
import { Globe } from "lucide-react";
import navinImg from "@/assets/navin.png";

// Removing duplicates from the provided data
const advisoryMembers = [
  // Temporarily removed: Dr. Walida Ounruean (Director & Senior Research Fellow, Innovora Mind LLC, Thailand)
  // { name: "Dr. Walida Ounruean", role: "Head Advisory Board Member, Curriculum and Instruction, Faculty of Education, Uttaradit Rajabhat University", location: "Thailand", image: "https://static.wixstatic.com/media/30814e_ac6c40d612254293a4f1f4479dfd7b61~mv2.avif" },
  { name: "Prof. Deepak K. Sharma", role: "Head Advisory Board Member, Head EnTC, NESGI", location: "India", image: "https://static.wixstatic.com/media/30814e_3b46f80d696f49b2b7fd6ebc4a1e9ee3~mv2.jpeg" },
  // Temporarily removed: Dr. Katarzyna Antosz (Board Member & Research Strategist, European Academy of Engineering Sciences, Poland)
  // { name: "Katarzyna Antosz", role: "Associate Professor, Rzeszow University of Technology", location: "Poland", image: "https://static.wixstatic.com/media/30814e_36d2bb3012e64343a18002662ca61e6b~mv2.avif" },
  { name: "Mr. Satish Kabade", role: "Product Technical Expert, Independent Researcher", location: "NJ, USA", image: "https://static.wixstatic.com/media/30814e_a31d532fb603465e846aceccb082827c~mv2.jpeg" },
  { name: "Nadine Zeinoun", role: "Master Certified Coach, President ICF Chapter Ottawa, Facilitator Saint Joseph University", location: "Lebanon", image: "https://static.wixstatic.com/media/30814e_332bdfce1cc5480f975812b50be780a8~mv2.jpeg" },
  // Temporarily removed: Dr. Tiansheng Yang (Faculty Member & Research Director, University of South Wales, United Kingdom)
  // { name: "Dr. Tiansheng Yang", role: "University of South Wales", location: "United Kingdom", image: "https://static.wixstatic.com/media/30814e_3a6549a4d2904005a224db41ca5f9cd0~mv2.avif" },
  { name: "Rajendra Ugrani", role: "Researcher and Leader, AI, ML, Security, Software", location: "California, USA", image: "https://static.wixstatic.com/media/30814e_bc3782d50a1d430d8cc0ab38bfa0b6c5~mv2.jpeg" },
  { name: "Bhavya Mehta", role: "Independent Researcher, Network Security & Cloud Networking", location: "USA", image: "https://static.wixstatic.com/media/30814e_be46da2c994d4e489c406f80861a2ce0~mv2.png" },
  // Temporarily removed: Ezinne Esther Arisa (Independent Director, Global Centre for Responsible Technology, South Africa)
  // { name: "Ezinne Esther Arisa", role: "Founder, Candy Rainbow Creations", location: "South Africa", image: "https://static.wixstatic.com/media/502b14_3adc2682f9064817b4728eca9cd4a0b1~mv2.jpeg" },
  { name: "Mr. Pradeep Kachakayala", role: "Cloud, Data Analytics & AI Expert", location: "United States", image: "https://static.wixstatic.com/media/30814e_b5600c07bb934f3694fd70dad6af81ee~mv2.jpeg" },
  { name: "Dr. Mehwish (Mishy) Rashid", role: "DHSc, Keiser University", location: "USA", image: "https://static.wixstatic.com/media/30814e_d030e1dbf7ef4028909beba2b99a69be~mv2.jpeg" },
  { name: "Anshuman Khandelwal", role: "Independent Researcher, Cloud Computing & Microservices Architecture", location: "North Carolina, USA", image: "https://static.wixstatic.com/media/30814e_2cb5972bc61d457eb6a1c8153a563e05~mv2.jpeg" },
  // Temporarily removed: Dr. Joe Perez (Head of Data Strategy, NC Department of Health & Human Services, Raleigh, NC, USA)
  // { name: "Dr. Joe Perez", role: "Senior Systems Specialist & Team Leader, NC Department of Health & Human Services", location: "USA", image: "https://static.wixstatic.com/media/30814e_043f012b093045da87e7c6046631b299~mv2.avif" },
  { name: "Mouhssin Ait El Mouden", role: "Researcher, Faculty of Letters, Ibn Tofail University, Kenitra", location: "Morocco", image: "https://static.wixstatic.com/media/30814e_b0c50d221b41483fa5ab8bfb50f719e5~mv2.avif" },
  { name: "Dr. Ayoub Regragui", role: "Doctorate in Applied Linguistics, Mohammed V University, Rabat", location: "Morocco", image: "https://static.wixstatic.com/media/30814e_01571faffb8f491e9d9719a975bdbc88~mv2.avif" },
  { name: "Nilesh Charankar", role: "AI Technology Leader and Independent Researcher", location: "USA", image: "https://static.wixstatic.com/media/30814e_70debe4180c34f9f83be4d5219c41358~mv2.jpeg" },
  { name: "Lawrence Mazaki Mashati", role: "Community Development Professional, IMFC", location: "Nairobi, Kenya", image: "https://static.wixstatic.com/media/30814e_86a164138da142578e674588143e3af3~mv2.jpeg" },
  { name: "Dr. Yulia Kryvenko", role: "Assistant Professor, Istanbul Sabahattin Zaim University", location: "France", image: "https://static.wixstatic.com/media/30814e_1cc9e627ca8342d59e4122b9240e638d~mv2.png" },
  { name: "Emem Akpabio", role: "Invited Delegate, International Conference Participant", location: "South Africa", image: "https://static.wixstatic.com/media/30814e_2dad2d939abb4236bcb405093be55872~mv2.jpg" },
  { name: "Dr. Dina A. Alkhodary", role: "Associate Professor", location: "Jordan", image: "https://static.wixstatic.com/media/30814e_1feb45bda81f4dcdb4b55439a6f8d65a~mv2.jpg" },
  { name: "Prajakta Talathi", role: "Data Strategy and Performance Measurement Expert", location: "USA", image: "https://static.wixstatic.com/media/30814e_bf9d3d9fb4974bc0ba217b4bb03ea14d~mv2.jpg" },
  { name: "Yesha Patel", role: "Senior Solution Architect", location: "United States", image: "https://static.wixstatic.com/media/30814e_6354e00a70db405c823ee8721026e4f1~mv2.avif" },
  // Temporarily removed: Dr. Firas Zeidan (Advisory Board Member, Institute for Technology & Human Progress, Lebanon)
  // { name: "Dr. Firas Zeidan", role: "Researcher and Professor", location: "Lebanon", image: "https://static.wixstatic.com/media/30814e_571b3e70d8ff476f8b1272ef84538d8f~mv2.jpeg" },
  { name: "Dr. Aida Mehrad", role: "Academic Director & Associate Professor, C3S Business School", location: "Spain", image: "https://static.wixstatic.com/media/502b14_2f32591e100346daa035a4aaf27ef7d7~mv2.jpeg" },
  // Temporarily removed: Dr. Zoha Rahman (Board Member, Centre for Big Data & Machine Learning, USA)
  // { name: "Dr. Zoha Rahman", role: "Founder and Country Director, Centre for Big Data & Machine Learning", location: "USA", image: "https://static.wixstatic.com/media/30814e_2a893f0530e74f178c18e5939b687048~mv2.jpg" },
  { name: "Yukti Goyal", role: "Lead Software Engineer", location: "Tampa, FL, USA", image: "https://static.wixstatic.com/media/30814e_f4baaf1857454707a3b7c0c8e5e10963~mv2.avif" },
  { name: "Trupti Raikar", role: "Independent Researcher, SAP Technology Architect", location: "Texas, USA", image: "https://static.wixstatic.com/media/30814e_ca6075e6cef84116937f732636db6914~mv2.jpeg" },
  { name: "Dr. Ruth Abiola Adimula", role: "Associate Professor, Centre for Peace and Strategic Studies", location: "Nigeria", image: "https://static.wixstatic.com/media/30814e_d096ce6ec8ff4b05a2cc1c7db574278b~mv2.jpeg" },
  { name: "Anup Gupta", role: "Associate Director – Digital Transformation Leader", location: "North Carolina, USA", image: "https://static.wixstatic.com/media/30814e_916aabc5c238468882d8066892ff6a27~mv2.jpg" },
  { name: "Nandan Sharma", role: "Information Security Leader, BC Public Service", location: "Canada / USA", image: "https://static.wixstatic.com/media/30814e_3cdb660543a146ab81e18da144efabad~mv2.jpg" },
  { name: "Prof. Dr. Alexander Bull", role: "Faculty of Business Administration, IU International University of Applied Sciences", location: "Germany", image: "https://static.wixstatic.com/media/30814e_add55fc0895a4b0b9aebdd381f822484~mv2.jpeg" },
  { name: "Hemang Upadhyay", role: "Independent Researcher, AI, E-commerce & Analytics", location: "USA", image: "https://static.wixstatic.com/media/30814e_d8f3f76a4383421eb967c779a89ac17f~mv2.jpeg" },
  { name: "Navin Kumar Chhibber", role: "AI/ML, GenAI and Data Platforms Leader, Product Engineering and Digital Transformation Expert", location: "USA", image: navinImg },
  // Temporarily removed: Dr. Ratna Raja Kumar Jambi (Director, Innovora Mind LLC, USA)
  // { name: "Dr. Ratna Raja Kumar Jambi", role: "Director, Innovora Mind LLC", location: "USA", image: "https://static.wixstatic.com/media/30814e_68b76caedcdf48b6988367c0c06ab3c8~mv2.jpeg" }
];

const AdvisoryMembers = () => (
  <>
    <PageHero
      eyebrow="Global Leadership"
      title="International Advisory Board"
      description="The distinguished experts, researchers, and thought leaders guiding our vision and global initiatives."
      variant="mesh"
    />
    <section className="container py-16 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {advisoryMembers.map((member, i) => (
        <Card key={i} className="overflow-hidden hover:shadow-elegant transition-smooth group flex flex-col items-center text-center p-8 border-0 bg-muted/30">
          <div className="relative w-full aspect-[4/4.5] max-w-[200px] mb-6 overflow-hidden rounded-2xl border-2 border-primary/20 bg-muted/60 shadow-lg group-hover:border-accent/50 group-hover:shadow-xl transition-all shrink-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>
            <img src={member.image} alt={member.name} className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105" loading="lazy" />
          </div>
          <h3 className="font-serif font-bold text-xl text-primary leading-tight mb-2">{member.name}</h3>
          <p className="text-sm text-muted-foreground font-medium mb-4 line-clamp-3">{member.role}</p>
          {member.location && (
            <div className="mt-auto inline-flex items-center justify-center w-full pt-4 border-t border-border/50 gap-1.5 text-xs font-bold text-accent uppercase tracking-wider">
              <Globe className="h-4 w-4" /> {member.location}
            </div>
          )}
        </Card>
      ))}
    </section>
  </>
);

export default AdvisoryMembers;
