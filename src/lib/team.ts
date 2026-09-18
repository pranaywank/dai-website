/**
 * Team directory — factual roster with a photo-swap system.
 * To add a real photo: drop it in `public/images/team/` named `<slug>.jpg`
 * (e.g. `mohit-ramani.jpg`) and set that member's `photo` field to
 * `/images/team/mohit-ramani.jpg`. Members without photos render
 * gradient initial avatars. Roles/titles below are factual directory data.
 */
export type Member = { name: string; role: string; linkedin?: string; photo?: string };

export const LEADERSHIP: Member[] = [
  { name: "Mohit Ramani", role: "Founder & CEO", linkedin: "https://www.linkedin.com/in/mohit-ramani-8a702122/" , photo: "/assets/Team/Mohit%20Ramani.jpg"},
  { name: "Tejas Singh Kohli", role: "Lead — XR, Gaming & AI", linkedin: "https://www.linkedin.com/in/tejas-singh-kohli-88b04a151/" , photo: "/assets/Team/Tejas%20Singh%20Kohli.png"},
  { name: "Pranay Wankhede", role: "Founder's Office", linkedin: "https://www.linkedin.com/in/pranaywankhede/" },
  { name: "Harikant Solanki", role: "Content Lead" , photo: "/assets/Team/Harikant%20Solanki.png"},
  { name: "Supriya Dwivedi", role: "CMS Lead", linkedin: "https://www.linkedin.com/in/supriya-dwivedi-58a145138/" , photo: "/assets/Team/Supriya%20Dwivedi.png"},
];

export const TEAM: Member[] = [
  { name: "Iqrar Ahmed", role: "Accounts & Admin Manager", linkedin: "https://www.linkedin.com/in/iqrar-ahmed-82b452205/" , photo: "/assets/Team/Iqrar%20Ahmed.jpg"},
  { name: "Mukul Tajane", role: "Account Manager, Govt Business", linkedin: "https://www.linkedin.com/in/mukul-tajane-59877a188/" , photo: "/assets/Team/Mukul%20Tajane.jpg"},
  { name: "Atul Singh", role: "Sr. Software Engineer" , photo: "/assets/Team/Atul%20Singh.jpg"},
  { name: "Mohammad Asim Khan", role: "Software Engineer", linkedin: "https://www.linkedin.com/in/mohdasimkhan/" , photo: "/assets/Team/MohammadAsimKhan.jpg"},
  { name: "Guneet Singh Dhir", role: "Software Engineer" , photo: "/assets/Team/Guneet%20Singh%20Dhir.jpg"},
  { name: "Piyush Dayal", role: "3D Modeling & Texturing Artist" },
  { name: "Anirudh Bhattacharya", role: "Sr. Technical Artist" },
  { name: "Mudit Kumar", role: "Sr. Modeling & Texturing Artist" , photo: "/assets/Team/Mudit%20Kumar.jpg"},
  { name: "Aitha Vinay", role: "QA Analyst" , photo: "/assets/Team/Aitha%20Vinay.jpg"},
  { name: "Sahil Rastogi", role: "3D Environment Artist" , photo: "/assets/Team/Sahil%20Rastogi.jpg"},
  { name: "Abhit Choudhury", role: "3D Animator" , photo: "/assets/Team/Abhit%20Choudhury.jpg"},
  { name: "Rangesh US", role: "UI/UX Designer" , photo: "/assets/Team/Rangesh.jpg"},
  { name: "Siddhant Shinde", role: "Software Engineer" , photo: "/assets/Team/Siddhant_Shinde.jpg"},
  { name: "Rishabh", role: "3D Generalist Artist" },
];

export function initials(name: string) {
  return name.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase();
}
