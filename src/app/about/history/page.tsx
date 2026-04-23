import CTA from "@/components/CallToAction";
import Image from "next/image";

const History = () => {
  return (
    <div className="">
       <div className="relative flex py-8 md:py-16 px-4 h-100 justify-center items-center">
              <Image
                src="/class2.jpeg"
                alt="President"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center flex-col gap-4">
                {" "}
              </div>
      
              <div className="relative text-white text-center">
                <h1 className="text-2xl md:text-3xl font-lora font-bold mb-4">
Our History                </h1>
                
              </div>
            </div>
            <div className=" mx-auto max-w-3xl text-justify p-4 my-4 md:my-16 ">

      <p>
        Grace Life Bible College has a rich history that dates back to before
        2015. The founder and president of the institution Pastor Situma Wanjala
        was involved in extensive regional evangelistic campaigns and training
        under the Evangelism Explosion (EE) program. <br /> <br /> The program left many
        pastors in the larger East African region, including Kenya, Uganda,
        South Sudan, and Tanzania, yearning for more and asking themselves,
        “What’s next?” After much prayer and soul-searching, the Grace Life
        Bible College Vision was born. Initially housed in Eldoret, the program
        relied on occasional volunteer missionary lecturers. However, in 2017,
        the college moved to Webuye after the Lord providentially gifted the
        institution with the Webuye Campus facility. Since then, the college has
        grown and developed, equipping students with the knowledge and skills
        necessary for effective ministry.<br /> <br /> Grace Life Bible College takes pride
        in the significant impact its alumni are making in their local churches
        and communities. This impact is a testament to the college’s commitment
        to academic excellence and quality education. The inspiring stories of
        the alumni serve as a powerful reminder of the enduring mission of the
        college: to equip students to become Christian leaders who will make a
        positive difference in the world. The college remains committed to its
        founding vision of holistic ministry and biblical authority in all
        subjects, rejecting all teaching that is not founded directly on the
        Scriptures.
      </p>
            </div>

            <CTA/>
    </div>
  );
};

export default History;
